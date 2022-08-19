
document.getElementById('calculator-btn').addEventListener('click', function(){
    const inputPrice = document.getElementById('price-field');
    const inputTotalAmountString = inputPrice.value;
    const newInputTotalAmount = parseFloat(inputTotalAmountString);
    inputPrice.value = '';
    // console.log(newInputTotalAmount);

   const discountParcentField = document.getElementById('discount-field');
   const discountParcent = discountParcentField.value;
   const countDiscountParcent = newInputTotalAmount * 0.3 ;
    const newDiscountPrice = newInputTotalAmount - countDiscountParcent;
    discountParcentField.value = '';

    const totalDiscountField = document.getElementById('TotalPrice');
    const newTotalDiscountPrice = totalDiscountField.innerText;

    if(discountParcent=='DOM'){
        totalDiscountField.innerText = newDiscountPrice;
    }
    else{
        alert('enter valid text and get 30% discount');
    }
})