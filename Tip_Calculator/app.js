// Get ref to all the elements 

const calculateBtn = document.querySelector('#submitBtn');
const billAmount = document.querySelector('#billAmount');
const tipPercent = document.querySelector('#tipPercent');
const tipAmount = document.querySelector('#tipAmount');
const totalAmount = document.querySelector('#totalInput');
const errorMessage = document.querySelector('#error-message');


// Add Event listener to the calculate button
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // check the Input Value whether it is empty or not?
    // console.log(billAmount,tipAmount);
    if (billAmount.value  == '' || tipPercent.value == '' ) {
        errorMessage.textContent = 'Please Enter a Valid Input';
    } else {
        let billAmountValue = Number.parseInt(billAmount.value,10);
        let tipPercentValue = Number.parseInt(tipPercent.value,10);

        // Processing the logic Here
        let tipAmountNumber = billAmountValue*tipPercentValue/100;
        let totalAmountValue = tipAmountNumber+billAmountValue;
        

        // Showing the output here
        tipAmount.value = tipAmountNumber;
        totalAmount.value = totalAmountValue

        // No error message 
        errorMessage.textContent = '';
    }
})
