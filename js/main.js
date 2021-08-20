// best price 
const bestPrice = document.getElementById('best-price');

// memory cost 
const extraMemory = document.getElementById('extra-mamory');


document.getElementById('memory-8GB').addEventListener('click', function () {
    extraMemory.innerText = '0';
    totalCount();
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    extraMemory.innerText = '180';
    totalCount();
})


// storage cost 
const extraStorage = document.getElementById('extra-storage');
document.getElementById('ssd-256GB').addEventListener('click', function () {
    extraStorage.innerText = '0';
    totalCount();
})
document.getElementById('ssd-512GB').addEventListener('click', function () {
    extraStorage.innerText = '100';
    totalCount();
})
document.getElementById('ssd-1TB').addEventListener('click', function () {
    extraStorage.innerText = '180';
    totalCount();
})

// delivery cost 
const deliveryCharge = document.getElementById('delivery-charge');
document.getElementById('delivery-free-btn').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    totalCount();
})
document.getElementById('delivery-prime-btn').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    totalCount();
})

// total count 
function totalCount() {
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const extraMemoryprice = parseInt(extraMemory.innerText);
    const extraStoragePrice = parseInt(extraStorage.innerText);
    const deliveryChargePrice = parseInt(deliveryCharge.innerText);
    const totalAmount = bestPriceAmount + extraMemoryprice + extraStoragePrice + deliveryChargePrice
    console.log(totalAmount);
    const totalPrice = document.getElementById('total-price').innerText = totalAmount;
    // const totalPriceNumber = parseInt(totalPrice);
    // totalPrice.innerText = totalAmount;

}