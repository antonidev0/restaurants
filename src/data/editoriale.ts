import type { Dish, Restaurant } from '@/types/restaurant';

export interface Article {
  kicker: string;
  title: string;
  byline: string;
  body: string[];
}

/** Piatto del listino con variazione di prezzo rispetto al "numero" precedente, in euro. */
export interface ListedDish extends Dish {
  trend?: number;
}

export interface ListinoSection {
  title: string;
  dishes: ListedDish[];
}

export interface EditorialeContent extends Restaurant {
  menu: ListinoSection[];
  masthead: { issue: string; edition: string; price: string; motto: string; weather: string };
  headline: { kicker: string; title: string; standfirst: string; byline: string; readingTime: string };
  ticker: string[];
  feature: Article & { pullQuote: string; qa: { q: string; a: string }[]; factsheet: { label: string; value: string }[] };
  recipe: { title: string; serves: string; time: string; ingredients: string[]; steps: string[]; tip: string };
  briefs: { title: string; text: string }[];
  letters: { text: string; author: string; reply: string }[];
  agenda: { day: string; title: string; text: string }[];
  numbers: { value: string; label: string }[];
  coupon: { title: string; text: string; code: string };
  colophon: { label: string; value: string }[];
}

export const editoriale: EditorialeContent = {
  name: 'Trattoria Fiume',
  tagline: 'Cucina romana, notizie dalla cucina.',
  description:
    'Dal 1962 in Trastevere, a due passi dal Tevere. Carbonara, carciofi e storie di quartiere servite su tovaglie a quadri.',
  nav: [
    { label: 'Prima pagina', href: '#prima' },
    { label: 'L’intervista', href: '#intervista' },
    { label: 'La ricetta', href: '#ricetta' },
    { label: 'Il listino', href: '#listino' },
    { label: 'Cronache', href: '#cronache' },
    { label: 'Appuntamenti', href: '#agenda' },
    { label: 'Piccoli annunci', href: '#indirizzo' },
  ],
  masthead: {
    issue: 'Anno LXIV · N. 47',
    edition: 'Edizione del pranzo',
    price: 'Gratis, il coperto no',
    motto: 'Il giornale che si mangia',
    weather: 'Roma: sereno, 19°',
  },
  headline: {
    kicker: 'Esclusiva',
    title: 'La carbonara che ha fermato Trastevere',
    standfirst:
      'Uova di Paolo, guanciale stagionato novanta giorni, pecorino di Picinisco. Nessuna panna, nessun compromesso: la ricetta di famiglia che da sessant’anni fa la fila davanti alla porta.',
    byline: 'Dalla nostra cucina',
    readingTime: '4 minuti di lettura',
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
    qa: [
      { q: 'Il piatto che non toglierebbe mai dal menu?', a: 'La gricia. È la madre di tutte le altre, e nessuno la ordina abbastanza.' },
      { q: 'E la panna nella carbonara?', a: 'In sessant’anni non è mai entrata da quella porta. Non comincerà adesso.' },
      { q: 'Un consiglio a chi cucina a casa?', a: 'Comprate meno, comprate meglio. E assaggiate sempre l’acqua della pasta.' },
    ],
    factsheet: [
      { label: 'Nata a', value: 'Trastevere, 1984' },
      { label: 'In cucina dal', value: '1993' },
      { label: 'Piatto del cuore', value: 'Gricia' },
      { label: 'Non sopporta', value: 'Il pecorino in busta' },
    ],
  },
  recipe: {
    title: 'La carbonara di casa Fiume',
    serves: '4 persone',
    time: '20 minuti',
    ingredients: [
      '320 g di rigatoni o spaghettoni',
      '150 g di guanciale',
      '4 tuorli e 1 uovo intero',
      '80 g di pecorino romano',
      'Pepe nero in grani',
    ],
    steps: [
      'Taglia il guanciale a listarelle e fallo rosolare in padella senza olio, finché il grasso diventa trasparente.',
      'Sbatti tuorli, uovo e pecorino con abbondante pepe macinato al momento: deve venire una crema densa.',
      'Scola la pasta al dente e saltala nella padella del guanciale, a fuoco spento.',
      'Aggiungi la crema d’uovo e un mestolo d’acqua di cottura, mescolando veloce finché diventa lucida.',
    ],
    tip: 'Mai sul fuoco dopo le uova: la padella calda basta e avanza.',
  },
  menu: [
    {
      title: 'Primi',
      dishes: [
        { name: 'Carbonara', description: 'Guanciale, tuorlo, pecorino romano, pepe', price: 14, trend: 0 },
        { name: 'Cacio e pepe', description: 'Tonnarelli, pecorino, pepe tostato', price: 13, trend: 0 },
        { name: 'Amatriciana', description: 'Bucatini, guanciale, pomodoro San Marzano', price: 13, trend: 0.5 },
        { name: 'Gricia', description: 'Rigatoni, guanciale croccante, pecorino', price: 12, trend: -0.5 },
      ],
    },
    {
      title: 'Secondi',
      dishes: [
        { name: 'Saltimbocca', description: 'Vitello, prosciutto, salvia, vino bianco', price: 18, trend: 0 },
        { name: 'Coda alla vaccinara', description: 'Cotta sei ore, sedano, cacao amaro', price: 20, trend: 1 },
        { name: 'Abbacchio a scottadito', description: 'Costolette di agnello, patate al rosmarino', price: 21, trend: 0 },
      ],
    },
    {
      title: 'Contorni & dolci',
      dishes: [
        { name: 'Carciofo alla giudia', description: 'Fritto due volte, sale e limone', price: 8, tags: ['stagione'], trend: 0.5 },
        { name: 'Puntarelle', description: 'Alici, aglio, aceto', price: 7, trend: 0 },
        { name: 'Maritozzo', description: 'Con panna montata, come al bar', price: 6, trend: 0 },
        { name: 'Tiramisù', description: 'Savoiardi, mascarpone, caffè di moka', price: 7, trend: -0.5 },
      ],
    },
  ],
  briefs: [
    { title: 'Il tavolo numero 4', text: 'Quello vicino alla finestra. Fellini, si dice, ci ha disegnato sopra un tovagliolo. Il tovagliolo non c’è più, la leggenda sì.' },
    { title: 'Il pane di via Natale', text: 'Arriva ogni mattina alle sei dal forno all’angolo, ancora caldo. È lo stesso fornaio da trentadue anni.' },
    { title: 'Domenica, cucina aperta', text: 'Il primo weekend del mese chiunque può entrare in cucina e guardare. Assaggiare è incluso, lavare i piatti no.' },
  ],
  letters: [
    {
      text: 'Gentile redazione, ho chiesto il parmigiano sulla cacio e pepe e il cameriere ha fatto finta di non sentire. È normale?',
      author: 'Lettera firmata, Milano',
      reply: 'Normalissimo. Le vogliamo bene lo stesso.',
    },
    {
      text: 'Sono tornato dopo vent’anni e il carciofo era identico a come lo ricordavo. Grazie per non essere cambiati.',
      author: 'Giorgio, Testaccio',
      reply: 'Grazie a lei per essere tornato. Il tavolo 4 la aspetta.',
    },
  ],
  agenda: [
    { day: 'Mar', title: 'Gricia day', text: 'La gricia a 10 € per tutto il pranzo.' },
    { day: 'Ven', title: 'Baccalà in pastella', text: 'Come nelle friggitorie di una volta, finché dura.' },
    { day: 'Sab', title: 'Cantina aperta', text: 'Degustazione di tre vini del Lazio, dalle 18:30.' },
    { day: 'Dom', title: 'Cucina aperta', text: 'Primo weekend del mese, ore 11:00. Su prenotazione.' },
  ],
  numbers: [
    { value: '1962', label: 'anno di apertura' },
    { value: '3', label: 'generazioni ai fornelli' },
    { value: '38', label: 'coperti, non uno di più' },
  ],
  coupon: {
    title: 'Ritaglia e conserva',
    text: 'Mostra questo ritaglio al tavolo: il maritozzo lo offre la casa.',
    code: 'FIUME47',
  },
  colophon: [
    { label: 'Direttrice', value: 'Marta Fiume' },
    { label: 'Redazione', value: 'La cucina' },
    { label: 'Fotografia', value: 'Nessuna: qui si mangia' },
    { label: 'Tipografia', value: 'Playfair Display, Fraunces, IBM Plex Mono' },
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
