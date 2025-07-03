function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productName, price) {
  let cart = getCart();
  cart.push({ name: productName, price: price });
  saveCart(cart);
  alert(`${productName} added to cart!`);
}

function updateCartCount() {
  let cart = getCart();
  document.getElementById('cart-count').textContent = cart.length;
}

function displayCart() {
  let cart = getCart();
  let cartItems = document.getElementById('cart-items');
  let totalPrice = 0;
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem('cart');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cart-count')) {
    updateCartCount();
  }
  if (document.getElementById('cart-items')) {
    displayCart();
  }
});