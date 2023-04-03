const billInput = document.querySelector(".bill-input")
const numOfPeopleInput = document.querySelector(".num-of-people-input")
const tipPerPerson = document.querySelector(".tip-value")
const totalPerPerson = document.querySelector(".total-value")
const tipBtns = document.querySelectorAll(".tip-btn")
const customTipBtn = document.querySelector(".cust-btn")
const resetBtn = document.querySelector(".reset-btn")

billInput.addEventListener("input", billInputFun);
numOfPeopleInput.addEventListener("input", peopleInputFun);
tipBtns.forEach(function(value){
    value.addEventListener("click", handleClick)
})
customTipBtn.addEventListener("input", tipInputFun)
resetBtn.addEventListener("click", reset);

billInput.value = "0.00"
numOfPeopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.00).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.00).toFixed(2);

let billValue = 0.00;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFun() {
    billValue = parseFloat(billInput.value)
    tipCalculation()
}

function peopleInputFun() {
    peopleValue = parseFloat(numOfPeopleInput.value)
    tipCalculation()
}

function tipInputFun () {
    tipValue = parseFloat(customTipBtn.value / 100)

    tipBtns.forEach(function (value) {
        value.classList.remove("active-tip");
    })
    tipCalculation()
}

function handleClick(event) {
    tipBtns.forEach(function(value) {
        value.classList.remove("active-tip");
        if(event.target.innerHTML == value.innerHTML) {
            value.classList.add("active-tip");
            tipValue = parseFloat(value.innerHTML)/100
        }
    })
    tipCalculation()
}

function tipCalculation() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}

function reset () {
    billInput.value = "0.00"
    numOfPeopleInput.value = "1";
    tipPerPerson.innerHTML = "$" + (0.00).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.00).toFixed(2);
}










// const tipBtns = document.querySelectorAll(".tip-btn");
// let customTipBtn = document.querySelector(".cust-btn");
// let billInput = document.querySelector(".bill-input");
// let numOfPeopleInput = document.querySelector(".num-of-people-input");
// const error = document.querySelector(".error");
// const tipAmountOutput = document.querySelector(".output-1");
// const tipTotalOutput = document.querySelector(".output-2");
// const resetBtn =document.querySelector(".reset-btn");

// let tipValue = 100;
// let billValue = 0;
// let numOfPeople = 1;

// billInput.addEventListener("Input",billEntered);

// function billEntered() {
//     billValue = parseFloat(billInput.value).toFixed(2);
//     tipCalculation();
// }


// tipBtns.forEach(function(tipBtn) {

//     tipBtn.addEventListener("Click", function tipBtnsClick(e) {

//         tipBtns.forEach((tipBtn) => {

//             tipBtn.classList.remove("active");

//             if (e.target.innerHTML === tipBtn.innerHTML) {
//               btn.classList.add('active');
//               btn.style.color = "var(--Very-dark-cyan)";
//               btn.style.backgroundColor = "var(--Cyan)";
//               tipValue = parseFloat(btn.innerHTML) / 100;
//             }
//           });
//           customTipBtn.value = "";
//           tipCalculation();
//     });
// })

// customTipBtn.addEventListener("input", custTipBtnClick);

// function custTipBtnClick() {
//     tipValue = parseFloat(customTipBtn.value) / 100;
//     tipBtns.forEach((tipBtn) => {
//         tipBtn.classList.remove('active');
//     });
//     if (customTipBtn.value !== "") {
//     tipCalculation();
//     }
// }

    


// numOfPeopleInput.addEventListener("Input", peopleValue())

// function peopleValue() {
//     numOfPeople = parseInt(numOfPeopleInput.value);
//     if (numOfPeople <= 0) {
//         peopleError.innerHTML = 'number must be greater than zero';
//         setTimeout(function () {
//             error.innerHTML = '';
//         }, 1500);
//     }
//     tipCalculation();
// }



// function tipCalculation() {
//     if (billValue && numOfPeople >= 1) {
//         let tip = billValue * tipValue / numOfPeople;
//         let totalTipAmount = (billValue * (tipValue + 1)) / numOfPeople;
    
//         tipAmountOutput.innerHTML = tip.toFixed(2);
//         tipTotalOutput.innerHTML = totalTipAmount.toFixed(2);
//       } else {
//         tipAmountOutput.innerHTML = "0.00";
//         tipTotalOutput.innerHTML = "0.00";
//       }
// }

// resetBtn.addEventListener('click', function resetButton() {

//     resetBtn.disabled = true;
//     resetBtn.style.backgroundColor = "darkcyan";
  
//     billInput.value = "";
//     billEntered();
  
//     tipBtns.forEach((tipBtn) => {
//       tipBtn.classList.remove("active");
//     });
//     customTipBtn.value = "";
  
//     numOfPeopleInput.value = "1";
//     peopleValue();
  
//     tipCalculation();
// });

// billInput.addEventListener("input", enableReset);
// customTipBtn.addEventListener('input', enableReset);
// numOfPeopleInput.addEventListener('input', enableReset);
  

// function enableReset() {
//     if (resetBtn.disabled) {
//       resetBtn.disabled = false;
//       resetBtn.style.backgroundColor = 'var("Cyan")';
//     }
// }






     


    




    

  