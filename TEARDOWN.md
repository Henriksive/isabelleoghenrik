# Teardown — isabelleoghenrik.com

Documents the decommissioning of this site and how to bring it back up if needed.

## Original setup

- **Hosting:** Netlify, auto-deployed from this repo's `main` branch (site: `remarkable-meerkat-6d0fc3.netlify.app`)
- **Registrar / DNS:** Cloudflare (domain registration only — DNS records were "DNS only", not proxied)
- **Build:** `npm run build` (Vite), publish directory `dist` (see `netlify.toml`)
- **CI:** `.github/workflows/deploy.yml` builds the project and uploads `dist` as a GitHub Actions artifact on every push to `main` (does not itself deploy anywhere — Netlify deployed independently via its own git integration)

### DNS records (as of teardown, 2026-08-31)

| Host | Type | Value | Proxy |
|---|---|---|---|
| `isabelleoghenrik.com` | A | `75.2.60.5` | DNS only |
| `www.isabelleoghenrik.com` | CNAME | `remarkable-meerkat-6d0fc3.netlify.app` | DNS only |

`75.2.60.5` is Netlify's shared load balancer IP (not specific to this site).

## Teardown steps taken

1. Deleted the Netlify site (`remarkable-meerkat-6d0fc3`).
2. Deleted both DNS records above in Cloudflare.
3. Domain registration in Cloudflare left untouched — no DNS records remain, domain does not resolve.

## How to restore

1. **Recreate the Netlify site**
   - In Netlify, create a new site from Git, pointing at this GitHub repo, `main` branch.
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy once to get a new `*.netlify.app` subdomain (it will likely differ from `remarkable-meerkat-6d0fc3`).

2. **Re-add DNS records in Cloudflare**
   - `isabelleoghenrik.com` — A record → Netlify's load balancer IP (get the current value from Netlify's domain setup instructions, or reuse `75.2.60.5` if Netlify confirms it's still current) — set to **DNS only**.
   - `www.isabelleoghenrik.com` — CNAME → the new site's `*.netlify.app` hostname — set to **DNS only**.

3. **Attach the custom domain in Netlify**
   - In the new site's Domain settings, add `isabelleoghenrik.com` and `www.isabelleoghenrik.com` as custom domains so Netlify's SSL cert and routing recognize them.

4. **Verify**
   - Confirm DNS propagation (`dig isabelleoghenrik.com`, `dig www.isabelleoghenrik.com`).
   - Confirm HTTPS works (Netlify auto-provisions via Let's Encrypt once DNS is correct).

## Notes

- No secrets or environment variables were in use for this static site — nothing to restore on that front.
- If `netlify.toml` or `.github/workflows/deploy.yml` have since been removed from the repo, restore them from git history before redeploying.
