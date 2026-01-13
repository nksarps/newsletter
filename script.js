// Get DOM elements
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const signupContainer = document.getElementById('signup-container');
const successContainer = document.getElementById('success-container');
const userEmailSpan = document.getElementById('user-email');
const dismissBtn = document.getElementById('dismiss-btn');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email || !emailRegex.test(email)) {
        showError();
        return;
    }
    
    // If valid, show success message
    hideError();
    showSuccessMessage(email);
});

// Input event to remove error state when user starts typing
emailInput.addEventListener('input', () => {
    if (emailInput.classList.contains('error')) {
        hideError();
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


