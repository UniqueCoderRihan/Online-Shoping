let serial = 0;
// frist cart

document.getElementById('frist-card').addEventListener('click', function(){
    // serial 
    serial += 1;
    // get the data from html using id.
    const productName = document.getElementById('frist-name').innerText;
    const productPrice = document.getElementById('frist-price').innerText;
    const productQuantity = document.getElementById('frist-quantity').innerText;
    // console.log(productName , productPrice , productQuantity);

    // multiplay korchi
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    
    // show the data  
    displayData(productName, productPrice, productQuantity, totalPrice)
})

// using event object form borwser
// 2nd Card

document.getElementById('secound-card').addEventListener('click', function(e){
    // serial
    serial += 1;
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productQuantity);
    
    // that's just  doing sum for education Purpas.although it's do to Multiplay.
    
    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    
    // that's data give for function,whois show dislplay function.

   displayData(pName,pPrice,pQuantity, sumTotal);
})

// 3rd Card

document.getElementById('third-btn').addEventListener('click', function(e){
    // serial
    serial += 1;
    // get the element using ParentNode
    const thridProductName = e.target.parentNode.parentNode.children[0].innerText;
    const thridProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const thridProductQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // Now Calculete with formula,Like This: sum, Minus,Multipication etc
    const thridProductTotal = parseInt(thridProductPrice) * parseInt(thridProductQuantity);

    // now Call the function and give The Value.
    
    displayData(thridProductName, thridProductPrice, thridProductQuantity, thridProductTotal);
    
    // console.log(thridProductQuantity);
})

// forth card
// {done The Work useing Handaler by The ELement Id}
document.getElementById('forth-btn').addEventListener('click',function(e){
    // serial
    serial +=1;
    // find the element using nodeParent
    const forthProductName = e.target.parentNode.parentNode.children[0].innerText;
    const forthProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const forthProductQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(forthProductPrice);
    // console.log(forthProductName);
    // console.log(forthProductQuantity);

    // If You have A condition about calculetion the you will did . but now I calculete Minus

    const forthProductsTotal = parseInt(forthProductPrice) - parseInt(forthProductQuantity);

    // Call The Function For Return the Value .
    displayData(forthProductName,forthProductPrice, forthProductQuantity, forthProductsTotal);
})

// fifth-card

// Set the Handaler Using Id
document.getElementById('fifth-btn').addEventListener('click',function(){
    // set the  serial
    serial+=1;
    const fifthProductName = document.getElementById('fifthProduct-Name').innerText;
    const fifthProductPriceElement = document.getElementById('fifthProduct-price');
    const fifthProductQuantityElement = document.getElementById('fifthProduct-quantity');
    const fifthProductPrice = fifthProductPriceElement.value;
    const fifthProductQuantity = fifthProductQuantityElement.value;
    const fifthProductsTotal = parseInt(fifthProductPrice) * parseInt(fifthProductQuantity);

    // clear the input Filed After Calculetion;
    fifthProductPriceElement.value = '';
    fifthProductQuantityElement.value = '';


    
    // validation 
   if(fifthProductsTotal >=0){
    // Now Call the Function for show the Value On Website
    displayData(fifthProductName, fifthProductPrice, fifthProductQuantity,fifthProductsTotal);
   }
   else{
    alert('Your Input Is Not A Number Type. Make Sure Again , Must You Need To Give Number Type Input. ThankYou .')
   }
    // console.log(fifthProductsTotal);
    // console.log(typeof(fifthProductQuantity));
    // console.log(fifthProductPrice);
    // console.log(fifthProductName);
   

})

// common function to display data.

function displayData(pN, pP,pQ, pT){
    const container = document.getElementById('table-container');
   
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${pN}</td>
        <td>${pP}</td>
        <td>${pQ}</td>
        <td>${pT}</td>
    `;
    container.appendChild(tr);
}
