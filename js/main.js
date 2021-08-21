// best price 
const bestPrice = document.getElementById('best-price');

// memory cost 
const extraMemory = document.getElementById('memory-cost');

// final total amount 
let finalTotalPrice = document.getElementById('final-total-price');

// dynamically function
function productCost(product, price) {
    const productName = document.getElementById(product + '-cost');
    productName.innerText = price;
    totalCount();
}

// handle mamory button 
document.getElementById('memory-8GB').addEventListener('click', function () {
    productCost("memory", 0);
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    productCost("memory", 180);
})


// storage cost 
const extraStorage = document.getElementById('storage-cost');
document.getElementById('ssd-256GB').addEventListener('click', function () {
    productCost("storage", 0);
})
document.getElementById('ssd-512GB').addEventListener('click', function () {
    productCost("storage", 100);
})
document.getElementById('ssd-1TB').addEventListener('click', function () {
    productCost("storage", 180);
})

// delivery cost 
const deliveryCharge = document.getElementById('delivery-cost');
document.getElementById('delivery-free-btn').addEventListener('click', function () {
    productCost("delivery", 0);
})
document.getElementById('delivery-prime-btn').addEventListener('click', function () {
    productCost("delivery", 20);
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