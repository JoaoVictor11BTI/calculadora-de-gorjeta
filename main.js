let bill = 0
let tipPercentage = 0 
let numberOfPeople = 0
let buttonSelected = null

// valor da conta
let billInput = document.querySelector("#bill")
billInput.addEventListener("input",receiveBillValue)

function receiveBillValue(){
    bill = billInput.valueAsNumber
    calculate()
}

//receber n pessoas
let numberOfPeopleInput =document.querySelector("#people")
numberOfPeopleInput.addEventListener("input",receiveNumberOfPeople)

function receiveNumberOfPeople(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}


function receiveTipPercentage(value) {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    tipPercentage = value / 100

    let customTipInput = document.querySelector("#custom-tip")
    customTipInput.value = ""

}

function receiveCustomTipPercentage() {
    let customTipInput = document.querySelector("#custom-tip")
    tipPercentage = customTipInput.valueAsNumber / 100

        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        let tipAmountStrong = document.querySelector(".amount strong")
 
         let tipAmountPerson = (bill * tipPercentage ) / numberOfPeople
 
         tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`
 
         let totalStrong = document.querySelector(".total strong")
 
         let total = (bill / numberOfPeople) + tipAmountPerson
 
         totalStrong.innerText = `$${total.toFixed(2)}`
    }else{
        console.log("ainda não é possivel calcular")
    }
}
 
function reset(){
    
}