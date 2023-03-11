var objPeople = [
	{
		username: "root",
		password: "admin"
	},

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
            window.location.href = 'welcome.html';
			return
            
		}
	}
	console.log("incorrect username or password")
}