
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phnNumber= document.getElementById('phn-number').value;
    
    const pinNumber=document.getElementById('pin-number').value;
    if(phnNumber === '56' && pinNumber==='1234'){
        window.location.href='/home.html';
    }else{
        alert('please type right pin');
    }
})