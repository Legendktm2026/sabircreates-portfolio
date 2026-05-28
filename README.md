# SabirCreates Moto Creator Website

Premium React personal brand website for SabirCreates, a motorcycle travel creator focused on cinematic reels, KTM Adventure 390 rides, adventure storytelling, community growth, YouTube audience building, and sponsorship readiness.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  animations/      Shared Framer Motion variants.
  assets/          Project images and future media.
  components/
    layout/        Navbar, footer, scroll progress.
    sections/      Main homepage sections.
    ui/            Reusable buttons, cards, headings, lightbox.
  data/            Editable brand, reel, gallery, route, story, and social content.
  hooks/           Reusable React hooks.
  pages/           Page-level composition.
  styles/          Tailwind entry and global CSS utilities.
  utils/           Small shared helpers.
```

## Major Components

- `Hero`: fullscreen cinematic landing section with generated adventure visual, animated light streaks, stats, CTAs, and social links.
- `About`: creator journey and brand pillars for adventure, reels, storytelling, and professional identity.
- `Reels`: Instagram/YouTube style vertical content cards, ready to replace with live embeds.
- `Gallery`: lazy-loaded image grid with Framer Motion hover states and a lightbox.
- `BikeShowcase`: KTM Adventure 390 section with specs, creator rig, mods, and gear setup.
- `TravelMap`: animated India route placeholder with pins and a ride timeline.
- `Stories`: blog/story cards for YouTube depth and SEO content.
- `Community`: newsletter and ride-drop UI for audience building.
- `AIFeatures`: placeholder architecture for AI trip planner, routes, chatbot, and smart recommendations.
- `Collaboration`: sponsor pitch section with contact form and media-kit CTA.
- `SocialFeed`: placeholders for Instagram, YouTube, and community feed integrations.

## Customizing Content

Most homepage content lives in `src/data/siteData.js`.

- Change creator copy in `brand`.
- Add or remove reels in `reels`.
- Add gallery items in `gallery`.
- Update bike specs in `bikeSpecs`.
- Change route pins in `routePins`.
- Add blog cards in `stories`.
- Update social feed placeholders in `socialCards`.

Images live in `src/assets/images`. Import new assets in `siteData.js` and reference them from the relevant data array.

## Adding Instagram Reels and YouTube Videos

For Instagram:

1. Replace a reel card body in `src/components/sections/Reels.jsx` with an Instagram embed block or a custom thumbnail.
2. Store embed URLs in `src/data/siteData.js`.
3. Load Instagram's embed script only on the client and only when needed for better performance.

For YouTube:

1. Add `youtubeId` to reel objects in `siteData.js`.
2. Render a thumbnail using `https://img.youtube.com/vi/{youtubeId}/hqdefault.jpg`.
3. Open a modal iframe only after the user clicks play. This keeps initial page load fast.

## Deploying on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables later if APIs are connected.
5. Deploy and test desktop/mobile previews.

## Connecting a Custom Domain

1. In Vercel, open Project Settings > Domains.
2. Add your domain, for example `sabircreates.com`.
3. At your DNS provider, add the records Vercel shows.
4. Wait for DNS verification.
5. Set the production domain as primary.
6. Redirect `www` to the root domain or the root domain to `www`, depending on your brand preference.

## SEO Strategy

- `index.html` includes title, description, keywords, Open Graph, Twitter card, and theme color tags.
- Use future blog/story pages for route keywords like `KTM Adventure 390 Spiti ride`, `motorcycle travel India`, and `adventure riding routes`.
- Add real alt text for every photo.
- Add JSON-LD later for `Person`, `Organization`, `VideoObject`, and `BlogPosting`.
- Keep each ride story focused on one route, one question, or one cinematic breakdown.

## Performance Decisions

- Generated imagery is stored locally in `src/assets/images` to avoid runtime network requests.
- Gallery and card images use lazy loading where appropriate.
- Framer Motion animations use transforms and opacity for smoother GPU-friendly motion.
- Video embeds are placeholders by default; real iframes should load only after click.
- Content is data-driven so future CMS/API integration can happen without restructuring the UI.
