document.getElementById('add-btn').addEventListener('click',function(){
    document.getElementById('add-from').classList.remove('hidden');
    document.getElementById('out-from').classList.add('hidden');
})
document.getElementById('out-btn').addEventListener('click',function(){
    document.getElementById('add-from').classList.add('hidden');
    document.getElementById('out-from').classList.remove('hidden');
})