function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(x) {
  return 'Hello,' + ' ' + x;
}

var greeting = getGreeting('World!');
console.log('greeting:', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('add and multiply by 5 result:', result);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumference(x) {
  return (x * 2) * 3.14;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(x, y) {
  return x + ' ' + y;
}

var name = getFullName('Juan', 'Ramirez');
console.log('Full Name:', name);

function cube(number) {
  return number * number * number;
}

var cubedResult = cube(5);
console.log('cubed result:', cubedResult);
