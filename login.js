// Login js
document.getElementById('login-button').addEventListener('click', function(){

    const myEmail = document.getElementById('login-email');
    const inputEmailValue = myEmail.value;
    
    const myPassword = document.getElementById('login-password');
   
    const inputPassword = myPassword.value;
if(inputEmailValue === "rahadhasan3367@gmail.com" && inputPassword === "rahad@@"){
    location.href = './bank.html';
}else{
    alert('Your email and password not match');
}
myEmail.value = "";
myPassword.value = "";
});

