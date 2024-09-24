// Get Donation & actual & fund Amount using common function
// Card 1

document.getElementById('donation-btn1').addEventListener('click', function () {
    const donationNoa = getDonationAmount('donation1');
    const mainBalance1 = getActualAmount('main-balance');
    const totalFundAmount = getFundAmount('fund1');
    const fund1 = totalFundAmount + donationNoa;
    const newBalance1 = mainBalance1 - donationNoa;

    document.getElementById('fund1').innerText = fund1;
    document.getElementById('main-balance').innerText = newBalance1;

    console.log('balance', newBalance1)
    console.log('fund', fund1)

})

// Card 2

document.getElementById('donation-btn2').addEventListener('click', function () {
    const donationFeni = getDonationAmount('donation2');
    const mainBalance2 = getActualAmount('main-balance');
    const totalFundAmount = getFundAmount('fund2');
    const fund2 = totalFundAmount + donationFeni;
    const newBalance2 = mainBalance2 - donationFeni;

    document.getElementById('fund2').innerText = fund2;
    document.getElementById('main-balance').innerText = newBalance2;

    console.log('balance', newBalance2)
    console.log('fund', fund2)


})

// Card 3

document.getElementById('donation-btn3').addEventListener('click', function () {
    const donationQuota = getDonationAmount('donation3');
    const mainBalance3 = getActualAmount('main-balance');
    const totalFundAmount = getFundAmount('fund3');
    const fund3 = totalFundAmount + donationQuota;
    const newBalance3 = mainBalance3 - donationQuota;

    document.getElementById('fund3').innerText = fund3;
    document.getElementById('main-balance').innerText = newBalance3;

    console.log('balance', newBalance3);
    console.log('fund', fund3)

})


// Validation in input field



//Decrease actual amount after donation

// const mainBalance = getActualAmount('main-balance');
// const newBalance = mainBalance - donationNoa;