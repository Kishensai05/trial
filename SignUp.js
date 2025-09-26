// Get a reference to the form
const form = document.getElementById('signupForm');

// Get a reference to the error message container
const errorMessage = document.getElementById('errorMessage');

// Add the event listener to the form's submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (stops the page from reloading)
    event.preventDefault();

    // Get the user's input values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Perform the validation
    if (password !== confirmPassword) {
        // Display a user-friendly error message on the page
        errorMessage.textContent = 'Passwords do not match!';
        return; // Stop the function from proceeding
    }

    // Basic validation for username/email
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        errorMessage.textContent = 'Username cannot be empty!';
        return;
    }

    // If all validation passes, prepare the data and log it
    const userData = {
        username: username,
        password: password
    };

    console.log('User data to be sent:', userData);
    alert('Sign-up successful! (This is a mock submission)');
});