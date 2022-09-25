import './style.css'
import 'tw-elements';

const btns = document.querySelectorAll("button");
const billInput  = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tip = document.querySelector(".tip");
const money = document.querySelector(".money");
const billErr = document.querySelector(".billerr"); 
const err = document.querySelector(".err"); 
const resetBtn = document.querySelector(".reset");

// ! Need to work on the custom tip % method
// * I made the custom tip % work as well.................................LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 
const customTipInput = document.querySelector(".customTip");

// Custom Tip % function

customTipInput.addEventListener("keyup",()=>{
    const customTip = Number(document.querySelector(".customTip").value);
    
    if(!customTipInput == ''){
        const billAmount = Number(document.querySelector(".bill-input").value);
        const people = document.querySelector(".people-input").value;

        // Error to show if bill isnt entered
        if(billAmount < 1){
            billErr.classList.remove("hidden");
            billInput.classList.add("error");
        }
        // removing the error class once it is entered
        else{
            billErr.classList.add("hidden");
            billInput.classList.remove("error");
        }

        // Error to show if people isnt entered
        if(people < 1){
            err.classList.remove("hidden");
            peopleInput.classList.add("error");
        }

        // removing the error class once it is entered
        else{
            err.classList.add("hidden");
            peopleInput.classList.remove("error");

            const result = (customTip/100)*billAmount; //total tip on the bill amount

            tip.textContent = `$${(result/people).toFixed(2)}`; //total tip per person
            money.textContent = `$${((billAmount+result)/people).toFixed(2)}`; //total amount per perso
        }
    }
});

// Tip % button function

btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const billAmount = Number(document.querySelector(".bill-input").value);
        const people = document.querySelector(".people-input").value;
        function calculateTip(){
            const tipPercentage = btn.textContent;

            // Error to show if bill isnt entered
            if(billAmount < 1){
                billErr.classList.remove("hidden");
                billInput.classList.add("error");
            }
            // removing the error class once it is entered
            else{
                billErr.classList.add("hidden");
                billInput.classList.remove("error");
            }

            // Error to show if people isnt entered
            if(people < 1){
                err.classList.remove("hidden");
                peopleInput.classList.add("error");
            }

            // removing the error class once it is entered
            else{
                err.classList.add("hidden");
                peopleInput.classList.remove("error");

                const result = (tipPercentage/100)*billAmount; //total tip on the bill amount

                tip.textContent = `$${(result/people).toFixed(2)}`; //total tip per person
                money.textContent = `$${((billAmount+result)/people).toFixed(2)}`; //total amount per perso
            }
        }
        calculateTip();
    });
});

resetBtn.addEventListener("click",()=>{
    billInput.value = '';
    // so when user resets the error messages also go away
    billErr.classList.add("hidden");
    billInput.classList.remove("error");

    peopleInput.value = '';
    // so when user resets the error messages also go away
    err.classList.add("hidden");
    peopleInput.classList.remove("error");

    customTipInput.value = '';
    tip.textContent = '$ 0.00';
    money.textContent = '$ 0.00';
});