var x=true;


var nameArray = [];
var phoneArray = [];
var streetArray =[];

while (x) {
	var victims = prompt("how many victims would you like to enter?")
	if (isNaN(victims)===true)  { 
		alert("please enter a number");
	}
	else {
		x=false
		
		for (var i=victims; i>0; i--) {
			var name = prompt("thanks, please enter the name of one of the victims.");
				nameArray.push(name);
			var phone = prompt("please enter their phone number");
				phoneArray.push(phone);
			var street = prompt("please enter their street name.");
				streetArray.push(street);
		}
	}
}

console.log(nameArray, phoneArray, streetArray);




