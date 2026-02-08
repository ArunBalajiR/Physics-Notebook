## Description
<!-- Provide a clear and concise description of your changes -->

## Type of Change
<!-- Check all that apply -->

- [ ] 🎨 New physics concept
- [ ] 🐛 Bug fix
- [ ] ✨ Enhancement/Feature
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI improvements
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement

## Concept Quality Checklist
<!-- If this PR adds a new concept, complete this checklist -->

### Structure & Content
- [ ] Follows [CONCEPT_PATTERN.md](../CONCEPT_PATTERN.md) structure
- [ ] Three complete sections with visualizations
- [ ] Mathematical equations are correct and formatted with MathJax
- [ ] All sections have AI assistant links (5 providers)
- [ ] Includes references section with academic sources
- [ ] Real-world analogies/applications included
- [ ] Concept cards (etu-card) added where appropriate

### Interactive Features
- [ ] All sliders/controls update visualizations in real-time
- [ ] Canvas animations run smoothly (60fps)
- [ ] Interactive parameters have meaningful ranges
- [ ] Visual feedback is immediate and clear

### Code Quality
- [ ] Extends `BaseVisual` class correctly
- [ ] Uses IntersectionObserver for performance
- [ ] Proper HiDPI/Retina scaling (2x)
- [ ] No console errors or warnings
- [ ] Code follows existing style patterns
- [ ] Complex logic is commented

### Design & UX
- [ ] Works in both light and dark themes
- [ ] Mobile responsive design
- [ ] Consistent with existing concept pages
- [ ] Proper spacing and typography
- [ ] Color usage is accessible

### Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile device
- [ ] All equations render correctly (MathJax loaded)
- [ ] All links work correctly

### Integration
- [ ] Added entry to `index.html` DATA array
- [ ] `href` property points to correct file
- [ ] Concept appears in library grid
- [ ] Card visualization works

## Screenshots
<!-- Add screenshots or GIFs demonstrating your changes -->

### Desktop
<!-- Screenshot of your concept on desktop -->

### Mobile
<!-- Screenshot of your concept on mobile -->

### Dark Mode
<!-- Screenshot in dark mode -->

## Physics Validation
<!-- For new concepts, explain the physics accuracy -->

- [ ] Equations verified against textbook/reference
- [ ] Units are correct and consistent
- [ ] Approximations are clearly stated
- [ ] Physical behavior is accurately simulated

**Reference Sources:**
<!-- List the textbooks or papers you referenced -->
- 

## Related Issues
<!-- Link to related issues using keywords like "Closes", "Fixes", "Resolves" -->

Closes #

## Additional Notes
<!-- Any additional information that reviewers should know -->

## Reviewer Checklist
<!-- For maintainers reviewing this PR -->

- [ ] Code quality meets project standards
- [ ] Physics/math is accurate
- [ ] Visual quality is excellent
- [ ] No performance issues
- [ ] Documentation is updated
- [ ] Ready to merge
