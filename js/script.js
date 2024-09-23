// let accountBalance = 100;

// document.getElementById('donationBtn').addEventListener('click', () => {
//     document.getElementById('donationSection').style.display = 'block';
//     document.getElementById('historySection').style.display = 'none';
//     toggleActiveStatus('donationBtn', 'historyBtn');
// });

// document.getElementById('historyBtn').addEventListener('click', () => {
//     document.getElementById('donationSection').style.display = 'none';
//     document.getElementById('historySection').style.display = 'block';
//     toggleActiveStatus('historyBtn', 'donationBtn');
// });

// const donationButtons = document.querySelectorAll('.donateBtn');
// donationButtons.forEach(button => {
//     button.addEventListener('click', handleDonation);
// });

// function handleDonation(event) {
//     const card = event.target.closest('.donation-card');
//     const inputField = card.querySelector('.donation-input');
//     const donationAmount = parseFloat(inputField.value);
//     const currentAmountSpan = card.querySelector('.current-amount');
//     const currentAmount = parseFloat(currentAmountSpan.textContent);

//     if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert('Please enter a valid donation amount.');
//         return;
//     }

//     if (donationAmount > accountBalance) {
//         alert('Insufficient balance.');
//         return;
//     }

//     accountBalance -= donationAmount;
//     currentAmountSpan.textContent = (currentAmount + donationAmount).toFixed(2);
//     updateBalance();
//     showModal();
//     addToHistory(`Donated $${donationAmount.toFixed(2)} to ${card.querySelector('h3').textContent}`);
// }

// function updateBalance() {
//     document.getElementById('accountBalance').textContent = `Balance: $${accountBalance.toFixed(2)}`;
// }

// function showModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'block';
//     modal.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
// }

// function addToHistory(transaction) {
//     const historyList = document.getElementById('historyList');
//     const listItem = document.createElement('li');
//     listItem.textContent = `${new Date().toLocaleString()}: ${transaction}`;
//     historyList.appendChild(listItem);
// }

// function toggleActiveStatus(activeBtnId, inactiveBtnId) {
//     document.getElementById(activeBtnId).classList.add('active');
//     document.getElementById(inactiveBtnId).classList.remove('active');
// }