// For Input field

function getDonationAmount(id){
    const donationAmount = document.getElementById(id).value;
    const donation = parseFloat(donationAmount);
    return donation;
}

// For Text Field

function getActualAmount(id){
    const actualAmount = document.getElementById(id).innerText;
    const amount = parseFloat(actualAmount);
    return amount;
}

// For total fund amount

function getFundAmount(id){
const fundAmount = document.getElementById(id).innerText;
const totalFund = parseFloat(fundAmount);
return totalFund;
}

// For History button

function showSection(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// 
// Modal

function myModal(){
    document.getElementById('modal.btn')
}
