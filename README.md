# JINS JOSE â€” Portfolio

Personal portfolio for JINS JOSE, a software developer focused on backend systems, AI integration, and open source.

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

Set `NEXT_PUBLIC_SITE_URL` to the real portfolio origin when deploying to enable canonical URLs, social preview images, and the sitemap. No deployment domain is assumed.

## Design attribution

Adapted from [Dario George's my-corner](https://github.com/dariogeorge21/my-corner), preserving the original visual direction and motion. Personal content and project links have been replaced for JINS JOSE. The downloaded source README referenced MIT but did not include a LICENSE file; this adaptation does not assert a new license for the original source.
