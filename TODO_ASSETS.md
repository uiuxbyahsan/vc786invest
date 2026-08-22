# TODO — Assets & Placeholders

Running list of anything using a placeholder or an asset that should be
upgraded before production.

## Needs real assets

- **University logos** (`ScholarshipSchools` section): the 12 logos were split
  out of the provided `logo-collage.png` into `public/assets/schools/*.png` and
  now render (greyscale, color on hover) in the auto-scrolling marquee. They are
  raster crops. For crisper production quality, replace any individual file with
  an official vector (SVG) mark — a few crops carry a faint stray speck from the
  collage. NOTE: a `2nd section logos` folder now exists in `/Assests` with some
  higher-quality individual marks (ambiguously named `images*.png/jpeg` + an
  Illinois `.webp`); map and swap those in if desired.

- **Contact page** (`ClosingCTA` "Contact us" button): links to
  `https://www.786vc.com/contact-us.html`. Confirm that page exists on the live
  site, or point it at a real contact form/anchor on the new site.

## Resolved

- **Founder photos** — real color portraits now installed at
  `public/assets/ahmed-khaishgi.png` (595×336) and `public/assets/ali-moiz.png`
  (450×450), sourced from `/Assests`. Rendered in natural color (no
  duotone/grayscale), `object-position: center top`.
- **MissionSplit right-column visual** — the abstract gradient placeholder was
  removed; the right column is now the quote card only, height-matched to the
  left column.

## Placeholders / generated

- **Hero background texture** — `hero-texture.avif` used as a soft-light overlay
  on the animated liquid mint gradient.

## Unused assets available in `/Assests`

- `hbs.png`, `williams-college.png`, `way-to-invest.svg`, `hero-img.png` — not
  currently placed.
