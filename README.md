# PC Shack

Production foundation for the PC Shack website, repair enquiries, custom PC consultations and future ecommerce catalogue.

## Local development

```bash
pnpm install
pnpm dev
```

Run the production checks with `pnpm build`.

## Structure

- `app/` contains Next.js App Router routes and global metadata.
- `components/pc-shack-home.tsx` contains the current interactive homepage experience.
- `public/` contains local, approved visual assets.
- `next.config.mjs` contains deployment headers and framework configuration.

## Production configuration

The current catalogue, payments, customer accounts, order storage and outbound email are intentionally configuration-dependent. Do not present a browser redirect as payment confirmation and do not add client-controlled prices or order totals. When these systems are connected, use server-side validation, a database with least-privilege credentials, mature authentication, Stripe Checkout plus verified webhooks, and a rate limiter for public form and checkout endpoints.

Recommended environment separation:

- Development: test data and Stripe test mode.
- Staging: isolated database and Stripe test mode.
- Production: production database, restricted secrets, verified webhook endpoint and monitoring.

Never commit `.env` files or secrets. Public deployment should use HTTPS and the canonical domain `pcshack.co.uk`. Configure `www` as a redirect or canonical alias in Vercel, then point DNS to the Vercel project when the business is ready; no DNS changes are made by this repository.

## Pre-launch checklist

- Connect and test persistent repair enquiry handling.
- Connect the verified product catalogue and server-side stock/pricing.
- Configure Stripe Checkout and verify webhook signatures before fulfilment.
- Add authentication, staff roles and server-side authorization before customer accounts or admin tooling.
- Add backups, error monitoring, uptime monitoring and a tested rollback path.
- Review privacy, returns and consumer/business terms with the business before publishing.
- Run accessibility, security-header, dependency and production build checks.

The empty shop and compatibility messaging are deliberate: unverified products, stock, prices, reviews and compatibility rules are never fabricated.
