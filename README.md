# Kannarie's 18th Birthday Invitation

A mobile-first, static invitation website built with plain HTML, CSS, and JavaScript. It does not collect guest responses or personal information.

## Preview locally

Open `index.html` directly, or run a small local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit event details and names

All editable invitation text, event details, program names, default seat count, and the attire-gallery toggle live in `js/data.js`.

- Keep `eventDateTime` in ISO format with `+08:00` so the countdown uses Philippine time.
- Set `showAttireExamples` to `false` to hide the sample attire gallery.
- Program names are displayed in their array order.

## Swap photos

Replace the files in `assets/photos/` while keeping these filenames:

- `1_option.jpeg` — invitation page
- `6_option.jpeg` — roses and candles page
- `13_option.jpeg` — blue bills and shots page

Use images at least 800px wide. If the subject moves within a replacement photo, adjust `.photo--one`, `.photo--two`, or `.photo--three` under `object-position` in `css/style.css`.

## Personalized guest links

Add `guest` and `seats` to the URL. Spaces and special characters should be URL encoded.

```text
https://your-site.example/?guest=Maria%20Santos&seats=2
```

This displays: “Dear Maria Santos, we have reserved 2 seats for you.” Without parameters, the default reservation line from `js/data.js` is shown.

## Deploy free

- **Netlify:** drag this project folder into Netlify Drop.
- **GitHub Pages:** push the files to a GitHub repository, then enable Pages for the main branch/root folder.
- **Vercel:** import the repository and deploy it as a static site; no build command is needed.

For social link previews, deploy over HTTPS and keep the Open Graph image path in `index.html` publicly accessible. Some platforms may require an absolute image URL after the final domain is known.
