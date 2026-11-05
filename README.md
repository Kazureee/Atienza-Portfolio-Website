# Portfolio site

Plain HTML, CSS and JavaScript. No build step, no framework.

## Files
- `index.html` – the page. Edit your headline, services, the "Platforms I build on" list, About text and contact details here.
- `projects.js` – your CV setting and portfolio projects. This is the only file you touch to add work.
- `styles.css` – colors and layout. Colors are at the top under `:root`.
- `main.js` – turns `projects.js` into cards. You shouldn't need to edit it.
- `images/` – put project screenshots here.

## First-time setup
In `index.html`, replace anything still in [square brackets] in the About section.
Your photo: save it as `images/profile.jpg` (lowercase, exactly). If it's missing, your initials show instead.

## Light and dark mode
The site opens in light mode. Visitors can switch with the button in the header, and their choice is remembered.
Colors for both modes are at the top of `styles.css`.

## Your CV
1. Save your CV as a PDF named `resume.pdf` in the main folder (next to `index.html`).
2. Open `projects.js` and change `window.RESUME = "";` to `window.RESUME = "resume.pdf";`.
"Download CV" buttons then appear in the hero and the contact section.

## Link previews
After publishing, open `index.html`, find the `og:image` comment near the top, uncomment it and put in your real site address. This shows your photo when the link is shared on LinkedIn.

## Adding a project
1. Open `projects.js`.
2. Copy the example block at the bottom.
3. Paste it between `window.PROJECTS = [` and `];`.
4. Fill it in. Keep the comma after the closing `}` if you add more than one.
5. (Optional) Fill in `workflow` with the steps of the automation, written as `"App: what it does"`. Each step becomes a node in the card's diagram.
6. (Optional) Drop a screenshot in `images/` and set `image: "images/your-file.png"`.

Until you add a project, the Work section shows a "Case studies are on the way" message.

## Preview
Double-click `index.html` to open it in your browser. It works without a server.

## Publish
- **Netlify:** use Netlify Drop and drag this folder onto the page.
- **GitHub Pages:** push the folder to a repository, then enable Pages in the repository settings.
These platforms change their menus from time to time, so check their current docs if a step looks different.
