const baseAPIURL= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
//  access dropdowns -------
let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("button");
let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector('.to select');
let msg = document.querySelector('.msg');

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name == "from" && currCode == "USD"){
            newOption.selected = "selected";
        } else if(select.name == "to" && currCode == "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}

let updateExchangeRate = async () =>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amount, amtVal);
    if(amtVal == "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    let fromCurrValue = fromCurr.value.toLowerCase()
    let toCurrValue = toCurr.value.toLowerCase()
    // console.log(fromCurr.value, toCurr.value);
    const url = `${baseAPIURL}/${fromCurrValue}.json`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurrValue][toCurrValue];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurrValue.toUpperCase()} = ${finalAmount} ${toCurrValue.toUpperCase()}`;
}

btn.addEventListener("click", (ev) =>{
    ev.preventDefault();
    updateExchangeRate();
})
window.addEventListener('load', () =>{
    updateExchangeRate();
})
