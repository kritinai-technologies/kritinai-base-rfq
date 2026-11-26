<<<<<<< HEAD
# kritinai-base-rfq

RFQ and proposal response decks for **KritinAI Technologies Pvt. Ltd.**, built as static HTML on one shared style (the KritinAI Company Profile palette, DM Sans / DM Mono type and components).

## Structure

```
index.html                                  Landing page listing every RFQ response
assets/
  css/kritinai-deck.css                     Shared stylesheet (palette, slides, tables, gantt, diagram)
  js/kritinai-deck.js                       Shared navigation (keys, swipe, #N deep links, data-goto)
  img/kritinai-logo.png                     KritinAI logo
  img/iso-27001-2022.jpg, iso-9001-2015.jpg Certificates
rfq/
  bes-ai-application-engineer/index.html    RFQ BES/AI/2026/001 — BASE AI Application Engineer, Phase I
```

## Adding a new RFQ response

1. Copy `rfq/bes-ai-application-engineer/` to `rfq/<client>-<project>/`.
2. Edit the slides in `index.html`. Keep the `<link>` to `../../assets/css/kritinai-deck.css` and the `<script>` for `../../assets/js/kritinai-deck.js`.
3. Add a card for it in the root `index.html`.

Each slide is a `<section class="slide">`. Variants: `sand` (alternate background), `hero` (cover/closing), `top` (content starts at the top). Navigation: ← → keys, swipe, buttons, or `#N` in the URL to open slide N. Print to PDF from the browser (1280×720 pages).

## Publishing with GitHub Pages

Settings → Pages → Build and deployment → *Deploy from a branch* → `main` / root. `.nojekyll` is included so the files are served as-is.

> **Confidentiality.** Proposals contain client-confidential pricing. Pages on a public repository are visible to anyone with the URL. Keep this repository private, and publish Pages only where access can be restricted (GitHub Enterprise Cloud private Pages), or share the deck as a PDF / file instead. Pages include `noindex` meta tags, but that is not access control.
=======
# kritinai-base-rfq
>>>>>>> bf962e34a45709e3453fe867970d276d59a0397c
