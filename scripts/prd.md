# AI Portfolio – Product Requirements Document

## Goal

Create a personal website that demonstrates end-to-end TypeScript/React/Node proficiency (including modern Next.js features and light AI components) for job-hunting purposes. The site must be production-ready, statically hosted on Vercel, and easy to extend.

## Must-have (v1)

1. **Landing page (marketing)** – concise elevator pitch, call-to-action buttons, social links.
2. **Blog section** – MDX-based posts for technical write-ups.
3. **Projects / Case studies** – one page per project with images, code snippets, and "lessons learned".
4. **Responsive design** – good on mobile + desktop, dark mode toggle.
5. **Navigation & layout** – Navbar, Footer, 404 page.
6. **Contentlayer integration** – type-safe content from `/content` folder.
7. **shadcn/ui components** – Button, Card, etc. to keep UI consistent.
8. **CI pipeline** – lint + build on GitHub Actions.
9. **Deployment** – automatic preview & production on Vercel.

## Nice-to-have (v1.1+)

1. **Analytics** – Vercel Analytics enabled.
2. **Testing stack** – vitest + react-testing-library for components.
3. **SEO** – OpenGraph tags, sitemap.xml.
4. **Sentry** – error monitoring.
5. **Contact form** – submits to a serverless function or third-party.

## Stretch ideas

• Integrate OpenAI API demo (e.g. blog-summarizer) to highlight AI skills.  
• Admin-only GitHub webhook to rebuild site when pushing new content.

---

### Milestones / High-level tasks

1. Repository hygiene – update deps, add Prettier, commit hooks (later).
2. Integrate Contentlayer (done).
3. Add example MDX content & routes.
4. Build Navbar & Footer.
5. Build Landing page.
6. Build Blog list & `[slug]` pages.
7. Build Projects list & `[slug]` pages.
8. Configure CI.
9. Configure Vercel project.
10. Polish (SEO, analytics, testing).

---

## Visual Design (MVP – April 2025)

### Template foundation

- Fork of `shadcn-ui/ui` repository (`apps/www`) – one-page scroll layout.
- Remove product-marketing pages; keep Hero, About, Experience, Technologies, Projects, Blog, Contact anchors.

### Color palette (High-Altitude Cool – Soft)

| Token        | Light     | Dark      | Notes                          |
| ------------ | --------- | --------- | ------------------------------ |
| Background   | `#F8FAFC` | `#0E1824` | off-white → deep navy          |
| Surface      | `#FFFFFF` | `#152232` | cards, nav                     |
| Text-primary | `#1E293B` | `#E2E8F0` | slate 800 / slate 200          |
| Accent       | `#2CB1BC` | `#22D3EE` | glacier teal – links, buttons  |
| Secondary    | `#FB8C35` | `#FDBA74` | sandstone – hovers, highlights |
| Success      | `#16A34A` | `#22C55E` | pine green badges              |

### Typography

- Headings: **Geist Sans**
- Body: **Inter**
- Code: **JetBrains Mono**
- Logo: `Sanjay Roberts_` (underscore tinted accent color).

### Copy snapshot

- **Hero title:** “Senior Data Engineer”
- **Tagline:** “Building reliable data platforms & AI-ready pipelines in the Rockies.”
- **Bio (short):** “Denver-based engineer with 8 years turning petabytes into insight. Cloud-native, SQL-loving, happiest above 10 000 ft with my dog.”

### Section outline

1. **Hero** – gradient background, CTA buttons (`View Projects`, `Read Blog`, `Get in Touch`).
2. **About Me** – two concise paragraphs (~110 words) + circular headshot.
3. **Experience** – timeline cards (ZenHome, Twitch, Meta, Spectrum).
4. **Technologies** – 3×3 icon grid (Snowflake, dbt, Airflow, etc.).
5. **Projects / Case Studies** – hero cards linking to MDX pages.
6. **Blog** – Contentlayer-driven list of posts.
7. **Contact** – social icons + mailto (full form deferred).

### Assets & Placeholders

- **Headshot** – `public/headshot-placeholder.jpg` (to be replaced).
- **Dog photo** – `public/dog-placeholder.jpg` (optional).
- **Mountain SVG** – low-opacity overlay in hero section.

### MVP Deferred

- Contact form backend
- Documentation tasks (IDs 11-17)
- OpenAI demo
