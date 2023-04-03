const tipBtns = document.querySelectorAll(".tip-btn");
let customTipBtn = document.querySelector(".cust-btn");
let billInput = document.querySelector(".bill-input");
let numOfPeopleInput = document.querySelector(".num-of-people-input");
const error = document.querySelector(".error");
const tipAmountOutput = document.querySelector(".output-1");
const tipTotalOutput = document.querySelector(".output-2");
const resetBtn =document.querySelector(".reset-btn");

let tipValue = 100;
let billValue = 0;
let numOfPeople = 1;

billInput.addEventListener("Input", function (billEnterd) {
    
    billValue = parseFloat(billInput.value).toFixed(2);
    tipCalculation();
})


tipBtns.forEach(function(tipBtn) {

    tipBtn.addEventListener("Click", function tipBtnsClick(e) {

        tipBtns.forEach((tipBtn) => {

            tipBtn.classList.remove("active");

            if (e.target.innerHTML === tipBtn.innerHTML) {
              btn.classList.add('active');
              tipValue = parseFloat(btn.innerHTML) / 100;
            }
          });
          customTipBtn.value = "";
          tipCalculation();
    });
})

customTipBtn.addEventListener("input", function custTipBtnClick(e){

    tipValue = parseFloat(customTipBtn.value) / 100;
    tipBtns.forEach((tipBtn) => {
        tipBtn.classList.remove('active');
    });
    if (customTipBtn.value !== "") {
    tipCalculation();
    }
})

numOfPeopleInput.addEventListener("Input", function peopleValue() {
    numOfPeople = parseInt(numOfPeopleInput.value);
    if (numOfPeople <= 0) {
        peopleError.innerHTML = 'number must be greater than zero';
        setTimeout(function () {
            error.innerHTML = '';
        }, 1500);
    }
    tipCalculation();
})

function tipCalculation() {
    if (billValue && numOfPeople >= 1) {
        let tip = billValue * tipValue / numOfPeople;
        let totalTipAmount = (billValue * (tipValue + 1)) / numOfPeople;
    
        tipAmountOutput.innerHTML = tip.toFixed(2);
        tipTotalOutput.innerHTML = totalTipAmount.toFixed(2);
      } else {
        tipAmountOutput.innerHTML = "0.00";
        tipTotalOutput.innerHTML = "0.00";
      }
}

resetBtn.addEventListener('click', function resetButton() {

    resetBtn.disabled = true;
    resetBtn.style.backgroundColor = 'darkcyan';
  
    billInput.value = "";
    billEnterd();
  
    tipBtns.forEach((tipBtn) => {
      tipBtn.classList.remove('active');
    });
    customTipBtn.value = '';
  
    numOfPeopleInput.value = '1';
    peopleValue();
  
    tipCalculation();
});

billInput.addEventListener("input", enableReset);
customTip.addEventListener('input', enableReset);
people.addEventListener('input', enableReset);
  
  // Function to enable reset button and set the background color to its original state
function enableReset() {
    if (resetBtn.disabled) {
      resetBtn.disabled = false;
      resetBtn.style.backgroundColor = ''; //set this to the original background color
    }
}
  
  // Initialize the reset button as disabled and dark cyan
resetBtn.disabled = true;
resetBtn.style.backgroundColor = 'darkcyan';
  
  // Listen for click events on reset button



     


    




    

  