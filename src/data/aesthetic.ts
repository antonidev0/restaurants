import type { Dish, Restaurant } from '@/types/restaurant';

export type Mood = 'pesca' | 'salvia' | 'limone' | 'lavanda';

export interface Moment {
  id: string;
  title: string;
  time: string;
  text: string;
  mood: Mood;
  dishes: Dish[];
}

export interface Polaroid {
  caption: string;
  mood: Mood;
}

export interface Review {
  text: string;
  author: string;
  origin: string;
}

export interface AestheticContent extends Restaurant {
  eyebrow: string;
  stickers: string[];
  marquee: string[];
  story: { title: string; paragraphs: string[]; signature: string; polaroids: Polaroid[] };
  signature: (Dish & { mood: Mood })[];
  moments: Moment[];
  reviews: Review[];
  directions: { label: string; detail: string }[];
}

export const aesthetic: AestheticContent = {
  name: 'Giardino di Limoni',
  eyebrow: 'Positano · dal 1987',
  tagline: 'Colazioni lente, pranzi al sole, aperitivi color tramonto.',
  description:
    'Un piccolo giardino sospeso sulla costiera, tra pergolati di limoni e ceramiche dipinte a mano. Qui il tempo si misura in tazzine di caffè e bicchieri di spritz.',
  nav: [
    { label: 'Storia', href: '#storia' },
    { label: 'Preferiti', href: '#piatti' },
    { label: 'Menu', href: '#momenti' },
    { label: 'Dicono di noi', href: '#recensioni' },
    { label: 'Vieni a trovarci', href: '#visita' },
  ],
  stickers: ['terrazza vista mare', 'limoni del nostro orto', 'dolci fatti in casa'],
  marquee: ['Colazione', 'Pranzo', 'Aperitivo', 'Dolce vita', 'Limoncello', 'Tramonto'],
  story: {
    title: 'Una casa di famiglia, aperta a tutti',
    paragraphs: [
      'Nonna Teresa serviva limonata fresca a chiunque salisse la scalinata. Oggi la terrazza è la stessa, i limoni pure: sono cambiate solo le sedie, ora color pistacchio.',
      'Cuciniamo con quello che cresce intorno a noi: agrumi, erbe aromatiche, pomodorini del piennolo e il pescato di Marina Grande.',
    ],
    signature: 'con amore, la famiglia Esposito',
    polaroids: [
      { caption: 'la terrazza, 1987', mood: 'pesca' },
      { caption: 'i limoni di nonna', mood: 'limone' },
      { caption: 'l’orto in primavera', mood: 'salvia' },
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
    {
      id: 'colazione',
      title: 'Colazione',
      time: '8:00 — 11:00',
      text: 'Cornetti caldi, spremute e marmellate della casa.',
      mood: 'limone',
      dishes: [
        { name: 'Cornetto al limone', description: 'Sfogliato al burro, crema di limoni del giardino', price: 3 },
        { name: 'Spremuta del giorno', description: 'Arance di Sorrento e un tocco di zenzero', price: 5 },
        { name: 'Ricotta e miele', description: 'Ricotta di bufala, miele di zagara, pistacchi', price: 9 },
        { name: 'Cappuccino', description: 'Con latte d’avena su richiesta', price: 2.5 },
      ],
    },
    {
      id: 'pranzo',
      title: 'Pranzo',
      time: '12:30 — 15:30',
      text: 'Pasta fresca e pesce del giorno sotto il pergolato.',
      mood: 'salvia',
      dishes: [
        { name: 'Scialatielli ai frutti di mare', description: 'Vongole, cozze, pomodorino giallo', price: 24 },
        { name: 'Ravioli capresi', description: 'Caciotta, maggiorana, sugo di pomodorini', price: 18 },
        { name: 'Pescato al limone', description: 'Cotto in foglia di limone, patate e capperi', price: 26 },
        { name: 'Insalata del giardino', description: 'Fiori eduli, finocchio, arancia, ricotta', price: 15 },
      ],
    },
    {
      id: 'aperitivo',
      title: 'Aperitivo',
      time: '18:00 — 21:00',
      text: 'Spritz e taralli mentre il sole scende sul mare.',
      mood: 'pesca',
      dishes: [
        { name: 'Spritz alla lavanda', description: 'Prosecco, lavanda, scorza di cedro', price: 11 },
        { name: 'Limoncello tonic', description: 'Limoncello della casa, tonica, basilico', price: 10 },
        { name: 'Tagliere della costiera', description: 'Provolone del Monaco, alici, taralli', price: 16 },
        { name: 'Bruschette al pomodoro', description: 'Piennolo, origano, olio della Penisola', price: 8 },
      ],
    },
  ],
  reviews: [
    {
      text: 'Il posto più dolce della costiera. Si viene per un caffè, si resta fino al tramonto.',
      author: 'Giulia',
      origin: 'Napoli',
    },
    {
      text: 'La delizia al limone vale il viaggio. E anche tutte le scale per arrivarci.',
      author: 'Marco',
      origin: 'Torino',
    },
    {
      text: 'Ceramiche, limoni, mare. Sembra di stare dentro una cartolina dipinta a mano.',
      author: 'Sofia',
      origin: 'Firenze',
    },
  ],
  directions: [
    { label: 'A piedi', detail: '5 minuti dalla Spiaggia Grande' },
    { label: 'In navetta', detail: 'Fermata Chiesa Nuova' },
    { label: 'In barca', detail: 'Dal molo di Positano' },
  ],
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
