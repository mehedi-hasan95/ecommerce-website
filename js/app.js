const cartProductArray = [];

function display(cartProduct) {
    const productInsart = document.getElementById('product-insart');
    productInsart.innerHTML = '';
    let totalPrice = 0;
    for (let i = 0; i < cartProduct.length; i++) {
        const product = cartProductArray[i].product_Name;
        const price = cartProductArray[i].product_Price;
        totalPrice = totalPrice + parseFloat(price);

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${product}</td>
        <td>${price}</td>
        `;
        productInsart.appendChild(tr);
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td></td>
        <td>Total Price</td>
        <td>${totalPrice}</td>
        `;
    productInsart.appendChild(tr);
}

function addToCart(element) {
    const productName = element.parentNode.children[0].innerText;
    const productPrice = element.parentNode.children[1].children[0].innerText;

    const productObj = {
        product_Name: productName,
        product_Price: productPrice
    };
    cartProductArray.push(productObj);

    // console.log( cartProductArray );
    document.getElementById('added-product').innerText = cartProductArray.length;
    // Na Boja Jaiga 
    display(cartProductArray);
}