
// Header- Scrolling script
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Scroll in scripts
document.addEventListener("DOMContentLoaded", () => {
    const scrollText = document.querySelector(".scroll-text");
    const showcaseImage = document.querySelector(".showcase-image");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // Trigger when 40% of the image is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                scrollText.classList.add("visible");
            } else {
                scrollText.classList.remove("visible");
            }
        });
    }, observerOptions);

    // Observing the showcase image container
    observer.observe(showcaseImage);
});

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".grid-container"); // Image slider. 
    const slideUpElements = document.querySelectorAll(".slide-up"); //Performance section


    const observerOptions = {
        root: null, // Observe within the viewport
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 30% of the row is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    rows.forEach((row) => {
        observer.observe(row);
    });
    slideUpElements.forEach(element => observer.observe(element)); // Performance section
        // showcase image container
        observer.observe(showcaseImage);
});



document.addEventListener('DOMContentLoaded', function () {
    // Form validation for signup form
    const signupForm = document.getElementById('signupForm');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const signupEmailError = document.getElementById('signupEmailError');
    const signupPasswordError = document.getElementById('signupPasswordError');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        let isValid = true;

        // Validate email
        if (!validateEmail(signupEmail.value)) {
            signupEmailError.textContent = 'Please enter a valid email.';
            isValid = false;
        } else {
            signupEmailError.textContent = '';
        }

        // Validate password
        if (signupPassword.value.length < 6) {
            signupPasswordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            signupPasswordError.textContent = '';
        }

        if (isValid) {
            // Form is valid, you can submit the form or handle as needed
            alert('Signup successful!');
        }
    });

    // Form validation for login form
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');

    // Login Form Submit
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        let isValid = true;

        // Validate email
        if (!validateEmail(loginEmail.value)) {
            loginEmailError.textContent = 'Please enter a valid email.';
            isValid = false;
        } else {
            loginEmailError.textContent = '';
        }

        // Validate password
        if (loginPassword.value.length < 6) {
            loginPasswordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            loginPasswordError.textContent = '';
        }

        if (isValid) {
            // Form is valid, you can submit the form or handle as needed
            alert('Login successful!');
        }
    });

    // Validate email function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
