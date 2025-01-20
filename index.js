document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const card = document.getElementById('card').value;

   
    if (!validateCardNumber(card)) {
        document.getElementById('status').innerHTML = 'Invalid card number';
        return;
    }

    
    document.getElementById('status').innerHTML = alert('Transaction successful!');

    
    document.getElementById('transaction-form').reset();
});

function validateCardNumber(cardNumber) {
   
    return cardNumber.length === 16;
}
