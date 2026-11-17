# Project Brief: Kannarie's 18th Birthday Invitation Website

Build a mobile-first invitation website for a girl's 18th birthday (debut). This site is purely informational: it informs and invites guests only. Do NOT add any RSVP, forms, buttons to confirm attendance, comment sections, or any feature that collects responses from guests.

Most guests will open it on their phones, so design for ~375-430px wide screens first, then make sure it also looks good on tablet/desktop (center the content in a phone-width column on larger screens).

## Existing files
This folder already contains the following files:

**Photos of the debutante**
- 1_option.jpeg -> use for Page 1
- 6_option.jpeg -> use for Page 2
- 13_option.jpeg -> use for Page 3

**Names**
- NAMES.md -> contains the 18 Roses, 18 Candles, 18 Blue Bills, and 18 Shots lists

First, look at each image (dimensions, orientation, where the subject is positioned) and tell me what you see. Then choose object-position / cropping so her face is never cut off on a portrait phone screen. Move the photos into assets/photos/ and keep the original filenames. Do not overwrite or delete the originals; copy them if needed. If any image is too small or low-resolution for a full-width mobile hero (under ~800px wide), warn me.

## Tech
- Plain HTML, CSS, and vanilla JavaScript (no build step), so it can be hosted free on Netlify, GitHub Pages, or Vercel.
- Structure: index.html, css/style.css, js/main.js, js/data.js, and assets/photos/.
- Lightweight and fast on slow mobile data: loading="lazy" for images below the first screen.
- Set `<meta charset="UTF-8">` and make sure special characters (like the ñ in "Oreña") display correctly.

## Design direction
- Background: black (#000 / near-black) so the photos stand out.
- Accents: champagne gold (#D4AF37 / #E8D8A8) for headings and details, soft ivory (#F5F1E8) for body text. Minimal palette. After viewing the photos, adjust the accent if another color complements them better, and tell me why.
- Fonts (Google Fonts): Playfair Display or Cormorant Garamond for the name and headings, Montserrat or Lato for details.
- Photos are full-width with a soft gradient fade into black so text stays readable.
- Subtle animations only: fade-in/slide-up on scroll, gentle gold shimmer on the name. Respect prefers-reduced-motion.
- Large tap targets, body text at least 16px, good contrast.

## Structure
Four sections, each a full-screen "page" scrolled vertically with CSS scroll-snap (use 100dvh so mobile browser bars don't break it). Include a small dot progress indicator for the 4 pages.

### Page 1: Invitation
- Photo: 1_option.jpeg
- "You are invited to the 18th Birthday of"
- Name: Kannarie Dane D. Montemayor
- Date: December 12, 2026
- Time: 4:00 PM
- Note: "Kindly arrive 15 minutes early, we'd love for you to be there at the start."
- Venue: La Conquera Events Place, Apalit, Pampanga, with a "View Location" button linking to Google Maps (this is a map link only, not a response button).
- Bottom of page: "We have reserved 2 seats for you." Make guest name and seat count configurable via URL parameters, e.g. ?guest=Maria%20Santos&seats=2 shows "Dear Maria Santos, we have reserved 2 seats for you." With no parameters, fall back to the default line.
- Small animated scroll-down chevron.

### Page 2: 18 Roses & 18 Candles
- Photo: 6_option.jpeg
- Two lists numbered 1-18: "18 Roses" and "18 Candles".
- Names come from NAMES.md. Read that file and put the names in js/data.js exactly as written.
- Use a mobile-friendly layout (tabs or accordion toggle) so the page stays uncluttered.

### Page 3: 18 Blue Bills & 18 Shots
- Photo: 13_option.jpeg
- Same layout style as Page 2: "18 Blue Bills" and "18 Shots".
- Names come from NAMES.md, stored in js/data.js exactly as written.

### Page 4: Dress Code
- Heading: "Dress Code"
- Color: Formal Black, shown with an elegant black-and-gold swatch.
- Line: "Kindly wear formal black attire."
- Optional sample attire gallery labeled "For Ladies" and "For Gentlemen", using placeholder images in assets/attire/ (women1.jpg, women2.jpg, men1.jpg, men2.jpg). Toggle with showAttireExamples: true/false in data.js.
- End with: "We can't wait to celebrate with you!"

## Extras
- Open Graph + Twitter meta tags (title, description, image = 1_option.jpeg) so the link previews nicely on Messenger/Viber/WhatsApp/Facebook.
- Page title: "Kannarie's 18th Birthday".
- Subtle countdown to December 12, 2026, 4:00 PM Philippine Time (UTC+8) on Page 1.
- All editable text (names, date, time, venue, lists, seat defaults) lives in js/data.js.

## Deliverables
1. All code, organized as above.
2. Simple placeholder images for the attire section only (photos are real).
3. A short README: how to swap photos, edit names, create personalized guest links, and deploy for free.

## Process
Before coding, describe the photos you see and confirm your plan in a few lines, then build. Preview and check the layout at 375px and 430px widths.
