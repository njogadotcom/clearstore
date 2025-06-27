function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart`);
}

window.onload = function () {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  if (cartItems && totalDisplay) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });

    totalDisplay.textContent = total.toFixed(2);
  }
}
