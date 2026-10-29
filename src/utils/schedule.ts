import type { ServiceSlot } from '@/data/minimalista';

const DAY_NAMES = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
const TIME_ZONE = 'Europe/Rome';

const toMinutes = (hhmm: string): number => {
  const [h = 0, m = 0] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** Giorno della settimana e minuti trascorsi dalla mezzanotte, nel fuso orario di Milano. */
const nowInRome = (date: Date): { day: number; minutes: number } => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
};

export interface OpenStatus {
  open: boolean;
  label: string;
}

/** Calcola se il ristorante è aperto e un'etichetta breve da mostrare all'utente. */
export const getOpenStatus = (schedule: ServiceSlot[], date = new Date()): OpenStatus => {
  const { day, minutes } = nowInRome(date);

  const current = schedule.find(
    (slot) => slot.day === day && minutes >= toMinutes(slot.open) && minutes < toMinutes(slot.close),
  );
  if (current) return { open: true, label: `Aperto ora · fino alle ${current.close}` };

  // Cerca la prossima apertura nei sette giorni successivi.
  for (let offset = 0; offset < 8; offset++) {
    const target = (day + offset) % 7;
    const next = schedule
      .filter((slot) => slot.day === target && (offset > 0 || toMinutes(slot.open) > minutes))
      .sort((a, b) => toMinutes(a.open) - toMinutes(b.open))[0];
    if (next) {
      const when = offset === 0 ? 'oggi' : offset === 1 ? 'domani' : DAY_NAMES[target];
      return { open: false, label: `Chiuso · apre ${when} alle ${next.open}` };
    }
  }

  return { open: false, label: 'Chiuso' };
};
