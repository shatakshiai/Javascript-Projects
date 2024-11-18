let calculation = localStorage.getItem('calculation') || '';
displayCalculation();

function calculator(value){
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
  
}
function displayCalculation() {
  document.querySelector(".js-display-calculation").innerHTML = `${calculation}`;
}