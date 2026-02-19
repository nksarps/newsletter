// Get DOM elements (getting references to necessary HTML elements by their IDs)
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const signupContainer = document.getElementById('signup-container');
const successContainer = document.getElementById('success-container');
const userEmailSpan = document.getElementById('user-email'); // to display user email in success message
const dismissBtn = document.getElementById('dismiss-btn');

// Email validation regex
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.[A-Za-z]+$/;

// Form submission handler (listens for the submit event on the newsletter form)
form.addEventListener('submit', (e) => {
    // prevent default form reload behavior when submitting
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email || !emailRegex.test(email)) {
        showError();
        return;
    }
    
    // If valid, show success message
    hideError(); // hide any existing errors if the email is valid
    showSuccessMessage(email);
});

// Input event to remove error state when user starts typing
// If user previously tried to submit an invalid email
emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        hideError(); // remove error state when user starts typing
    }
});

// Show error state
function showError() {
    emailInput.classList.add('error');
    errorMessage.classList.add('show');
}

// Hide error state
function hideError() {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('show');
}

// Show success message
function showSuccessMessage(email) {
    userEmailSpan.textContent = email;
    signupContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
}

// Dismiss button handler
dismissBtn.addEventListener('click', () => {
    successContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
    
    // Reset form
    form.reset();
    hideError();
});


