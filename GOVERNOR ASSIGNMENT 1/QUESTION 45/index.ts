function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        const [key, value] = option;
        car_info[key] = value;
    });

    return car_info;
}

// Call the function with required information and two additional name-value pairs
let car_details = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to ensure all the information was stored correctly
console.log(car_details);




// In this function:

// We define a function store_car_info that accepts two required parameters (manufacturer and model) and an arbitrary number of additional options provided as key-value pairs.
// Inside the function, we initialize an object car_info with the manufacturer and model.
// We loop through the options array using forEach to extract the key-value pairs and add them to the car_info object.
// Finally, we return the car_info object containing all the provided information.
// We call the function store_car_info with the required information (manufacturer and model) and two additional name-value pairs (color and year) and store the result in car_details.
// We print the car_details object to ensure all the information was stored correctly.





