document.getElementById('btn-number1').addEventListener('click',function(event) {
    const number1 = event.target.value;
    const initValue = document.getElementById('count-value');
    const initValueField = initValue.innerText;
    initValue.innerText = number1;
    
})