var x=true;
var nameArray = [];
var phoneArray = [];
var streetArray =[];

var y=true
var nameArray2 =[];
var phoneArray2 = [];
var streetArray2 = [];

while (x) {
	var victims = prompt("how many victims would you like to enter?");
	if (isNaN(victims)===true)  { 
		alert("please enter a number");
	}
	else {
		x=false;
		
		for (var i=victims; i>0; i--) {
			var name = prompt("thanks, please enter the name of one of the victims.");
				nameArray.push(name);
			var phone = prompt("please enter this victim's phone number");
				phoneArray.push(phone);
			var street = prompt("please enter this victim's street name.");
				streetArray.push(street);
		}
	}
}
	 

while (y) {
	var volunteers = prompt("how many volunteers would you like to enter?");
	if (isNaN(victims)===true) {
		alert("please enter a number");
	}
	else {
		y=false;

		for (var i=victims; i>0; i--) {
			var name = prompt("thanks, please enter the name of one of the volunteers.");
				nameArray2.push(name);
			var phone = prompt("please enter this volunteer's phone number");
				phoneArray2.push(phone);
			var street = prompt("please enter this volunteer's street name.");
				streetArray2.push(street);
		}

	}
}






var finalAlertString = "The total number of victim(s) is " + victims + ". ";

for (var i=victims-1; i>=0; i--) {
		var victimInfo = "Victim " + nameArray[i] + "'s phone number is " + phoneArray[i] + " and he/she lives on " + streetArray[i] + " street. ";
		finalAlertString += victimInfo;
};

for (var i=victims-1; i>=0; i--) {
		var volunteerInfo = "Volunteer" + nameArray[i] + "'s phone number is " + phoneArray2[i] + " and he/she lives on " + streetArray2[i] + " street. ";
		finalAlertString += volunteerInfo;
};

alert(finalAlertString);