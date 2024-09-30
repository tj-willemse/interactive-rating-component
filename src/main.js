import '../styles/modern.css';
import '../styles/style.css';
import '../styles/components/thank-you.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/thank-you-buttons.css';
import '../styles/util.css';

// get elements
const ratingButtons = document.querySelectorAll('.btn-number');
const submitButton = document.querySelector('.btn-bottom');
const selectedNumber = document.getElementById('selected-number');
const thankYouBox = document.querySelector('.thank-you-box');
const ratingBox = document.querySelector('.rating-main-box');

// create elements
let currentSelection = null;

// create functions
function selectNumber(e) {
  if (currentSelection) {
    currentSelection.style.backgroundColor = '';
    currentSelection.style.fontWeight = '';
    currentSelection.style.color = '';
  }

  e.target.style.backgroundColor = '#ff8b23';
  e.target.style.fontWeight = 'bold';
  e.target.style.color = ' hsl(0, 0%, 100%)';

  currentSelection = e.target.innerText;
}

function addNumber(e) {
  if (currentSelection) {
    thankYouBox.style.display = 'block';
    ratingBox.style.display = 'none';
    selectedNumber.innerText = currentSelection;
  } else {
    ('');
  }
}

// create event listeners
submitButton.addEventListener('click', addNumber);

ratingButtons.forEach((button) => {
  button.addEventListener('click', selectNumber);
});
