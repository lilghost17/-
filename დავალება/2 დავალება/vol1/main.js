let input1=document.getElementById('input1');

input1.addEventListener('keydown',()=>{
    document.querySelector('section').style.backgroundColor=input1.value;})