const average = function(num1, num2, num3) {
	return (num1 + num2 + num3)/3;
};

const greeting = function() {
	return 'Hello world';
}

const func = function(num, num1) {
	console.log(num + num1);
};

const fullName = function(firstName, lastName) {
	return firstName + ' ' + lastName;
};

//helper for longestStr function
const max = function(num, num1, num2) {
	if (num > num1 && num > num2) {
		return num;
	}
	if(num1 > num && num1 > num2) {
		return num1;
	}
	return num2;
};

const longestStr = function(str, str1, str2) {
	const maxLength = max(str.length, str1.length, str2.length);

	if(maxLength === str.length) {
		return str;
	}
	if(maxLength === str1.length) {
		return str1;
	}

	return str2;
};

const spaceship = function(num, num1){
	if (num > num1) {
		return 1;
	}

	if (num < num1) {
		return -1;
	}

	return 0;
};

const firstTruthy = function(value, value1, value2) {
	return value || value1 || value2;
};
