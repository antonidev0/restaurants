import type { MenuSection, Restaurant } from '@/types/restaurant';

export interface Article {
  kicker: string;
  title: string;
  byline: string;
  body: string[];
}

export interface EditorialeContent extends Restaurant {
  menu: MenuSection[];
  masthead: { issue: string; date: string; price: string; motto: string };
  headline: { kicker: string; title: string; standfirst: string };
  ticker: string[];
  feature: Article & { pullQuote: string };
  briefs: { title: string; text: string }[];
  numbers: { value: string; label: string }[];
}

export const editoriale: EditorialeContent = {
  name: 'Trattoria Fiume',
  tagline: 'Cucina romana, notizie dalla cucina.',
  description:
    'Dal 1962 in Trastevere, a due passi dal Tevere. Carbonara, carciofi e storie di quartiere servite su tovaglie a quadri.',
  nav: [
    { label: 'Prima pagina', href: '#prima' },
    { label: 'Intervista', href: '#intervista' },
    { label: 'Il listino', href: '#listino' },
    { label: 'Cronache', href: '#cronache' },
    { label: 'Indirizzo', href: '#indirizzo' },
  ],
  masthead: {
    issue: 'N. 47',
    date: 'Autunno 2026',
    price: 'Gratis, il coperto no',
    motto: 'Il giornale che si mangia',
  },
  headline: {
    kicker: 'Esclusiva',
    title: 'La carbonara che ha fermato Trastevere',
    standfirst:
      'Uova di Paolo, guanciale stagionato novanta giorni, pecorino di Picinisco. Nessuna panna, nessun compromesso: la ricetta di famiglia che da sessant’anni fa la fila davanti alla porta.',
  },
  ticker: [
    'Tornano i carciofi alla giudia',
    'Venerdì: baccalà in pastella',
    'Nuova cantina: 40 etichette del Lazio',
    'Tavoli all’aperto fino a novembre',
  ],
  feature: {
    kicker: 'L’intervista',
    title: '«In cucina si comanda con le mani, non con la voce»',
    byline: 'Conversazione con Marta Fiume, terza generazione',
    body: [
      'Marta aveva nove anni quando ha tirato la sua prima sfoglia, in piedi su una cassetta di legno per arrivare al bancone. Oggi guida la cucina che fu del nonno Ettore, senza aver cambiato la disposizione dei fornelli.',
      'Il segreto, dice, non è nella ricetta ma nel ritmo: il guanciale si mette sul fuoco quando l’acqua comincia a bollire, il pecorino si grattugia all’ultimo minuto, e la pasta si salta lontano dalla fiamma. «Le uova non devono cuocere, devono innamorarsi».',
      'Il menu cambia poco e volentieri. I romani vengono per ritrovare sempre lo stesso sapore, i turisti per scoprirlo. Entrambi, giura Marta, finiscono per pulire il piatto con il pane.',
    ],
    pullQuote: 'Le uova non devono cuocere, devono innamorarsi.',
  },
  menu: [
    {
      title: 'Primi',
      dishes: [
        { name: 'Carbonara', description: 'Guanciale, tuorlo, pecorino romano, pepe', price: 14 },
        { name: 'Cacio e pepe', description: 'Tonnarelli, pecorino, pepe tostato', price: 13 },
        { name: 'Amatriciana', description: 'Bucatini, guanciale, pomodoro San Marzano', price: 13 },
        { name: 'Gricia', description: 'Rigatoni, guanciale croccante, pecorino', price: 12 },
      ],
    },
    {
      title: 'Secondi',
      dishes: [
        { name: 'Saltimbocca', description: 'Vitello, prosciutto, salvia, vino bianco', price: 18 },
        { name: 'Coda alla vaccinara', description: 'Cotta sei ore, sedano, cacao amaro', price: 20 },
        { name: 'Abbacchio a scottadito', description: 'Costolette di agnello, patate al rosmarino', price: 21 },
      ],
    },
    {
      title: 'Contorni & dolci',
      dishes: [
        { name: 'Carciofo alla giudia', description: 'Fritto due volte, sale e limone', price: 8, tags: ['stagione'] },
        { name: 'Puntarelle', description: 'Alici, aglio, aceto', price: 7 },
        { name: 'Maritozzo', description: 'Con panna montata, come al bar', price: 6 },
        { name: 'Tiramisù', description: 'Savoiardi, mascarpone, caffè di moka', price: 7 },
      ],
    },
  ],
  briefs: [
    { title: 'Il tavolo numero 4', text: 'Quello vicino alla finestra. Fellini, si dice, ci ha disegnato sopra un tovagliolo. Il tovagliolo non c’è più, la leggenda sì.' },
    { title: 'Il pane di via Natale', text: 'Arriva ogni mattina alle sei dal forno all’angolo, ancora caldo. È lo stesso fornaio da trentadue anni.' },
    { title: 'Domenica, cucina aperta', text: 'Il primo weekend del mese chiunque può entrare in cucina e guardare. Assaggiare è incluso, lavare i piatti no.' },
  ],
  numbers: [
    { value: '1962', label: 'anno di apertura' },
    { value: '3', label: 'generazioni ai fornelli' },
    { value: '38', label: 'coperti, non uno di più' },
  ],
  hours: [
    { days: 'Martedì — Domenica', hours: '12:30 — 15:00 / 19:30 — 23:30' },
    { days: 'Lunedì', hours: 'Riposo settimanale' },
  ],
  contact: {
    address: 'Vicolo del Cinque 12',
    city: '00153 Roma',
    phone: '+39 06 9876 5432',
    email: 'redazione@trattoriafiume.it',
    instagram: 'trattoriafiume',
  },
};
