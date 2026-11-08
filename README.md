# Portfolio site

Plain HTML, CSS and JavaScript. No build step, no framework.

## Files
- `index.html` – the page. Section order: Hero (with contact info) → About → How I work → Experience → Projects → Services → Contact.
- `projects.js` – your CV setting and projects. Add work here.
- `styles.css` – brand colors and type at the top under `:root`. Dark is the default; light mode is the second block.
- `main.js` – turns `projects.js` into cards. You shouldn't need to edit it.
- `images/` – `profile.jpg` (your photo; initials show if it's missing).

## CV
Save your CV as `resume.pdf` next to `index.html`, then set `window.RESUME = "resume.pdf";` in `projects.js`. The Download CV buttons appear.

## Preview and publish
Double-click `index.html` to preview. Publish by dragging the folder onto Netlify Drop, or push it to GitHub Pages.
