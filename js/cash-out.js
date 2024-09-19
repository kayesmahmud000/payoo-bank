document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = parseFloat(document.getElementById('cash-out-amount').value);
    const cashOutPin =document.getElementById('cash-pin-number').value;
    const validBalance = parseFloat(document.getElementById('available-balance').innerText);
    if(cashOutPin ==='1234'){
        const newBalance= validBalance-cashOutAmount;
        
        document.getElementById('available-balance').innerText=newBalance;

    }
    
})