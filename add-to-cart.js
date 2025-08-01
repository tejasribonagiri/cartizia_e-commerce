document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const name = this.getAttribute("data-name");
      const price = parseFloat(this.getAttribute("data-price"));
      const image = this.getAttribute("data-img");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingIndex = cart.findIndex(item => item.name === name);
      if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });
});
