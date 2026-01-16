# Newsletter sign-up form with success message solution

A responsive newsletter sign-up form featuring email validation, success messaging, and mobile-first design. This project demonstrates modern web development practices with clean HTML, CSS, and vanilla JavaScript.



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

#### Desktop Preview

A screenshot showing the newsletter sign-up form on desktop devices with the full layout and illustration.

![Desktop Preview](./docs/desktop-preview.png/)

#### Mobile Preview

A screenshot showing the responsive design optimized for mobile devices.

<img src="./docs/mobile-preview.jpeg" alt="Mobile Preview" width="300" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />


### Links

- Live Site URL: [Live Demo](https://danewsletter.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript

### What I learned

This project helped me practice form validation and dynamic content switching using JavaScript. I learned how to:

- Implement client-side email validation using regular expressions
- Toggle visibility of different UI states (form vs success message)
- Handle form submission and prevent default behavior
- Use CSS custom properties for consistent theming

```js
// Email validation and form handling
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.[A-Za-z]+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (!email || !emailRegex.test(email)) {
        showError();
        return;
    }
    
    showSuccessMessage(email);
});
```

### Continued development

In future projects, I want to focus on:

- Improving accessibility features (ARIA labels, keyboard navigation)
- Adding more sophisticated form validation
- Implementing animations and transitions for better UX
- Learning about form libraries and frameworks

### Useful resources

- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Great resource for understanding form validation techniques
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helped with layout implementation
- [Frontend Mentor](https://www.frontendmentor.io/) - Excellent platform for practicing frontend development

## Author

- GitHub - [@nksarps](https://github.com/nksarps)