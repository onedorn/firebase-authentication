// Sign Up 
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get users info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const modal = document.querySelector('#modal-signup');
            M. Modal.getInstance(modal).close();
            signupForm.reset();
        })

})

// Logout the users
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log('user has been signed out');
    })
})


// Login form
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred);
            // Close login modal and reset window
            const modal = document.querySelector('#modal-login');
            M. Modal.getInstance(modal).close();
            loginForm.reset();
            
        })

})

