function calcCartPrice(){
    const cartItems = document.querySelectorAll('.cart-item');
    const showPrice = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')


    let totalPrice = 0;

    cartItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        

        const currencePrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice +=currencePrice

        

        

        
    })
    showPrice.innerText = totalPrice

    if (totalPrice > 0){
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')
    }


    if (totalPrice >=600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250р';
    }
}