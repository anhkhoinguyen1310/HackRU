document.getElementById('sign-in-button').addEventListener("click", function()
{
    const userName = document.getElementById('username').value;
    console.log("clicked");
   	document.getElementById('username').value = '';
	document.getElementById('sign-in').style.display = 'none';
	document.getElementById('sign-out').style.display = 'block';
	const displayUsername = document.getElementById('displayUsername'); //display userName + logo after signing in
	displayUsername.innerHTML = 'Hello ' + userName; //innerHTML normally use to add st to the element.
	
})

document.getElementById('sign-out-button').addEventListener('click', signOut)
function signOut(e)
{
    document.getElementById('sign-in').style.display = 'block'; 
    document.getElementById('sign-out').style.display = 'none'; 
	const storeApplicastionState = JSON.stringify(applicationState);
	localStorage.setItem('class', storeApplicastionState);
	//2. translate back to JS object. 

}