document.addEventListener("DOMContentLoaded", function () {
    const menuSection = document.querySelector('.menu-container');

    // Function to detect if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Scroll event listener to trigger sliding menu animation
    window.addEventListener('scroll', function () {
        if (isInViewport(menuSection)) {
            menuSection.classList.add('menu-show');
        }
    });
    
});
function makePayment() {
    if (cartCount === 0) {
        alert("Your cart is empty! Please add items before making a payment.");
        return;
    }

    // Simulate payment processing with a timeout
    setTimeout(() => {
        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    }, 3000); // Adjust time as needed for processing simulation
}


function addToCart() {
    const item = cartItems[Math.floor(Math.random() * cartItems.length)]; // Random item example
    
    // Retrieve current cart from localStorage or start a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update DOM and navigate
    cartCount++;
    totalAmount += item.price;
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
    alert("Item added to cart!");
    window.location.href = "cart.html";
}

let currentIndex = 0;  // Initialize the current index for the slider
const images = document.querySelectorAll('.drinks-slider img');  // Select all images in the slider
const totalImages = images.length;  // Get the total number of images

// Function to move the slider to the next image
function nextSlide() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;  // Increment index to move to the next image
    }
    updateSlider();
}

// Function to move the slider to the previous image
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;  // Decrement index to move to the previous image
    }
    updateSlider();
}

// Function to update the slider's transform property to display the correct image
function updateSlider() {
    const slider = document.querySelector('.drinks-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;  // Move slider to the current image
}

// Add event listeners to the navigation arrows
document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

