# JINS JOSE Portfolio

Personal portfolio for JINS JOSE, a software developer focused on backend systems, AI integration, and open source.

**Live website:** [https://www.jinsss.tech](https://www.jinsss.tech)

## Development

Requires Node.js 20.9 or later. Built with Next.js 16.2.6, React 19, Tailwind CSS, and Framer Motion.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build, then `npm start`.

## Content

- Contact and navigation: `lib/site.ts`
- Projects and contributions: `lib/projects.ts`
- Identity: `components/sections/` and `app/about/`
- Metadata: `app/layout.tsx` and `lib/metadata.ts`

Contact links open email, phone, WhatsApp, and social profiles directly. No messages are sent through the application and no mail service credentials are required. The old services URL redirects to projects.

Set `NEXT_PUBLIC_SITE_URL=https://www.jinsss.tech` when deploying to enable canonical URLs, social preview images, and the sitemap.

## Design Attribution

- **UI/UX Design & Prototyping:** Designed with **Google Stitch** to establish the visual direction, layout hierarchy, typography, and motion flow.
- **AI-Assisted Development:** Built and refined using **Codex - ChatGPT Astra** for frontend implementation, responsive styling, and component structuring while preserving the original visual direction and animations.
- **Design References & Visual Assets:** Layout inspiration drawn from modern developer portfolio showcases across third-party design galleries, with curated visual references and graphic elements sourced via **Pinterest**.
