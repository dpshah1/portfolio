# Portfolio Website

A modern React portfolio website showcasing projects and work experience.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

This project is configured to deploy to GitHub Pages using HashRouter for routing compatibility.

### Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   
   Option A: Using GitHub Actions (Recommended)
   - Create a `.github/workflows/deploy.yml` file (see below)
   - Push to your repository
   - GitHub Actions will automatically deploy on push to main

   Option B: Manual Deployment
   - After building, copy the `dist` folder contents to the `gh-pages` branch
   - Or use a tool like `gh-pages`:
     ```bash
     npm install --save-dev gh-pages
     ```
     Add to `package.json` scripts:
     ```json
     "deploy": "npm run build && gh-pages -d dist"
     ```
     Then run:
     ```bash
     npm run deploy
     ```

3. **Configure GitHub Pages:**
   - Go to your repository Settings > Pages
   - Select source: `gh-pages` branch (or the branch containing your built files)
   - Save

### Important Notes

- The base path is set to `/portfolio/` in `vite.config.js`
- If your repository name is different, update the `base` property in `vite.config.js`
- HashRouter is used instead of BrowserRouter for GitHub Pages compatibility
- All routes use hash-based routing (e.g., `/#/smart-parking`)

## Project Structure

```
portfolio/
├── public/          # Static assets (images, etc.)
├── src/
│   ├── components/  # React components
│   ├── App.jsx     # Main app component with routing
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── index.html      # HTML template
├── vite.config.js # Vite configuration
└── package.json    # Dependencies
```

## Technologies Used

- React 18
- React Router DOM (HashRouter)
- Vite
- Bootstrap 5
- Font Awesome

## License

© 2024 Dhruv Shah. All rights reserved.

