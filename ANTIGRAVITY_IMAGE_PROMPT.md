Paste everything below this line into Antigravity as one prompt.

---

You're working in a Next.js 16 (App Router, TypeScript, Tailwind v4) marketing site for **Naam Transfer**, a real business in Ahmedabad, India that handles electricity/gas/municipal name-transfer paperwork for new homeowners after they take possession of a property. Tagline: "easy ho gaya." (Hindi/Gujarati for "made easy"). Brand tone: confident, clean, calm — never flashy or salesy.

Your job: analyze the codebase to find every remaining placeholder image slot, then generate real images to fill them and wire them in. Some slots already have real photography from the client's existing site — don't touch those. This doc lists the ones that still need generated images, file by file, so start there instead of re-discovering them from scratch — but do grep the codebase yourself to confirm nothing's changed since this was written.

## Brand system (read `src/app/globals.css` for the source of truth)

- Primary navy: `#112b58` (fixed brand band color — token `--brand-navy` / `--brand-navy-2` (`#30485e`), do not use the adaptive `--primary` token for anything meant to always read as "the navy band," that token intentionally lightens in dark mode for text contrast)
- Activation orange: `#ca510e` — accent only, used sparingly (CTA buttons, small highlights)
- Sage green: `#4f8a62` — secondary accent, used even more sparingly
- Background: warm off-white `#fbfbf4`, not pure white
- Font: Montserrat (bold/extrabold for headings)

Any generated image that includes color should pull from this exact palette — no generic blue/purple gradients, no stock-photo color grading that clashes with the navy/orange/sage system.

## Hard constraints — read before generating anything

1. **No fake customer/testimonial photos.** `src/components/home/Testimonials.tsx` currently shows initials in colored circles (`PM`, `RS`, `AK`) instead of photos, deliberately — there are no real customer photos available (confirmed by fetching the client's old site; what looked like testimonial avatars there turned out to be blog header graphics, not headshots). Do not generate AI photos of "customers" and pass them off as real people giving testimonials — that's misrepresentation. Leave this component alone.
2. **No fake pricing, license numbers, or stats.** Not an imagery concern directly, but if any image you generate includes rendered text (a banner-style graphic, like the real blog headers do), do not invent numbers, prices, or claims not already in the codebase's copy.
3. **The "Sponsored" ad slot in `src/components/home/Hero.tsx` is a real ad partner (Jukebox) placeholder** — the "JB" box is intentional until the client provides their actual ad creative. Don't generate a fake logo for it.
4. **Don't touch `src/app/icon.svg`, `src/app/apple-icon.tsx`, or `src/app/opengraph-image.tsx`** — those are already code-generated (SVG / `next/og` `ImageResponse`), not raster placeholders, and are done.
5. Match the existing photography that's already real (see below) in tone — if you generate anything depicting people, make it look like real Indian professionals/homeowners in Ahmedabad, not generic Western stock-photo casting, and keep skin tones, clothing, and settings plausible for the market. No garbled/fake text rendered into photos (a known AI-image tell — the client's own old blog art had this problem, e.g. a clipboard document with unreadable gibberish text; avoid generating any image where legible-looking-but-fake text appears).

## What's already real — do not regenerate

- `public/blog/gujarat-gas.jpg`, `public/blog/adani-gas.jpg`, `public/blog/ugvcl.png` — genuine on-brand blog header graphics pulled from the client's existing site, already wired into `src/lib/blog.ts` and rendered via `next/image` in `src/components/home/BlogPreview.tsx`, `src/app/blog/page.tsx`, and `src/app/blog/[slug]/page.tsx`. Leave these three alone.

## Slots that need generated images

