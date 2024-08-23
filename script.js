// Get the modal elements
const loginModal = document.getElementById('loginModal');
const signUpModal = document.getElementById('signUpModal');

// Get the buttons that open the modals
const loginButton = document.getElementById('loginButton');
const signUpButton = document.getElementById('signUpButton');

// Get the elements that close the modals
const closeLogin = document.getElementsByClassName('close')[0];
const closeSignUp = document.getElementsByClassName('close')[1];

// Function to open the login modal
loginButton.onclick = function() {
    loginModal.style.display = 'block';
};

// Function to open the sign-up modal
signUpButton.onclick = function() {
    signUpModal.style.display = 'block';
};

// Function to close the login modal
closeLogin.onclick = function() {
    loginModal.style.display = 'none';
};

// Function to close the sign-up modal
closeSignUp.onclick = function() {
    signUpModal.style.display = 'none';
};

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target == signUpModal) {
        signUpModal.style.display = 'none';
    }
};
