function init () {
    const billInput = document.querySelector(".bill-input").value;
    const tipBtn5pc = document.querySelector(".tip-btn1");
    const tipBtn10pc = document.querySelector(".tip-btn2");
    const tipBtn15pc = document.querySelector(".tip-btn3");
    const tipBtn25pc = document.querySelector(".tip-btn4");
    const tipBtn50pc = document.querySelector(".tip-btn5");
    const customTipBtn = document.querySelector(".cust-btn").value;
    const numOfPeopleInput = document.querySelector(".num-of-people-input").value;
    const tipAmountOutput = document.querySelector(".tip-value").innerHTML;
    const tipTotalOutput = document.querySelector(".total-value").innerHTML;
    const resetBtn =document.querySelector(".reset-btn");

    console.log(tipBtn5pc)
    console.log(tipTotalOutput) 

    let currentBill = 0;
    let currentPeople = "";
    let tipAmount = 1;

    tipBtn5pc.addEventListener("Click", () => {
        let tipAmount = 0.05;
        tipTotalOutput = "Hello World";
    });

    tipBtn10pc.addEventListener("Click", () => {
        tipAmount = 0.1;
        console.log(tipAmount)
    })

    tipBtn15pc.addEventListener("Click", () => {
        tipAmount = 0.15;
    })

    tipBtn25pc.addEventListener("Click", () => {
        tipAmount = 0.25;
    })

    tipBtn50pc.addEventListener("Click", () => {
        tipAmount = 0.5;
    })
}

function isNumber(input) {

    return /^[0-9]+$/.test(input);
}

init ();



    

  