const buttons = document.querySelectorAll('button');
const calcDisplay = document.querySelector("#display")
let num1 = '';
let num2 = '';
let operator = '';
let currentSelection = '';


calcInit();

function calcInit() {
  buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
      currentSelection = event.target.innerText;
      // console.log(currentSelection);
      varAssignment(currentSelection);
    })
  });
}

function operate(num1,operator,num2) {
  // console.log("outcome of logging operator is: " + operator);
  // console.log("outcome of logging num2 is: " + num2);

  switch (operator) {
    case '/':
      return Number(num1) / Number(num2);
    case '*':
      return Number(num1) * Number(num2);
    case '-':
      return Number(num1) - Number(num2);
    case '+':
      return Number(num1) + Number(num2);
  }

}

function varAssignment(currentSelection) {

  // early return pattern
  if (currentSelection === "=") {
    
    num1 = operate(num1,operator,num2).toFixed(2);
    num2 = '';
    operator = '';
    
    // Re-assignes displayArray with a new array with num1 in the 0 index position
  } 
  else if (currentSelection === "C") {
    num1 = "";
    num2 = "";
    operator = "";
  } 
  else if (currentSelection.match(/\*|-|\+|\//)) {
    if (num2) {
      num1 = operate(num1,operator,num2).toFixed(2);
      num2 = '';
      operator = '';
      // Re-assignes displayArray with a new array with num1 in the 0 index position
    } else if (num1) {
      operator = currentSelection;
		}
  } else if (num1 && operator) {
      num2 += currentSelection;
  } else {
      num1 += currentSelection;
  }

  displayInfo();

}

function displayInfo() {
	calcDisplay.innerHTML = "";
  const info = document.createElement('p');
  if (num1 === "Infinity") {
    info.innerText = "Can't divide by 0! Press Clear."
  }else {
    info.innerText = `${num1} ${operator} ${num2}`;
  }
  
  calcDisplay.appendChild(info);
}