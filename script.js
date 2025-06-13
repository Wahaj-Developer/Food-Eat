const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

ham.addEventListener('click', () => {

    nav.classList.toggle('active');


});


// changing price to order

document.addEventListener('click', function(e) {
    const foodElement = e.target.closest('.food');
    if (!foodElement) return;

    const priceElement = foodElement.querySelector('.food-price');
    if (!priceElement) return;

    // Store original price if not already stored
    if (!priceElement.hasAttribute('data-original-price')) {
        priceElement.setAttribute('data-original-price', priceElement.textContent);
    }

    // Toggle text
    const currentText = priceElement.textContent;
    const originalPrice = priceElement.getAttribute('data-original-price');
    const isOrdered = currentText === 'Ordered☺';
    priceElement.textContent = isOrdered ? originalPrice : 'Ordered☺';

    // Show alert only when ordering (not when un-ordering)
    if (!isOrdered) {
        showAlert('🎉 Thank you for your order, foodie! Your taste buds will thank you!');
    }
});



// Message of order is done


function showAlert(message) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'alert-overlay';

    // Create alert box
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.textContent = message;

    // Append to body
    document.body.appendChild(overlay);
    document.body.appendChild(alertBox);

    // Remove after 3 seconds
    setTimeout(() => {
        alertBox.remove();
        overlay.remove();
    }, 1500);
}

