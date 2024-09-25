document.getElementById('history-btn').addEventListener('click', function(){
    const historyBtn = document.getElementById('history-btn').classList.add('bg-lime-300', 'text-black');
    const historyBtn2 = document.getElementById('donation-btn').classList.remove('bg-lime-300')
    showSection('history-section');
    
     ;
    
})
document.getElementById('donation-btn').addEventListener('click', function(){
    const donationBtn = document.getElementById('donation-btn').classList.add('bg-lime-300')
    const donationBtn2 = document.getElementById('history-btn').classList.remove('bg-lime-300')
    showSection('donation-section');
})


// if(showSection === 'history-section'){
//     ('history-btn').add.classList
// }
// const historyBtn = document.getElementById('history-btn').classList.add('bg-lime-300')