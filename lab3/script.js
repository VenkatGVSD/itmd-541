const bill_total = document.getElementById("billtotal");
const tip_slider = document.getElementById("tipslider");
const tip_percentage = document.getElementById("percentagetip");
const tip_amount = document.getElementById("tip");
const final_amount = document.getElementById("totalfinal");
const error = document.getElementById("error");
// Add event listeners for input events
bill_total.addEventListener("input", calculateTip);
tip_slider.addEventListener("input", calculateTip);


function calculateTip() {
    // Validate bill total input
    let bill = parseFloat(bill_total.value);
    if (bill<0 || isNaN(bill) ||  bill_total.value.trim() === "") {
        error.textContent='Invalid value!!!!!!!';
        tip_slider.disabled = true;
        tip_percentage.value = 0;
        final_amount.value = 0;
        tip_amount.value = 0;
        return;
    }
    error.textContent=''


    tip_slider.disabled = false; // Enable tip slider if input is valid
    //bill_total.value = parseFloat(bill_total.value).toFixed(2);
    
    
    let tip = parseFloat(tip_slider.value);

    tip_percentage.value = tip;

    // Calculate the tip amount
    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));
    tip_amount.value = total_tip;

    // Calculate the total amount
    final_amount.value = parseFloat(bill + total_tip).toFixed(2);
}
