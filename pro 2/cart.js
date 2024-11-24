// Sample pizza data for cart
const pizzaData = [
    { name: "The Blanco", price: 150.00 },
    { name: "Tuscany", price: 200.00 },
    { name: "The Mushroom", price: 190.00 },
    { name: "Old Smokey", price: 210.00 },
    { name: "Pepperoni", price: 200.00 },
    { name: "Margherita", price: 190.00 }
];

// Add to cart function
function addToCart(pizzaIndex) {
    // Retrieve or initialize cart in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add selected pizza to cart
    cart.push(pizzaData[pizzaIndex]);

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Confirm item addition in console
    console.log("Item added to cart:", pizzaData[pizzaIndex]);

    // Redirect to cart page
    window.location.href = "cart.html";
}
// Load and display cart items
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;

    cartContainer.innerHTML = ''; // Clear previous content
    
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - Rs. ${item.price}`;
        cartContainer.appendChild(itemElement);
        total += item.price;
    });

    // Update total price
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

window.onload = displayCartItems;


// Proceed to Payment
function proceedToPayment() {
    alert("Redirecting to payment page.");
    // Redirect to payment processor or another payment page
    window.location.href = "confirmation.html";
}

// Call displayCartItems when the page loads
window.onload = displayCartItems;
function processPayment() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert("Payment is being processed...");
        // Here, you would typically integrate with a payment API.
        setTimeout(() => {
            alert("Payment successful! Thank you for your order.");
            window.location.href = "confirmation.html"; // Redirect to confirmation page
        }, 2000); // Simulate 2 seconds for payment processing
    } else {
        alert("Please fill in all payment fields.");
    }
}
