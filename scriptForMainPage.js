//const userName = document.getElementById('username');
const username = localStorage.getItem('username');
const displplayUsername = document.getElementById('displayUsername');
displayUsername.innerHTML = 'Hello ' + username;
console.log(username);
document.getElementById('sign-out-button').addEventListener('click', signOut)
function signOut(e)
{
    console.log('clicked');
    window.location.href = "/index.html";
    localStorage.getItem()
}  