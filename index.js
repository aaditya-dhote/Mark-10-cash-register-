const billAmount=document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const message =document.querySelector("#error-message");
const availableNotes=[2000,500,100,20,10,5,1];

checkButton.addEventListener ("click",function validateBillAndCashAmount(){
hideMessage();
var casher=Number(cashGiven.value);
    var biller=Number(billAmount.value);
    
if(billAmount.value>0){
if(casher>=biller){
    const amountToBeReturned = (casher - biller);
    console.log(amountToBeReturned);
    calculateChange(amountToBeReturned);
}
    else{showMessage("Wanna wash plates/Bartan nikalo bhai");}

}

else {showMessage("Invalid bill amount");}
});


function calculateChange(amountToBeReturned)
{
    for( let i=0 ; i<availableNotes.length ; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText= numberOfNotes;
    }
}

function hideMessage(){
message.style.display="none";
}
function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;

}