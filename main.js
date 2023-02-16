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
