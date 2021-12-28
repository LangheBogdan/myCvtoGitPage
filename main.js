alert('Work in progress');
// Selects all level two headings
const headingLevelTwo = document.querySelectorAll('h2');

// Add class to all level two headings
const styleHeadingTwo = element => element.classList.add('headingLevelTwo');

headingLevelTwo.forEach(styleHeadingTwo);
