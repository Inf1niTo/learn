window.addEventListener('click', function(event){

    //plus minus ------------------------------------------
    let counter;
    let counterWrapper;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        
        countWrapper = event.target.closest('.counter-wrapper');
        
        counter = countWrapper.querySelector('[data-counter]');
    }


    if (event.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText
    }


    if (event.target.dataset.action === 'minus'){

        if (counter.innerText > 1){

            counter.innerText = --counter.innerText

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ){

            event.target.closest('.cart-item').remove();
        }
        toggleCartStatus()
    }


    //plus minus ------------------------------------------ end

})