# Dean — Portfolio

Production-ready personal portfolio for **Emmanuel "Dean" Bwos** — Full-Stack Developer & AI Automation Expert.

Built with **Vite + React + Tailwind CSS + Framer Motion**. Dark, animated, fully responsive.

## Run it

```bash
npm install
npm run dev      # start dev server → http://127.0.0.1:5180
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Make it yours (all in one place)

Almost everything lives in **`src/data/content.js`** — edit that file and the whole
site updates. Name, headline, roles, bio, stats, expertise, experience timeline,
projects, services, testimonials, contact details and social links.

### Swap in your real assets (`public/assets/`)

| File | What it's for |
|------|---------------|
| `profile.jpg` | Your hero portrait. Until you add it, a branded placeholder shows. |
| `cv.pdf` | Enables the **Download CV** button. |
| `studybuddy.png` / `schoolapp.png` | Project screenshots (already captured live). |

### Brand / colors

- Logo: `src/components/Logo.jsx` (+ favicon at `public/dean-logo.svg`)
- Color palette & animations: `tailwind.config.js`
- Global styles / reusable classes: `src/index.css`

## Deploy

This is a static site — deploy the `dist/` folder anywhere:

- **Vercel / Netlify:** import the repo, framework preset **Vite**, build `npm run build`, output `dist`.
- **GitHub Pages / any static host:** upload `dist/`.

## Structure

```
src/
  data/content.js      ← EDIT THIS for all content
  components/          ← Navbar, Hero, About, Expertise, Experience,
                         Projects, Services, Testimonials, Contact, Footer
  App.jsx              ← page assembly + scroll progress + cursor glow
```

## Handy

- Add `?static=1` to the URL to render every section in its resting (non-animated)
  state — useful for screenshots, previews and print.

---

Contact: heavensaint707@gmail.com · [LinkedIn](https://linkedin.com/in/emmanuel-bwos-237590203/) · [GitHub](https://github.com/Deanthestallion)
