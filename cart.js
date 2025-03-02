import { cartItem  } from './cartItem.js';

const addToCart = document.querySelector("#add-to-cart");

addToCart.addEventListener("click", async()=>{
    const str = new URLSearchParams(window.location.search);
    const id = str.get("id");

    const response = await fetch(`https://gutendex.com/books/${id}`);
    const details = await response.json();

    addtocart(details,id);
    console.log(cartItem);
})


function addtocart(details,id){
    const existingItem = cartItem.find(item => item.id === id);

    if(existingItem){
        existingItem.quantity += 1;
    }
    else{
        cartItem.push({
            Book_id: id,
            Book_name: details.title,
            Book_author: details.authors[0].name,
            quantity: 1,
        });
    }
}