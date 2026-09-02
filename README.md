# RaceAway MVP

RaceAway is an independent, Traditional Chinese motorsport travel guide for Hong Kong and Taiwan readers. This MVP helps readers understand race tickets, seating and Singapore race-trip planning; it does not sell tickets.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. In Vercel choose **Add New → Project** and import it.
3. Keep the detected **Next.js** framework and default build settings.
4. Deploy, then add the production domain.
5. Replace `https://raceaway.example` in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` with that domain.

## Content insertion points

- Official Instagram, Threads and Facebook URLs: `components/SocialLinks.tsx`.
- Klook, KKday and Trip.com affiliate URLs: `app/singapore-gp/tickets/page.tsx`; set each URL and remove `disabled` from its `AffiliateButton`.
- Verified 2026 race dates/event information: `app/singapore-gp/page.tsx`, at the marked TODO.
- Analytics: `lib/analytics.ts` and the TODO in `components/AffiliateButton.tsx`.

Always verify ticket availability, dates, prices, delivery and cancellation terms from authoritative sources before publishing. Use permitted assets only; do not add official series/team logos or unlicensed photography.
