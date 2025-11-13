const express = require('express');
const router = express.Router();

// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A description of your first project. Showcase your skills and technologies used.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    image: '/images/project1.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A description of your second project. Highlight key features and achievements.',
    technologies: ['React', 'Tailwind CSS', 'API'],
    image: '/images/project2.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A description of your third project. Demonstrate your problem-solving abilities.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/images/project3.jpg',
    link: '#'
  }
];

// Homepage
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    projects: projects.slice(0, 3) // Show 3 featured projects on homepage
  });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects',
    projects: projects
  });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    query: req.query
  });
});

// Handle contact form submission
router.post('/contact', (req, res) => {
  // In a real application, you would handle the form submission here
  // For now, we'll just redirect back with a success message
  console.log('Contact form submitted:', req.body);
  res.redirect('/contact?success=true');
});

module.exports = router;

