// Get Donation Amount using a common function

document.getElementById('donation-btn1').addEventListener('click', function(){
    const donationNoa = getDonationAmount('donation1'); 
    console.log('btn1 clicked');   
})
document.getElementById('donation-btn2').addEventListener('click', function(){
    const donationFeni = getDonationAmount('donation2'); 
    console.log('btn2 clicked');   
})
document.getElementById('donation-btn3').addEventListener('click', function(){
    const donationQuota = getDonationAmount('donation3');    
    console.log('btn3 clicked');
})