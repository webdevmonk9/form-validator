document.getElementById('signup-form').onsubmit = function(event) {
     // prevent form from being submitted
     event.preventDefault();
   
     // get user input
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var passwordConfirm = document.getElementById('password-confirm').value;
   
     // validate input
     if (email == '') {
       showErrorMessage('Please enter an email address');
     } else if (password == '') {
       showErrorMessage('Please enter a password');
     } else if (password != passwordConfirm) {
       showErrorMessage('Passwords do not match');
     } else {
       showErrorMessage('');
       // form is valid, submit it
       this.submit();
     }
   };
   
   function showErrorMessage(message) {
     var errorElement = document.getElementById('error-message');
     errorElement.innerHTML = message;
   }
   