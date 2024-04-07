let billAmountEl = document.getElementById("billAmount");
let tipAmountEl = document.getElementById("tipAmount");
let head1El = document.getElementById("head1");
let head2El = document.getElementById("head2");
let errorMessageEl = document.getElementById("error-message")


function addkarbhai(){
   
    let bAmount = billAmountEl.value;
    let updateBillAmount = parseInt(bAmount);
    let tipAmount = tipAmountEl.value;
    let updateTipAmount = parseInt(tipAmount);
    head1El.textContent = updateTipAmount;
    head2El.textContent = updateBillAmount+updateTipAmount;
    if (bAmount === "" || isNaN(bAmount) || tipAmount === "" || isNaN(tipAmount)) {
        errorMessageEl.textContent = "Please Enter Valid Input";
        return; // Exit the function if there's an error
    }
}
function resetValues() {
    billAmountEl.value = "";
    tipAmountEl.value = "";
    head1El.textContent = "";
    head2El.textContent = "";
    errorMessageEl.textContent="";
    
}



