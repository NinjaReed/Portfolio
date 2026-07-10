# Testing Guide

## Local Testing

### 1. Open in Browser
- Double-click `index.html` file
- Or right-click → Open with → Your browser

### 2. Start Local Server
```bash
# Navigate to project folder
cd "C:\Users\manoh\OneDrive\Desktop\Portfolio"

# Start Python server
python -m http.server 8000

# Open browser to:
http://localhost:8000
```

## Visual Testing

### Desktop (1200px+)
- [ ] Navigation visible at top
- [ ] Hero section displays name and photo
- [ ] All sections stack vertically
- [ ] Cards display in grid layout
- [ ] Buttons have hover effects

### Tablet (768-1024px)
- [ ] Navigation adjusts spacing
- [ ] Hero section stacks content
- [ ] Grid layouts adjust columns
- [ ] Touch targets are large enough

### Mobile (<768px)
- [ ] Navigation becomes hamburger menu
- [ ] Hero section stacks vertically
- [ ] Single column layout
- [ ] All text readable
- [ ] Buttons easy to tap

## Accessibility Testing

### Keyboard Navigation
1. Press `Tab` to navigate through interactive elements
2. Check that focus indicators are visible
3. Press `Enter` or `Space` to activate buttons/links
4. Ensure all sections are reachable

### Screen Reader Testing
1. Use NVDA (Windows) or VoiceOver (Mac)
2. Check that all images have alt text
3. Verify headings are properly structured
4. Ensure links have descriptive text

### Color Contrast
1. Use WebAIM Contrast Checker
2. Check text against background
3. Ensure 4.5:1 ratio for normal text
4. Ensure 3:1 ratio for large text

## Link Testing

### Internal Links
- [ ] Navigation links work
- [ ] Anchor links scroll to sections
- [ ] Button links work

### External Links
- [ ] Social media links open correctly
- [ ] Project links open in new tab
- [ ] Certification links work

## Performance Testing

### Load Time
1. Open browser Developer Tools
2. Go to Network tab
3. Refresh page
4. Check total load time (should be <3 seconds)

### Image Optimization
1. Check all images load
2. Verify images are not too large
3. Ensure images have alt text

## Responsive Testing

### Chrome DevTools
1. Open Developer Tools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPhone 12 (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1200px)

### Browser Stack
1. Test on actual devices if possible
2. Test on different operating systems
3. Test on different browsers

## Functionality Testing

### Navigation
- [ ] Clicking nav links scrolls to sections
- [ ] Active state updates on scroll
- [ ] Mobile menu toggles correctly

### Buttons
- [ ] Hover effects work
- [ ] Focus states visible
- [ ] Click actions work

### Forms (if added)
- [ ] Form validation works
- [ ] Error messages display
- [ ] Success messages display

## Common Issues to Check

### Missing Images
- Check browser console for 404 errors
- Verify image paths are correct
- Ensure images are in the right folder

### Broken Links
- Check all `href` attributes
- Verify external URLs
- Test anchor links

### CSS Issues
- Check for layout problems
- Verify colors match design
- Test responsive breakpoints

### JavaScript Issues
- Check browser console for errors
- Test all interactive elements
- Verify animations work

## Test Checklist

### Before Deployment
- [ ] All placeholder text replaced
- [ ] All images added
- [ ] All links updated
- [ ] Responsive design tested
- [ ] Accessibility tested
- [ ] Performance optimized
- [ ] Cross-browser tested

### After Deployment
- [ ] Live site loads correctly
- [ ] All links work on live site
- [ ] Images display correctly
- [ ] Mobile version works
- [ ] SSL certificate active

## Tools for Testing

### Browser Extensions
- WAVE (accessibility)
- Lighthouse (performance)
- Color Contrast Checker

### Online Tools
- WebAIM Contrast Checker
- BrowserStack (cross-browser)
- GTmetrix (performance)

### Local Tools
- Chrome DevTools
- Firefox Developer Tools
- VS Code Live Server

## Reporting Issues

If you find issues:
1. Note the exact problem
2. Note the browser and device
3. Take a screenshot if possible
4. Check if it's a code issue or browser issue
5. Fix or document the issue