let bill = 0
let tipPercentage = 0 
let numberOfPeople = 0


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

function receiveTipPercentage(value){
    let buttonSelected = document.querySelector

}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log('calcular')
    }else{
    console.log("ainda não é possivel calcular")
    }
}