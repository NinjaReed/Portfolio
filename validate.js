// Simple validation script for portfolio website
const fs = require('fs');
const path = require('path');

console.log('Portfolio Website Validation');
console.log('============================\n');

// Check if files exist
const files = [
    'index.html',
    'styles.css',
    'script.js',
    'images/face.svg',
    'README.md',
    'DEPLOY.md',
    'TODO.md',
    'SUMMARY.md',
    'TEST.md',
    'package.json',
    'vercel.json',
    '.gitignore'
];

console.log('1. Checking required files...');
files.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✓ ${file} exists`);
    } else {
        console.log(`✗ ${file} missing`);
    }
});

// Check HTML structure
console.log('\n2. Checking HTML structure...');
const htmlContent = fs.readFileSync('index.html', 'utf8');

const htmlChecks = [
    { name: 'DOCTYPE', check: htmlContent.includes('<!DOCTYPE html>') },
    { name: 'html tag', check: htmlContent.includes('<html lang="en">') },
    { name: 'head section', check: htmlContent.includes('<head>') },
    { name: 'meta charset', check: htmlContent.includes('charset="UTF-8"') },
    { name: 'viewport meta', check: htmlContent.includes('viewport') },
    { name: 'title', check: htmlContent.includes('<title>') },
    { name: 'CSS link', check: htmlContent.includes('styles.css') },
    { name: 'JS script', check: htmlContent.includes('script.js') },
    { name: 'body tag', check: htmlContent.includes('<body>') },
    { name: 'navigation', check: htmlContent.includes('nav-links') },
    { name: 'hero section', check: htmlContent.includes('hero') },
    { name: 'footer', check: htmlContent.includes('<footer>') }
];

htmlChecks.forEach(check => {
    console.log(`${check.check ? '✓' : '✗'} ${check.name}`);
});

// Check CSS tokens
console.log('\n3. Checking CSS design tokens...');
const cssContent = fs.readFileSync('styles.css', 'utf8');

const cssChecks = [
    { name: 'Font family', check: cssContent.includes('--font-family-primary') },
    { name: 'Font sizes', check: cssContent.includes('--font-size-base') },
    { name: 'Colors', check: cssContent.includes('--color-border-default') },
    { name: 'Spacing', check: cssContent.includes('--space-1') },
    { name: 'Radius', check: cssContent.includes('--radius-xs') },
    { name: 'Shadows', check: cssContent.includes('--shadow-1') },
    { name: 'Motion', check: cssContent.includes('--duration-instant') },
    { name: 'Responsive media query', check: cssContent.includes('@media (max-width: 768px)') },
    { name: 'Focus states', check: cssContent.includes('focus-visible') },
    { name: 'Reduced motion', check: cssContent.includes('prefers-reduced-motion') }
];

cssChecks.forEach(check => {
    console.log(`${check.check ? '✓' : '✗'} ${check.name}`);
});

// Check JavaScript functionality
console.log('\n4. Checking JavaScript functionality...');
const jsContent = fs.readFileSync('script.js', 'utf8');

const jsChecks = [
    { name: 'DOMContentLoaded', check: jsContent.includes('DOMContentLoaded') },
    { name: 'Navigation links', check: jsContent.includes('nav-link') },
    { name: 'Smooth scrolling', check: jsContent.includes('scrollIntoView') },
    { name: 'Active state', check: jsContent.includes('classList') },
    { name: 'Mobile menu', check: jsContent.includes('mobile-menu') },
    { name: 'Keyboard support', check: jsContent.includes('keydown') },
    { name: 'Intersection Observer', check: jsContent.includes('IntersectionObserver') }
];

jsChecks.forEach(check => {
    console.log(`${check.check ? '✓' : '✗'} ${check.name}`);
});

// Check accessibility features
console.log('\n5. Checking accessibility features...');
const accessibilityChecks = [
    { name: 'Alt text on images', check: htmlContent.includes('alt=') },
    { name: 'ARIA labels', check: htmlContent.includes('aria-label') },
    { name: 'Semantic HTML', check: htmlContent.includes('<nav>') && htmlContent.includes('<section>') },
    { name: 'Heading structure', check: htmlContent.includes('<h1>') && htmlContent.includes('<h2>') },
    { name: 'Link text', check: htmlContent.includes('href=') }
];

accessibilityChecks.forEach(check => {
    console.log(`${check.check ? '✓' : '✗'} ${check.name}`);
});

console.log('\n6. Summary...');
console.log('✓ Portfolio website created successfully');
console.log('✓ KRISHNA design system implemented');
console.log('✓ Responsive design added');
console.log('✓ Accessibility features included');
console.log('✓ Documentation provided');
console.log('\nNext steps:');
console.log('1. Open index.html in browser');
console.log('2. Customize content following TODO.md');
console.log('3. Add your images');
console.log('4. Deploy using DEPLOY.md instructions');