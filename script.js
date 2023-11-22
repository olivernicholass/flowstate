let timer;
let time = 25 * 60; 

function startTimer() {
  const startButton = document.getElementById("startButton");

  if (timer) {
    clearInterval(timer);
    timer = null;
    startButton.textContent = "start";
  } else {
    timer = setInterval(updateTimer, 1000);
    startButton.textContent = "stop";
  }
}

function updateTimer() {
  const timerElement = document.querySelector(".timer");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  timerElement.textContent = formattedTime;

  if (time <= 0) {
    clearInterval(timer);
    timer = null;
  } else {
    time--;
  }
}


function createDivWithText(text) {
  // Create the main div element
  const mainDiv = document.createElement('div');
  mainDiv.className = 'rectangle-group';

  // Create child div elements
  const childDiv = document.createElement('div');
  childDiv.className = 'group-child';

  const itemDiv = document.createElement('div');
  itemDiv.className = 'group-item';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'group-inner';

  // Create input element
  const inputElement = document.createElement('input');
  inputElement.className = 'add-task';
  inputElement.placeholder = 'Add task...';
  inputElement.type = 'text';
  inputElement.id = 'taskInput';

  // Set the entered text as the value of the input element
  inputElement.value = text;

  // Create button elements
  const dotsButton = document.createElement('button');
  dotsButton.className = 'dots-2-1';

  const checkedButton = document.createElement('button');
  checkedButton.className = 'checked-1-1';

  // Append child elements to the main div
  mainDiv.appendChild(childDiv);
  mainDiv.appendChild(itemDiv);
  mainDiv.appendChild(innerDiv);
  mainDiv.appendChild(inputElement);
  mainDiv.appendChild(dotsButton);
  mainDiv.appendChild(checkedButton);

  return mainDiv;
}

// Event listener for Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    // Get the entered text from the input element
    const enteredText = event.target.value;

    // Create a new div with the entered text
    const newDiv = createDivWithText(enteredText);

    // Append the new div to the container
    taskContainer.appendChild(newDiv);

    // Clear the input field
    event.target.value = '';
  }
}

const numberOfDivs = 1;

const taskContainer = document.createElement('div');
taskContainer.id = 'taskContainer'; // Use a unique id
document.body.appendChild(taskContainer);

for (let i = 0; i < numberOfDivs; i++) {
  const inputElement = document.createElement('input');
  inputElement.className = 'add-task';
  inputElement.placeholder = 'Add task...';
  inputElement.type = 'text';
  inputElement.id = 'taskInput' + i; // Use a unique id for each input element

  const dotsButton = document.createElement('button');
  dotsButton.className = 'dots-2-1';

  const checkedButton = document.createElement('button');
  checkedButton.className = 'checked-1-1';

  const mainDiv = document.createElement('div');
  mainDiv.className = 'rectangle-group';

  mainDiv.appendChild(inputElement);
  mainDiv.appendChild(dotsButton);
  mainDiv.appendChild(checkedButton);

  taskContainer.appendChild(mainDiv);

  inputElement.addEventListener('keypress', handleKeyPress);
}

let verticalPosition = 756; // Add this variable to keep track of the vertical position

// Event listener for Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    // Get the entered text from the input element
    const enteredText = event.target.value;

    // Create a new div with the entered text
    const newDiv = createDivWithText(enteredText);

    // Set the vertical position for the new div and increment for the next one
    newDiv.style.top = `${verticalPosition}px`;
    verticalPosition += 90; // Adjust the value as needed for the spacing

    // Append the new div to the container
    taskContainer.appendChild(newDiv);

    // Clear the input field
    event.target.value = '';
  }
}