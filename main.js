let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

// Valor da conta
let billInput = document.querySelector("#bill");
billInput.addEventListener("input", receiveBillValue);

function receiveBillValue() {
    bill = billInput.valueAsNumber || 0;
    calculate();
}

// Receber número de pessoas
let numberOfPeopleInput = document.querySelector("#people");
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople);

function receiveNumberOfPeople() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber || 0;
    calculate();
}

function receiveTipPercentage(value) {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
    }

    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");
    tipPercentage = value / 100;

    let customTipInput = document.querySelector("#custom-tip");
    customTipInput.value = "";
    
    calculate();
}

function receiveCustomTipPercentage() {
    let customTipInput = document.querySelector("#custom-tip");
    tipPercentage = (customTipInput.valueAsNumber || 0) / 100;

    removeClassButtonSelected();
    calculate();
}

function calculate() {
    if (bill > 0 && tipPercentage >= 0 && numberOfPeople > 0) {
        let tipAmountPerson = (bill * tipPercentage) / numberOfPeople;
        let total = (bill / numberOfPeople) + tipAmountPerson;

        document.querySelector(".amount strong").innerText = `$${tipAmountPerson.toFixed(2)}`;
        document.querySelector(".total strong").innerText = `$${total.toFixed(2)}`;
    } else {
        document.querySelector(".amount strong").innerText = "$0.00";
        document.querySelector(".total strong").innerText = "$0.00";
    }
}

function reset() {
    billInput.value = "";
    bill = 0;

    numberOfPeopleInput.value = "";
    numberOfPeople = 0;

    removeClassButtonSelected();
    document.querySelector("#custom-tip").value = "";
    tipPercentage = 0;

    document.querySelector(".amount strong").innerText = "$0.00";
    document.querySelector(".total strong").innerText = "$0.00";
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}