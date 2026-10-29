import type { MenuSection, Restaurant } from '@/types/restaurant';

export interface MinimalistaContent extends Restaurant {
  menu: MenuSection[];
  principles: { title: string; text: string }[];
  tasting: { title: string; courses: number; price: number; note: string };
}

export const minimalista: MinimalistaContent = {
  name: 'Sale',
  tagline: 'Poco. Ma tutto.',
  description:
    'Dodici coperti, un solo forno, ingredienti che arrivano ogni mattina da meno di cento chilometri. Cuciniamo togliendo, finché resta solo il sapore.',
  nav: [
    { label: 'Filosofia', href: '#filosofia' },
    { label: 'Menu', href: '#menu' },
    { label: 'Orari', href: '#orari' },
  ],
  principles: [
    { title: 'Stagione', text: 'Il menu cambia quando cambia il mercato, non il calendario.' },
    { title: 'Tre elementi', text: 'Nessun piatto supera tre ingredienti principali.' },
    { title: 'Silenzio', text: 'Niente musica in sala. Si sente il fuoco, si parla piano.' },
  ],
  menu: [
    {
      title: 'Inizio',
      dishes: [
        { name: 'Pane, burro, sale', description: 'Lievito madre, burro di malga, fiocchi di Cervia', price: 6 },
        { name: 'Rapa', description: 'Cotta nella cenere, latte di mandorla, aneto', price: 12 },
        { name: 'Trota', description: 'Marinata al sale, mela verde, rafano', price: 16 },
      ],
    },
    {
      title: 'Centro',
      dishes: [
        { name: 'Risotto', description: 'Solo parmigiano trenta mesi e limone bruciato', price: 22 },
        { name: 'Tortello', description: 'Zucca, burro nocciola, salvia', price: 20 },
        { name: 'Piccione', description: 'Arrosto sull’osso, fondo scuro, radicchio', price: 32 },
      ],
    },
    {
      title: 'Fine',
      dishes: [
        { name: 'Latte', description: 'Gelato di fieno, meringa, miele di castagno', price: 10 },
        { name: 'Pera', description: 'Al vino rosso, pepe lungo', price: 9 },
      ],
    },
  ],
  tasting: {
    title: 'Percorso',
    courses: 7,
    price: 85,
    note: 'Sette portate, scelte dalla cucina. Su richiesta, abbinamento vini a 45 €.',
  },
  hours: [
    { days: 'Martedì — Sabato', hours: '19:30 — 23:00' },
    { days: 'Domenica', hours: '12:30 — 15:00' },
    { days: 'Lunedì', hours: 'Chiuso' },
  ],
  contact: {
    address: 'Via Tortona 18',
    city: '20144 Milano',
    phone: '+39 02 1234 5678',
    email: 'tavolo@sale.milano.it',
    instagram: 'sale.milano',
  },
};
