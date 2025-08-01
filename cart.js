document.addEventListener('DOMContentLoaded', function () {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartTable = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;
  cartTable.innerHTML = '';
  cartItems.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${item.image}" width="60" /></td>
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>
        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
      </td>
      <td>₹${(item.price * item.quantity).toFixed(2)}</td>
      <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
    `;
    cartTable.appendChild(row);
  });
  cartTotal.textContent = total.toFixed(2);
});
function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart[index]) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  }
}
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

