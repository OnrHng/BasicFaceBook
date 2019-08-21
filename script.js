var database = [
	{
		username:"Onur",
		password:"1234"
	}
]

var newsFeed = [
	{
		name: "onur",
		timeline:"today is so bored!!!"
	},
	{
		name: "ozan",
		timeline:"i am so funny!!!"
	},
	{
		name: "ali",
		timeline:"The World is normal!!!"
	}
]

function signIn() 
{
	if (database[0].username === document.getElementById("user").value 
		&& database[0].password === document.getElementById("pass").value)
	{
		alert("Welcome \n You are sign in now" + "\n" +  newsFeed.join('\n'));
	}
	else 
	{
		alert("Your Username or password are incorrect!!!");
	}
} 
