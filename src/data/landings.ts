export interface LandingPreview {
  href: string;
  style: string;
  name: string;
  city: string;
  description: string;
}

/** Elenco delle landing disponibili, usato dalla pagina indice. */
export const landings: LandingPreview[] = [
  {
    href: '/minimalista',
    style: 'Minimalista',
    name: 'Sale',
    city: 'Milano',
    description: 'Bianco, nero e un granello di rosso. Tipografia essenziale e spazio vuoto.',
  },
  {
    href: '/aesthetic',
    style: 'Aesthetic',
    name: 'Giardino di Limoni',
    city: 'Positano',
    description: 'Pastelli, archi, grana da pellicola e illustrazioni morbide.',
  },
  {
    href: '/editoriale',
    style: 'Editoriale',
    name: 'Trattoria Fiume',
    city: 'Roma',
    description: 'Un quotidiano da sfogliare: testata, colonne, capolettera e listino.',
  },
];
