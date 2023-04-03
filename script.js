const tipBtns = document.querySelectorAll(".tip-btn");
let customTipBtn = document.querySelector(".cust-btn");
let billInput = document.querySelector(".bill-input");
let numOfPeopleInput = document.querySelector(".num-of-people-input");
const tipAmountOutput = document.querySelector(".output-1");
const tipTotalOutput = document.querySelector(".output-2");
const resetBtn =document.querySelector(".reset-btn");

let tipValue = 100;
let billValue = 0;
let NumOfPeople = 1;


tipBtns.forEach(function(tipBtn) {
    tipBtn.addEventListener("Click", function tipBtnsClick(e) {
        tipBtns.forEach((tipBtn) => {
            tipBtn.classList.remove('active');
            if (e.target.innerHTML === tipBtn.innerHTML) {
              btn.classList.add('active');
              tipValue = parseFloat(btn.innerHTML) / 100;
            }
          });
          customTipBtn.value = '';
          tipCalculation();
    });
})

customTipBtn.addEventListener("input", function custTipBtnClick(e){
    tipValue = parseFloat(customTipBtn.value) / 100;
    tipBtns.forEach((tipBtn) => {
    tipBtn.classList.remove('active');
    });
    if (customTipBtn.value !== '') {
    tipCalculation();
    }
})


customTipBtn.addEventListener("change", tipCalculation);


billInput.addEventListener("change", tipCalculation);


numOfPeopleInput.addEventListener("change", tipCalculation);

function tipCalculation() {

    let bill = parseFloat(billInput.value);
    let numberOfPeople = parseInt(numOfPeopleInput.value);
    let tipPecent = 1;
    if (tipBtn === tipBtns[0]) {
        let
    }
    
    billInput.value = bill.toFixed(2);
    
}


     

// const tipBtn5pc = document.querySelector(".tip-btn1");
// const tipBtn10pc = document.querySelector(".tip-btn2");
// const tipBtn15pc = document.querySelector(".tip-btn3");
// const tipBtn25pc = document.querySelector(".tip-btn4");
// const tipBtn50pc = document.querySelector(".tip-btn5");
    




    

  