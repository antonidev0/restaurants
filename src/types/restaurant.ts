/**
 * Modello di contenuto condiviso dalle tre landing.
 * Ogni tema ha il proprio file in `src/data/`, così testo e presentazione restano separati.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Dish {
  name: string;
  description: string;
  price: number;
  tags?: string[];
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface Contact {
  address: string;
  city: string;
  phone: string;
  email: string;
  instagram?: string;
}

export interface Restaurant {
  name: string;
  tagline: string;
  description: string;
  nav: NavLink[];
  hours: OpeningHours[];
  contact: Contact;
}
