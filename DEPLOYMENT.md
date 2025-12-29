# Deployment Guide for GitHub Pages

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages:**

   ### Option 1: Automatic Deployment (Recommended)
   
   The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically deploy your site when you push to the `main` branch.
   
   Just push your code:
   ```bash
   git add .
   git commit -m "Convert to React app"
   git push origin main
   ```
   
   Then go to your repository Settings > Pages and select the `gh-pages` branch as the source.

   ### Option 2: Manual Deployment
   
   Install gh-pages:
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

## Important Configuration

### Base Path

The `vite.config.js` is currently set to use `/portfolio/` as the base path. 

**If your repository name is NOT "portfolio":**
1. Open `vite.config.js`
2. Change `base: '/portfolio/'` to match your repository name
   - For example, if your repo is `my-portfolio`, use `base: '/my-portfolio/'`
   - If your repo is `username.github.io`, use `base: '/'`

### Routing

This project uses HashRouter for GitHub Pages compatibility. All routes will use hash-based routing:
- Home: `/#/`
- Smart Parking: `/#/smart-parking`
- Speech Trainer: `/#/speech-trainer`
- etc.

This ensures the site works correctly on GitHub Pages without requiring server-side configuration.

## Project Structure

```
portfolio/
├── public/              # Static assets (images, etc.)
│   ├── *.png
│   ├── *.jpg
│   └── logo.png
├── src/
│   ├── components/      # React components
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── SmartParking.jsx
│   │   ├── SpeechTrainer.jsx
│   │   ├── Presto.jsx
│   │   ├── NetraAI.jsx
│   │   └── MoodsMetrics.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## Troubleshooting

### Images not loading
- Make sure all images are in the `public/` folder
- Images in `public/` are referenced as `/image.png` (not `/public/image.png`)

### Routes not working
- Ensure you're using HashRouter (already configured)
- Check that the base path in `vite.config.js` matches your repository name

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires v16 or higher)

## Old HTML Files

The original HTML files (`index.html`, `smart-parking.html`, etc.) are still in the repository but are no longer used. You can safely delete them after confirming the React app works correctly.

