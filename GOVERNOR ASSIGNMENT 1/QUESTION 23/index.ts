let car: string = 'subaru';

// Test 1: Is car == 'subaru'? Prediction: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is car == 'honda'? Prediction: False
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 3: Is car != 'toyota'? Prediction: True
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');

// Test 4: Is car === 'subaru'? Prediction: True
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 5: Is car !== 'subaru'? Prediction: False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 6: Is car.includes('su')? Prediction: True
console.log("Does car include 'su'? I predict True.");
console.log(car.includes('su'));

// Test 7: Is car.length > 5? Prediction: False
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

// Test 8: Is car[0] === 's'? Prediction: True
console.log("Is the first character of car 's'? I predict True.");
console.log(car[0] === 's');

// Test 9: Is car.toUpperCase() === 'SUBARU'? Prediction: True
console.log("Is car in uppercase 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU');

// Test 10: Is car.toLowerCase() === 'subaru'? Prediction: True
console.log("Is car in lowercase 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');
