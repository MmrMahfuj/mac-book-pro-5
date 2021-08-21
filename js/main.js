// best price 
const bestPrice = document.getElementById('best-price');

// memory cost 
const extraMemory = document.getElementById('extra-mamory');

// final total amount 
let finalTotalPrice = document.getElementById('final-total-price');


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
    const totalPrice = document.getElementById('total-price').innerText = totalAmountCount();
    finalTotalPrice.innerText = totalAmountCount();
}

// discount cupon handle 
document.getElementById('cupon-btn').addEventListener('click', function () {
    const cuponInput = document.getElementById('cupon-input');
    const userCupon = cuponInput.value;

    if (userCupon == "stevekaku") {
        const discount = totalAmountCount() * 20 / 100;
        const newdiscountAmount = totalAmountCount() - discount;
        finalTotalPrice.innerText = newdiscountAmount;
    }
    cuponInput.value = '';
})

// total amount function 
function totalAmountCount() {
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const extraMemoryprice = parseInt(extraMemory.innerText);
    const extraStoragePrice = parseInt(extraStorage.innerText);
    const deliveryChargePrice = parseInt(deliveryCharge.innerText);
    const totalAmount = bestPriceAmount + extraMemoryprice + extraStoragePrice + deliveryChargePrice
    return totalAmount;
}