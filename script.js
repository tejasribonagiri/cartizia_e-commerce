
function addToCart(productId, name, price, image) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: productId,
      name: name,
      price: price,
      image: image,
      quantity: 1,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
document.addEventListener('DOMContentLoaded', function () {
  const priceRange = document.getElementById('priceRange');
  const rangeValue = document.getElementById('rangeValue');
  const products = document.querySelectorAll('.pro');

  if (priceRange && rangeValue && products.length > 0) {
    priceRange.addEventListener('input', function () {
      const maxPrice = parseInt(priceRange.value);
      rangeValue.textContent = maxPrice;

      products.forEach(product => {

        const aTag = product.querySelector('a[data-price]');
        const price = parseFloat(aTag?.getAttribute('data-price') || 0);

        if (price <= maxPrice) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  }
});



