# Node.js Portfolio Website

A modern, responsive portfolio website built with Node.js, Express.js, and Tailwind CSS. This website showcases web development projects and provides information about skills and experience.

## Features

- **Modern UI**: Built with Tailwind CSS for a clean, responsive design
- **Express.js Backend**: Fast and lightweight server framework
- **EJS Templating**: Server-side rendering with layout support
- **Multiple Pages**: Home, Projects, About, and Contact pages
- **Render Ready**: Configured for easy deployment on Render

## Project Structure

```
portfolio-website/
├── public/
│   └── css/
│       ├── input.css      # Tailwind CSS entry point
│       └── output.css     # Compiled CSS (generated)
├── routes/
│   └── index.js           # Route handlers
├── views/
│   ├── layout.ejs         # Base layout template
│   ├── index.ejs          # Homepage
│   ├── projects.ejs       # Projects page
│   ├── about.ejs          # About page
│   └── contact.ejs         # Contact page
├── server.js               # Express server
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── render.yaml             # Render deployment config
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build Tailwind CSS:
   ```bash
   npm run build:css
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

6. Open your browser and visit `http://localhost:3000`

## Development

### Running in Development Mode

Use `npm run dev` to start the server with nodemon, which will automatically restart when you make changes.

### Building CSS

Tailwind CSS needs to be compiled before use. Run:
```bash
npm run build:css
```

This generates `public/css/output.css` from `public/css/input.css`.

## Customization

### Adding Projects

Edit `routes/index.js` and modify the `projects` array with your own project data:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Node.js', 'Express'],
    image: '/images/project1.jpg',
    link: 'https://your-project-url.com'
  },
  // Add more projects...
];
```

### Updating Content

- **Homepage**: Edit `views/index.ejs`
- **Projects Page**: Edit `views/projects.ejs`
- **About Page**: Edit `views/about.ejs`
- **Contact Page**: Edit `views/contact.ejs`
- **Navigation**: Edit `views/layout.ejs`

### Styling

The website uses Tailwind CSS. You can:
- Modify existing Tailwind classes in the EJS templates
- Add custom CSS in `public/css/input.css`
- Update `tailwind.config.js` to customize the theme

## Deployment on Render

This project is configured for deployment on Render.

### Steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. In Render dashboard:
   - Click "New +" → "Web Service"
   - Connect your repository
   - Render will auto-detect the configuration from `render.yaml`

3. The build command will:
   - Install dependencies (`npm install`)
   - Build Tailwind CSS (`npm run build:css`)

4. The start command runs: `npm start`

5. Your site will be live at a `*.onrender.com` URL

### Environment Variables

The server uses the `PORT` environment variable (defaults to 3000 locally). Render automatically sets this, so no manual configuration is needed.

## Contact Form

The contact form is set up but currently just logs submissions. To make it functional, you'll need to:

1. Add email sending functionality (e.g., using Nodemailer)
2. Or integrate with a form service (e.g., Formspree, SendGrid)
3. Update the POST route in `routes/index.js`

## License

ISC

## Author

Your Name Here

