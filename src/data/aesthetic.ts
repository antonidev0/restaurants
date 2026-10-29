import type { Dish, Restaurant } from '@/types/restaurant';

export type Mood = 'pesca' | 'salvia' | 'limone' | 'lavanda';

export interface Moment {
  title: string;
  time: string;
  text: string;
  mood: Mood;
}

export interface AestheticContent extends Restaurant {
  eyebrow: string;
  story: { title: string; paragraphs: string[] };
  signature: (Dish & { mood: Mood })[];
  moments: Moment[];
  quote: { text: string; author: string };
}

export const aesthetic: AestheticContent = {
  name: 'Giardino di Limoni',
  eyebrow: 'Positano · dal 1987',
  tagline: 'Colazioni lente, pranzi al sole, aperitivi color tramonto.',
  description:
    'Un piccolo giardino sospeso sulla costiera, tra pergolati di limoni e ceramiche dipinte a mano. Qui il tempo si misura in tazzine di caffè e bicchieri di spritz.',
  nav: [
    { label: 'Storia', href: '#storia' },
    { label: 'Piatti', href: '#piatti' },
    { label: 'Momenti', href: '#momenti' },
    { label: 'Visita', href: '#visita' },
  ],
  story: {
    title: 'Una casa di famiglia, aperta a tutti',
    paragraphs: [
      'Nonna Teresa serviva limonata fresca a chiunque salisse la scalinata. Oggi la terrazza è la stessa, i limoni pure: sono cambiate solo le sedie, ora color pistacchio.',
      'Cuciniamo con quello che cresce intorno a noi: agrumi, erbe aromatiche, pomodorini del piennolo e il pescato di Marina Grande.',
    ],
  },
  signature: [
    {
      name: 'Delizia al limone',
      description: 'Pan di Spagna, crema al limone di Amalfi, cuore morbido',
      price: 8,
      mood: 'limone',
      tags: ['dolce', 'iconico'],
    },
    {
      name: 'Scialatielli ai frutti di mare',
      description: 'Pasta fresca fatta a mano, vongole, cozze, pomodorino giallo',
      price: 24,
      mood: 'pesca',
      tags: ['pranzo'],
    },
    {
      name: 'Insalata del giardino',
      description: 'Fiori eduli, finocchio, arancia, ricotta di bufala, menta',
      price: 15,
      mood: 'salvia',
      tags: ['vegetariano'],
    },
    {
      name: 'Spritz alla lavanda',
      description: 'Prosecco, sciroppo di lavanda, scorza di cedro, ghiaccio',
      price: 11,
      mood: 'lavanda',
      tags: ['aperitivo'],
    },
  ],
  moments: [
    { title: 'Colazione', time: '8:00 — 11:00', text: 'Cornetti caldi, spremute e marmellate della casa.', mood: 'limone' },
    { title: 'Pranzo', time: '12:30 — 15:30', text: 'Pasta fresca e pesce del giorno sotto il pergolato.', mood: 'salvia' },
    { title: 'Aperitivo', time: '18:00 — 21:00', text: 'Spritz e taralli mentre il sole scende sul mare.', mood: 'pesca' },
  ],
  quote: {
    text: 'Il posto più dolce della costiera. Si viene per un caffè, si resta fino al tramonto.',
    author: 'Una cliente innamorata',
  },
  hours: [
    { days: 'Tutti i giorni', hours: '8:00 — 21:00' },
    { days: 'Novembre — Marzo', hours: 'Solo weekend' },
  ],
  contact: {
    address: 'Via dei Mulini 7',
    city: '84017 Positano (SA)',
    phone: '+39 089 123 4567',
    email: 'ciao@giardinodilimoni.it',
    instagram: 'giardinodilimoni',
  },
};
