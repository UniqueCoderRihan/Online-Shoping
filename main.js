// frist cart

document.getElementById('frist-card').addEventListener('click', function(){
    // get the data from html using id.
    const productName = document.getElementById('frist-name').innerText;
    const productPrice = document.getElementById('frist-price').innerText;
    const productQuantity = document.getElementById('frist-quantity').innerText;
    // console.log(productName , productPrice , productQuantity);

    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);

    const container = document.getElementById('table-container');
   
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${totalPrice}</td>
    `;
    container.appendChild(tr);
})