### 1. Trust block photo panels — `src/components/home/TrustBlock.tsx` (lines ~14-21)
Currently three flat color divs (a big navy gradient rectangle + two smaller navy-tinted squares) standing in for real photography, explicitly marked `{/* Photography pending */}` in the code. Replace with three real generated images depicting the actual service: a field expert handing over a folder of documents at a homeowner's door, a close-up of hands signing/exchanging paperwork with keys visible on a table, and a modern Ahmedabad apartment building exterior or a satisfied homeowner holding new keys. Keep the navy/warm tone consistent across all three — they should read as one cohesive photo set, not three unrelated stock images. Aspect ratios: first panel is `16:10` (wide), other two are `1:1` (square). Save to `public/trust/` (create the folder), wire in via `next/image` with `fill` + the existing container `className`, matching how `TrustBlock.tsx`'s siblings already use `next/image` elsewhere in this codebase (see `BlogPreview.tsx` for the pattern: `fill`, `sizes`, `object-cover`).

### 2. Missing blog header image — `src/lib/blog.ts`
The `amc-name-transfer-ahmedabad-guide` post has `image: null` while the other three posts have real header images. Generate a matching header graphic in the *exact* visual style of the three real ones in `public/blog/` — navy or sage background (pick whichever isn't already overused across the other three), the NAAM TRANSFER wordmark in a white pill top-left, bold white headline "AMC Name Transfer in Ahmedabad" plus the subhead already in the post's `dek` field, and small pill/tag labels for a few real Ahmedabad neighborhoods (pull names from the `neighborhoods` array in `src/lib/nav.ts` — don't invent new ones). Study the three real images in `public/blog/` closely before generating — match their exact layout grammar (logo pill placement, headline weight/size, tag-pill style, decorative dashed-line/pin motif on the Adani/Gujarat Gas ones) rather than freelancing a new layout. Save as `public/blog/amc.{jpg,png}`, then set `image: "/blog/amc.jpg"` (or `.png`) in `src/lib/blog.ts`.

### 3. Hero background — `src/components/home/Hero.tsx` — optional, evaluate before doing
The hero is currently a solid navy gradient with a soft orange glow blob and a bold kinetic-typography headline (no photo). This was a deliberate design choice — the headline needs full contrast and the section already works. If you add photography here, it must go *behind* the existing gradient as a low-opacity/darkened layer (e.g., `absolute inset-0 opacity-20` under the existing gradient divs) so text contrast is untouched — never place a bright/busy photo directly behind white headline text at full opacity. If in doubt, skip this slot; it's the lowest-priority one on this list. If you do it: a wide (roughly 16:9 or wider) photo of a Naam Transfer field expert at a homeowner's doorstep with a document folder, shot naturally, not staged-looking.

### 4. Service detail page heroes — `src/app/services/[slug]/page.tsx` (~line 34)
Each service page (`/services/electricity`, `/services/gas`, `/services/amc`, `/services/documentation`) has a navy hero band with text only, no imagery — same contrast caveat as #3 applies if you add a background photo. Lower priority than #1 and #2. If you do this, generate one distinct, relevant photo per service (an electricity meter/panel for the electricity page, a gas connection/meter for the gas page, a municipal building or property documents for AMC, a stack of organized paperwork for documentation) and apply the same "behind the gradient, low opacity" technique as #3.

## Technical requirements

- Use `next/image` (not raw `<img>`) for every image you add, following the existing pattern in `BlogPreview.tsx` / `src/app/blog/page.tsx` (`fill` + a `relative` sized parent + `sizes` prop + `object-cover`).
- Keep generated file sizes reasonable (compress/resize before saving into `public/`) — the existing real blog images are already fairly large (2-4MB raw JPEGs at 3780x1890); don't make that worse. Prefer WebP or well-compressed JPEG/PNG at roughly 1600-2000px on the long edge, not larger.
- After adding images, run `npm run lint` and `npm run build` — both must pass clean (they do right now; keep them that way).
- Verify visually in a browser (`npm run dev`) that nothing broke contrast or layout, especially for #3 and #4 if you do them — text must stay legible over any new background photo.
- This project has `tdd-guard` disabled (see `.claude/tdd-guard/data/config.json` — `guardEnabled: false`) since there's no test runner yet; you don't need to write tests for this image-only work.

## Order of operations

Do #1 and #2 first — they're real, clearly-scoped gaps with an existing pattern to match. Only attempt #3 and #4 if you're confident you can preserve text contrast; it's fine to leave them as-is and just report that you evaluated and skipped them.
