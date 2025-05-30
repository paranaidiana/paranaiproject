

const cartItems = []; 
const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function updateCart() {
    cartList.innerHTML = ""; 
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2); 
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price")); 

        if (!name || isNaN(price)) {
            console.error("Invalid product data"); 
            return;
        }

        cartItems.push({ name, price });
        updateCart();
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');

      answer.classList.toggle('active');
      icon.textContent = answer.classList.contains('active') ? '−' : '+';
    });
  });
});
document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("active");
});

