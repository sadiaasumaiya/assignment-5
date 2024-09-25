// Get Donation & actual & fund Amount using common function
// Card 1

document.getElementById('donation-btn1').addEventListener('click', function () {
    const donationNoa = getDonationAmount('donation1');
    const mainBalance1 = getActualAmount('main-balance');
    const totalFundAmount = getFundAmount('fund1');

    // Validation
    if (isNaN(donationNoa) || donationNoa <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (donationNoa > mainBalance1) {
        alert('You do not have sufficient balance');
        return;
    } 

    // Update amounts
    const fund1 = totalFundAmount + donationNoa;
    const newBalance1 = mainBalance1 - donationNoa;
    document.getElementById('fund1').innerText = fund1;
    document.getElementById('main-balance').innerText = newBalance1;

    // History section
    const currentDate = new Date();
    const formattedDate = `Date : ${currentDate.toString()}`;

    const history = document.createElement('div');
    history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
    history.innerHTML = `
    <p class="text-lg text-gray-500">
        <span class="font-bold">${donationNoa}</span> Taka is donated for flood relief in Noakhali, Bangladesh
    </p>
    <p class="text-md text-gray-400 p-3 rounded-md">${formattedDate}</p>
`;

    document.getElementById('history-section').appendChild(history);


    // show modal
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});




// Card 2
document.getElementById('donation-btn2').addEventListener('click', function () {
    const donationFeni = getDonationAmount('donation2');
    const mainBalance2 = getActualAmount('main-balance');
    const totalFundAmountFeni = getFundAmount('fund2');

    // Validation
    if (isNaN(donationFeni) || donationFeni <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (donationFeni > mainBalance2) {
        alert('You do not have sufficient balance');
        return;
    } 

    // Update amounts
    const fund2 = totalFundAmountFeni + donationFeni;
    const newBalance2 = mainBalance2 - donationFeni;
    document.getElementById('fund2').innerText = fund2;
    document.getElementById('main-balance').innerText = newBalance2;


    // History section
    const currentDate = new Date();
    const formattedDate = `Date : ${currentDate.toString()}`;

    const historyEntry = document.createElement('div');
    historyEntry.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
    historyEntry.innerHTML = `
        <p class="text-lg text-gray-500">
            <span class="font-bold">${donationFeni}</span> Taka is donated for flood relief in Feni, Bangladesh
        </p>
        <p class="text-md text-gray-400 p-3 rounded-md">${formattedDate}</p>
    `;
    document.getElementById('history-section').appendChild(historyEntry);

    // show modal
    const modal = document.getElementById('my_modal_1');
    modal.showModal();


});

// Card 3
document.getElementById('donation-btn3').addEventListener('click', function () {
    const donationQuota = getDonationAmount('donation3');
    const mainBalance3 = getActualAmount('main-balance');
    const totalFundAmountQuota = getFundAmount('fund3');

    // Validation
    if (isNaN(donationQuota) || donationQuota <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (donationQuota > mainBalance3) {
        alert('You do not have sufficient balance');
        return;
    }
    


    // Update amounts
    const fund3 = totalFundAmountQuota + donationQuota;
    const newBalance3 = mainBalance3 - donationQuota;
    document.getElementById('fund3').innerText = fund3;
    document.getElementById('main-balance').innerText = newBalance3;


    // History section
    const currentDate = new Date();
    const formattedDate = `Date : ${currentDate.toString()}`;

    const historyEntry = document.createElement('div');
    historyEntry.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
    historyEntry.innerHTML = `
        <p class="text-lg text-gray-500">
            <span class="font-bold">${donationQuota}</span> Taka is donated for aid for injured in the Quota Movement
        </p>
        <p class="text-md text-gray-400 p-3 rounded-md">${formattedDate}</p>
    `;
    document.getElementById('history-section').appendChild(historyEntry);

    // show modal
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
});


// Modal

const modal = document.getElementById('my_modal_1');
    const modalBtn = document.getElementById('modalBtn');

    // Function to open the modal
    modalBtn.onclick = function() {
        modal.showModal();
    };

    // Close the modal when the close button is clicked
    modal.addEventListener('close', () => {
        console.log('Modal closed');
    });

    // Close the modal when clicking outside of it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });

    // Close the modal when the ESC key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.close();
        }
    });
