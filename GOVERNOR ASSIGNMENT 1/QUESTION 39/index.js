function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with three city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// n this function:
// We define a function city_country that takes two parameters: city (string) and country (string).
// Inside the function, we use template literals to format the city and country into a single string.
// The function returns this formatted string.
// We call the function city_country with different city and country combinations and print the returned value for each call.
