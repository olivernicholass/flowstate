let timer;
let time = 25 * 60; 


// Function for when the user hits start/stop.

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


// Function for updating the timer when it has finished.

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

// Function that re-creates each task with the same elements (template).

function createDivWithText(text) {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'rectangle-group';

  const childDiv = document.createElement('div');
  childDiv.className = 'group-child';

  const itemDiv = document.createElement('div');
  itemDiv.className = 'group-item';

  const innerDiv = document.createElement('div');
  innerDiv.className = 'group-inner';

  const inputElement = document.createElement('input');
  inputElement.className = 'add-task';
  inputElement.placeholder = 'Add task...';
  inputElement.type = 'text';
  inputElement.id = 'taskInput';
  inputElement.value = text;


  const dotsButton = document.createElement('button');
  dotsButton.className = 'dots-2-1';

  const checkedButton = document.createElement('button');
  checkedButton.className = 'checked-1-1';

  mainDiv.appendChild(childDiv);
  mainDiv.appendChild(itemDiv);
  mainDiv.appendChild(innerDiv);
  mainDiv.appendChild(inputElement);
  mainDiv.appendChild(dotsButton);
  mainDiv.appendChild(checkedButton);

  return mainDiv;
}


// When the user presses enter, we create a new task with that name, 
// calling the createDivWithText function to keep the same format.

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const enteredText = event.target.value;
    const newDiv = createDivWithText(enteredText);
    taskContainer.appendChild(newDiv);
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

let verticalPosition = 756; 


function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const enteredText = event.target.value;

    const newDiv = createDivWithText(enteredText);
    newDiv.style.top = `${verticalPosition}px`;
    verticalPosition += 90; 
    taskContainer.appendChild(newDiv);
    event.target.value = '';
  }
}