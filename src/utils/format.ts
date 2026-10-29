const formatters = {
  whole: new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }),
  decimal: new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }),
};

/** Formatta un prezzo in euro secondo le convenzioni italiane ("14 €", "14,50 €"). */
export const formatPrice = (value: number): string =>
  (Number.isInteger(value) ? formatters.whole : formatters.decimal).format(value);

/** Restituisce il numero di telefono in formato utilizzabile in un link `tel:`. */
export const toTelHref = (phone: string): string => `tel:${phone.replace(/[^\d+]/g, '')}`;

/** Aggiunge zeri iniziali, utile per le numerazioni editoriali (01, 02, ...). */
export const pad = (n: number, size = 2): string => String(n).padStart(size, '0');
