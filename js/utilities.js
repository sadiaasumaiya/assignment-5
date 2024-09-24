function getDonationAmount(id){
    const donationAmount = document.getElementById(id).value;
    const donation = parseFloat(donationAmount);
    console.log(id, donation);
}