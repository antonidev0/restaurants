import type { MenuSection, Restaurant } from '@/types/restaurant';

/** Fascia di apertura: giorno (0 = domenica) e orari "HH:MM". */
export interface ServiceSlot {
  day: number;
  open: string;
  close: string;
}

export interface Supplier {
  name: string;
  product: string;
  place: string;
  km: number;
}

export interface MinimalistaContent extends Restaurant {
  menu: MenuSection[];
  meta: { since: string; coordinates: string };
  figures: { value: string; label: string }[];
  manifesto: { text: string; highlight: string[] };
  principles: { title: string; text: string }[];
  tasting: { title: string; price: number; pairing: number; courses: string[] };
  suppliers: Supplier[];
  schedule: ServiceSlot[];
  booking: { maxGuests: number; times: string[] };
}

export const minimalista: MinimalistaContent = {
  name: 'Sale',
  tagline: 'Poco. Ma tutto.',
  description:
    'Dodici coperti, un solo forno, ingredienti che arrivano ogni mattina da meno di cento chilometri. Cuciniamo togliendo, finché resta solo il sapore.',
  nav: [
    { label: 'Filosofia', href: '#filosofia' },
    { label: 'Menu', href: '#menu' },
    { label: 'Produttori', href: '#produttori' },
    { label: 'Prenota', href: '#prenota' },
  ],
  meta: {
    since: 'Dal 2019',
    coordinates: '45.4515° N, 9.1636° E',
  },
  figures: [
    { value: '12', label: 'coperti' },
    { value: '1', label: 'forno a legna' },
    { value: '<100', label: 'km dal campo' },
  ],
  manifesto: {
    text: 'Non aggiungiamo nulla che non serva. Un piatto è finito quando non c’è più niente da togliere.',
    highlight: ['togliere.'],
  },
  principles: [
    { title: 'Stagione', text: 'Il menu cambia quando cambia il mercato, non il calendario.' },
    { title: 'Tre elementi', text: 'Nessun piatto supera tre ingredienti principali.' },
    { title: 'Silenzio', text: 'Niente musica in sala. Si sente il fuoco, si parla piano.' },
  ],
  menu: [
    {
      title: 'Inizio',
      dishes: [
        { name: 'Pane, burro, sale', description: 'Lievito madre, burro di malga, fiocchi di Cervia', price: 6, tags: ['V'] },
        { name: 'Rapa', description: 'Cotta nella cenere, latte di mandorla, aneto', price: 12, tags: ['VG'] },
        { name: 'Trota', description: 'Marinata al sale, mela verde, rafano', price: 16 },
      ],
    },
    {
      title: 'Centro',
      dishes: [
        { name: 'Risotto', description: 'Solo parmigiano trenta mesi e limone bruciato', price: 22, tags: ['V'] },
        { name: 'Tortello', description: 'Zucca, burro nocciola, salvia', price: 20, tags: ['V'] },
        { name: 'Piccione', description: 'Arrosto sull’osso, fondo scuro, radicchio', price: 32 },
      ],
    },
    {
      title: 'Fine',
      dishes: [
        { name: 'Latte', description: 'Gelato di fieno, meringa, miele di castagno', price: 10, tags: ['V'] },
        { name: 'Pera', description: 'Al vino rosso, pepe lungo', price: 9, tags: ['VG'] },
      ],
    },
  ],
  tasting: {
    title: 'Percorso',
    price: 85,
    pairing: 45,
    courses: ['Pane', 'Rapa', 'Trota', 'Risotto', 'Piccione', 'Latte', 'Pera'],
  },
  suppliers: [
    { name: 'Cascina Merlata', product: 'Ortaggi', place: 'Milano', km: 6 },
    { name: 'Riso Gallo Nero', product: 'Carnaroli', place: 'Lomellina', km: 42 },
    { name: 'Allevamento Brusà', product: 'Piccione', place: 'Bergamo', km: 51 },
    { name: 'Troticoltura Adda', product: 'Trota', place: 'Lecco', km: 58 },
    { name: 'Latteria Valsassina', product: 'Burro e latte', place: 'Valsassina', km: 87 },
  ],
  hours: [
    { days: 'Martedì — Sabato', hours: '19:30 — 23:00' },
    { days: 'Domenica', hours: '12:30 — 15:00' },
    { days: 'Lunedì', hours: 'Chiuso' },
  ],
  schedule: [
    { day: 2, open: '19:30', close: '23:00' },
    { day: 3, open: '19:30', close: '23:00' },
    { day: 4, open: '19:30', close: '23:00' },
    { day: 5, open: '19:30', close: '23:00' },
    { day: 6, open: '19:30', close: '23:00' },
    { day: 0, open: '12:30', close: '15:00' },
  ],
  booking: {
    maxGuests: 6,
    times: ['19:30', '20:00', '20:30', '21:00', '21:30'],
  },
  contact: {
    address: 'Via Tortona 18',
    city: '20144 Milano',
    phone: '+39 02 1234 5678',
    email: 'tavolo@sale.milano.it',
    instagram: 'sale.milano',
  },
};
