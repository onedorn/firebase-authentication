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
            console.log(cred.user);
            const modal = document.querySelector('#modal-signup');
            M. Modal.getInstance(modal).close();
            signupForm.reset();
        })

})