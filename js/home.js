document.getElementById('btn-add money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = parseFloat(document.getElementById('add-amount').value)
    const pinNum= document.getElementById('pin-number').value;
    const vailBalance= parseFloat(document.getElementById('available-balance').innerText);
    if(pinNum === '1234'){
       const newBalance = addMoney + vailBalance;
       document.getElementById('available-balance').innerText = newBalance;
    }else{
        alert('Wrong pin')
    }

})