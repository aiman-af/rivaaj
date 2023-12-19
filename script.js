// JavaScript for the shopping cart functionality

// Sample product data (replace with your actual data)
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more product data as needed
  ];
  
  // Initialize the shopping cart
  let shoppingCart = [];
  
  // Function to add an item to the shopping cart
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
  
    if (product) {
      shoppingCart.push({ id: product.id, name: product.name, price: product.price });
      updateCartDisplay();
    }
  }
  
  // Function to update the shopping cart display
  function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
  
    // Clear the current cart display
    cartItemsContainer.innerHTML = '';
  
    // Populate the cart items
    shoppingCart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(listItem);
    });
  
    // Calculate and display the total price
    const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
    cartTotalElement.textContent = totalPrice.toFixed(2);
  }
  
  // Function to handle the checkout process (you can customize this)
  function checkout() {
    alert('Thank you for shopping with Rivaaj!'); // Replace with your actual checkout logic
  }
  
  // Example: Add event listeners to "Add to Cart" buttons
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-product-id'));
        addToCart(productId);
      });
    });
  });
  