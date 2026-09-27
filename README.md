# EV Motor AR Assist

A demo web app that simulates an AR-assisted maintenance workflow for EV (electric vehicle) motors. Scan/upload a motor image, get an AI-style diagnostic report with severity-tagged issues overlaid on the image, then follow a step-by-step repair guide. A dashboard page shows live-style motor telemetry (temperature, speed, power, state of health, vibration, bearing temp).

## What it does

- **Home page:** landing page for the "AR motor maintenance" concept.
- **Diagnose (`/diagnose`):** upload or capture a motor image (image-uploader), POSTs it to the `/api/analyze-motor` endpoint, and renders the result with AR-style overlay markers on the photo (ar-scan + diagnostic-result components).
- **Diagnosis output:** a list of detected issues — e.g. Motor Overheating (critical), Current Imbalance (moderate), Excessive Vibration (warning), Bearing Issue (moderate) — each with description, confidence score, and x/y overlay location on the scan.
- **Repair guide (`/repair-guide`):** step-by-step guidance for the detected issues.
- **Dashboard (`/dashboard`):** telemetry view — motor temperature, motor speed (RPM), power output (W), state of health (SOH %), vibration, current imbalance, bearing temperature, predictive failure time.
- The analysis is driven by sensor CSV data (motor temp, RPM, power, SOH, vibration, imbalance, bearing temp) fetched and parsed with Papa Parse, then run through threshold-based fault-detection rules.

> Note: this is a **simulation/demo** — the "AR scan" is a stylized image overlay, and the diagnosis comes from sample telemetry + rule thresholds, not a real ML model.

## Tech stack

| Layer        | Technology                                |
|--------------|-------------------------------------------|
| Framework    | Next.js 15 (App Router)                   |
| UI library   | React 19                                  |
| Styling      | Tailwind CSS, `tailwindcss-animate`       |
| Components   | Radix UI + shadcn/ui                      |
| CSV parsing  | Papa Parse (`papaparse`)                  |
| Theming      | next-themes                               |
| Fonts        | Geist (via `geist` package)               |
| Analytics    | `@vercel/analytics`                       |
| Language     | TypeScript                                |

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:3000
```

Production build + run (needs a Node server for the API route):

```bash
npm run build
npm run start
```

## Project structure

```
.
├── app/
│   ├── page.tsx                 # landing page
│   ├── dashboard/page.tsx       # telemetry dashboard
│   ├── diagnose/page.tsx        # scan → diagnose flow
│   ├── repair-guide/page.tsx    # step-by-step repair guide
│   └── api/
│       └── analyze-motor/
│           └── route.ts         # POST: { imageData } -> issues + metrics
├── components/
│   ├── image-uploader.tsx       # upload/capture motor image, calls API
│   ├── ar-scan.tsx              # scan view with overlay markers
│   ├── diagnostic-result.tsx    # issues list rendering
│   ├── site-header.tsx
│   └── ui/                      # shadcn/ui primitives
├── lib/utils.ts
├── public/
└── next.config.mjs
```

## How the diagnosis works

1. `image-uploader.tsx` POSTs the image to `/api/analyze-motor`.
2. The route fetches a sample motor-telemetry CSV (from a Vercel Blob URL), parses it with Papa Parse, and takes the latest row.
3. Threshold rules check motor temperature (>100 °C), current imbalance (>3 %), vibration (>4 mm/s²), and bearing temperature (>55 °C), producing issues with severity, description, confidence, and overlay coordinates.
4. The client renders the issues as AR-style pins over the uploaded image.

## Environment variables

None required.

## Deployment notes

- **Needs a Node server** — the `/api/analyze-motor` POST route rules out pure static hosting (GitHub Pages / Cloudflare Pages static). Deploy to Vercel / Netlify / any Node host with `npm run build && npm run start`.
- The API route fetches sample CSV telemetry from a `public.blob.vercel-storage.com` URL (a v0-generated asset). If that URL ever goes stale, replace `fetchAndParseCSV()` with a local CSV under `public/` and the analysis keeps working.

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
