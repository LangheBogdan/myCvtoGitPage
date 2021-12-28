alert('Work in progress');
// Selects all level two headings

const headingLevelTwo = document.querySelectorAll('h2');

//Selects all level three headings

const headingLevelThree = document.querySelectorAll('h3');

//Select all level four headings

const headingLevelFour = document.querySelectorAll('h4');

// Add class to all level two headings

const styleHeadingTwo = element => element.classList.add('headingLevelTwo');
headingLevelTwo.forEach(styleHeadingTwo);

//Add class to all level three headings

const styleHeadingThree = element => element.classList.add('headingLevelThree');
headingLevelThree.forEach(styleHeadingThree);

// Add class to all level four headings
const styleHeadingFour = element => element.classList.add('headingLevelFour');
headingLevelFour.forEach(styleHeadingFour);
