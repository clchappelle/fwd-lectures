var myFavoriteNumbers = [13, 69, 420, 666];

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
	console.log("My favorite number is 4!");
	console.log("here is a second console log!!!");
	console.log("Here is a third console log!!!");
}

var i = 0;
while (i < myFavoriteNumbers.length) {
	console.log("The value of i is" + i);
	i += 1;
}

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
	console.log(myFavoriteNumbers[i])	
}

var me = {
	name: "Jeffrey",
	age: 29,
	location: "Berkeley",
	favoriteFoods: [
		"sushi",
		"pizza"
	],
	siblings: [
		{
			name: "Lily",
			age: 25,
			location: "brooklyn"
		},
		{
			name: "Scott",
			age: 2,
			location: "your heart"
		}
	]
};

console.log(me["location"]);

var add = function (addend1, addend2) {
	var something = me.favoriteFoods[0];
	alert("Jeffrey's favorite food is " + something);
	return addend1 + addend2;
}

var sum = add(1, 2)

var yay = function () {
	console.log('hooray!!!');
}

var resultOfYay = yay();

var helloWorld = function (hello, world) {
	return hello + world;
}

console.log(helloWorld("hello"));

var giveMeSomething = function (obj) {
	if (typeof obj === 'object') {
		return obj.something;
	}
}

giveMeSomething();