var createName = function (first, last) {
	return first + ' ' + last;
}

var askName = function () {
	var first = prompt('What is your first name?');
	var last = prompt('What is your last name?');

	var fullName = createName(first, last);

	if (first == 'Murray' && last == 'Stenson') {
	alert('Your name is ' + fullName);
	} else {
		askName();
	}
}

askName();