function checkLoanEligibility()
{
    console.log("Eligibility");
    let age=Number(document.getElementById("age").value);
    let income=Number(document.getElementById("salary").value);

    if(age>=18 && age<=60 && income>=30000)
    {
        document.getElementById("result").innerHTML="You are Eligible for Loan!"
    }
    else
    {
        document.getElementById("result").innerHTML="You are not Eligible for Loan!"
        console.log("False");
    }
}

function calculateEMI() 
{
    console.log("emi");
    let P = Number(document.getElementById("loan1").value);
    let R = Number(document.getElementById("irate").value);
    let Yr = Number(document.getElementById("yr").value);
    console.log(P);
    console.log(R);
    console.log(Yr);

    let I = R / (12 * 100);
    let N = Yr * 12;

    // Standard EMI formula: P * I * (1 + I)^N / ((1 + I)^N - 1)
    let EMI = (P * I * Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1);

    document.getElementById("emiResult").innerHTML = "Monthly EMI : " + EMI.toFixed(2);
}

function interestCalculator()
{
    console.log("Simple Interest Calculator")
    let principal = Number(document.getElementById("pamount").value);
    let rate = Number(document.getElementById("ri").value) / 100;
    let time = Number(document.getElementById("yer").value);

    let interest = (principal * rate * time) / 100;
    document.getElementById("interestresult").innerHTML = "Your Simple Interest is: " + interest.toFixed(2);
}
function accountDetails(){
    let account = document.getElementById("accountType").value;
    let message = "";
    switch(account){
        case "Savings":


        document.getElementById(accountResult).innerHTML="";
        break;
        case "Current":
        message="Current Account : No Interest";
        break;
        case "Fixed Deposit":
            message="FD Interest : 7%";
            break;
            default:
                message="Invalid Account";
    }
    document.getElementById("accountResult").innerHTML =
    message;
 }

 // Fixed switch logic and element reference
function accountDetails() {
    let account = document.getElementById("accountType").value;
    let message = "";

    switch(account) {
        case "Savings":
            message = "Savings Account : 4% Interest Rate";
            break;
        case "Current":
            message = "Current Account : No Interest";
            break;
        case "Fixed Deposit":
            message = "FD Interest : 7%";
            break;
        default:
            message = "Please select a valid account type.";
    }
    
    document.getElementById("accountResult").innerHTML = message;
}

// Fixed output string concatenation syntax (removed invalid .to modifier)
function generateInterestTable() {
    let output = "Year\t \tInterest\n";
    for(let i = 1; i <= 10; i++) {
        output += i + "\t\t₹" + (10000 * 0.05 * i) + "\n";
    }
    document.getElementById("tableResult").textContent = output;
}

// Transaction & Welcome Loop Demonstrations
let count = 1;
while(count <= 3) {
    console.log("Transaction " + count);
    count++;
}

let number = 1;
do {
    console.log("Welcome Customer " + number);
    number++;
} while(number <= 3);

// Nested conditional check
function premiumCustomer(balance, years) {
    if(balance >= 500000) {
        if(years >= 5) {
            return "Premium Customer";
        } else {
            return "Regular Customer";
        }
    } else {
        return "Standard Customer";
    }
}

// Helper to bridge user inputs with the premiumCustomer function
function checkCustomerStatus() {
    let balance = Number(document.getElementById("accBalance").value);
    let years = Number(document.getElementById("accYears").value);
    let status = premiumCustomer(balance, years);
    document.getElementById("statusResult").innerHTML = "Status: " + status;
}