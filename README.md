# Ristoranti · tre landing page

Tre landing page di ristoranti italiani, ognuna con un'identità visiva completamente diversa. Pensate prima di tutto per il mobile, poi adattate a tablet e desktop.

| Rotta | Stile | Ristorante |
| --- | --- | --- |
| `/minimalista` | Minimalista: tipografia essenziale, bianco e nero, spazio vuoto | **Sale**, Milano |
| `/aesthetic` | Aesthetic: pastelli, archi, grana da pellicola, illustrazioni | **Giardino di Limoni**, Positano |
| `/editoriale` | Editoriale: impaginazione da quotidiano, colonne, capolettera | **Trattoria Fiume**, Roma |

La rotta `/` è un indice che collega le tre landing.

## Stack

- [Astro](https://astro.build) 7: HTML statico, con pochissimo JavaScript solo dove serve.
- TypeScript in modalità `strict`, controllato con `astro check`.
- Font self-hosted tramite [Fontsource](https://fontsource.org) (nessuna richiesta a servizi esterni).
- Nessuna immagine esterna: le illustrazioni sono SVG inline.

## Comandi

Richiede Node.js 22 (vedi `.nvmrc`).

```sh
npm install
npm run dev      # server di sviluppo su http://localhost:4321
npm run build    # type-check + build statica in dist/
npm run preview  # anteprima della build
```

## Deploy su Vercel

Il progetto è già configurato (`vercel.json`): sito statico, URL senza `.html`, cache lunga per gli asset e header di sicurezza.

1. Su [vercel.com/new](https://vercel.com/new) importa il repository `restaurants`.
2. Vercel riconosce Astro da solo: lascia i valori proposti e premi **Deploy**.
3. Ogni push su `main` pubblica in produzione; ogni pull request riceve un'anteprima.

L'URL canonico viene preso dal dominio di produzione di Vercel. Per un dominio personalizzato imposta la variabile d'ambiente `SITE_URL` (es. `https://www.esempio.it`).

## Architettura

```
src/
├── types/restaurant.ts      # modello di contenuto condiviso
├── data/                    # contenuti di ogni landing (testo separato dalla presentazione)
├── utils/format.ts          # formattazione prezzi e telefono
├── layouts/BaseLayout.astro # <head>, SEO, lang="it"
├── styles/
│   ├── reset.css            # reset comune
│   └── themes/              # design token di ciascun tema
├── components/
│   ├── shared/              # componenti comuni (skip link)
│   ├── minimalista/
│   ├── aesthetic/
│   └── editoriale/
└── pages/                   # una pagina per rotta (+ 404), compone i componenti del proprio tema
```

Principi seguiti:

- **Mobile-first**: gli stili di base sono per schermi piccoli; i `@media (min-width: …)` aggiungono il layout desktop.
- **Contenuto separato dalla UI**: ogni pagina legge i dati da `src/data/`, quindi i testi si modificano senza toccare i componenti.
- **Stili incapsulati**: ogni componente ha CSS con scope locale; i token del tema vivono in `src/styles/themes/`.
- **Accessibilità**: HTML semantico, skip link, `aria-label` sulle navigazioni, focus visibile, rispetto di `prefers-reduced-motion`.
