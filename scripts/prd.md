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
