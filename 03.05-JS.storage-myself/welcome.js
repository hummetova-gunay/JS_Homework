
let allInputs=document.querySelectorAll('.form-control')

let greeting = document.querySelector('h1');
let userData = JSON.parse(localStorage.getItem('dataOfUsers'));
let currentUser = allInputs[0].value// get the email address or username of the currently logged-in user

let matchedUser = userData.find(user => user.emailAddress === currentUser || user.userName === currentUser);

if (matchedUser) {
  greeting.innerHTML = `Hello ${matchedUser.userName}!`;
  // Redirect the user to the welcome page here
} else {
  greeting.innerHTML = 'User not found!';
}

