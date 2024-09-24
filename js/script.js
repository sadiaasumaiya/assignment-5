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


    // Validation

    if (donationNoa > mainBalance1) {
        alert('You do not have sufficient balance');
        return;
    }

    if (isNaN(donationNoa) || donationNoa <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    else {
        alert('You have donated for humankind')
    }

    // History section

    const history = document.createElement('div');
    history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
    history.innerHTML = `
    <p class="text-lg text-gray-500"> <span class="font-bold">${donationNoa} </span> Taka is Donated for flood at Noakhali, Bangladesh </p>;
    <p class="text-md text-gray-400 p-3 rounded-md"> ${new Date().toLocaleTimeString} </p>
    `
    document.getElementById('history-section').append(history);



    console.log(p);
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

