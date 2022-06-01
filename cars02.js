const carBrands = ['Honda', 'Acura', 'BMW', 'Audi', 'Toyota', 'Lexus', 'Jeep', 'Kia' ]
const carModels = [ ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey'], ['TLS', 'RDX', 'MDX', 'NSX'], ['3-Series', '5-Series', '7-Series','X3','I8'], ['A7', 'A8', 'Q5', 'Q7', 'R8'], ['Corolla', 'Camry', 'Avalon', 'Prius', 'RAV4'], ['IS', 'ES', 'LS', 'RX', 'LX'], ['Cherokee', 'Grand Cherokee', 'Wrangler', 'Patriot', 'Compass'], ['FORTE', 'Optima', 'K8', 'Sorento', 'Sportage', 'Telluride'] ]
const carMileage = [ [12000, 15000, 21500, 16200, 10800], [8000, 5000, 11000, 9000], [2900, 5200, 4800, 9200, 6300], [8000, 9000, 10000, 12000, 15000], [18000, 19500, 20000, 8500, 13200], [8000, 6700, 9000, 5600, 5900], [8500, 9400, 18500, 9900, 8800], [4000, 9600, 1300, 9900, 7700, 100] ]
const carColors = [ ['Black', 'Blue', 'White', 'Silver', 'Red'], ['Black', 'Gray', 'Green', 'Blue'], ['White', 'Silver', 'Black', 'Blue', 'White'], ['White', 'Red', 'Silver', 'Black', 'Black'], ['Black', 'White', 'Blue', 'Gray', 'White'], ['Black', 'White', 'Blue', 'Gray', 'Black'], ['Green', 'Black', 'Gray', 'White', 'Red'], ['Black', 'Silver', 'Red', 'Red', 'White', 'Gray'] ]

allCars = function() {
    for (i = 0; i < carBrands.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            console.log(carBrands[i], carModels[i][j], carMileage[i][j]+' Miles', carColors[i][j])
        }
    }
}

wantedColor = function(carColor) {
    for (i = 0; i < carBrands.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            if (carColor == carColors[i][j]) {
            console.log(carBrands[i], carModels[i][j], carMileage[i][j]+' Miles', carColors[i][j])
            }
        }
    }
}
userMilage = function(carMiles, carColor) {
    for (i = 0; i < carBrands.length; i++) {
        for (j = 0; j < carModels[i].length; j++) {
            if (carMileage[i][j] <= carMiles && carColor == carColors[i][j]) {
            console.log(carBrands[i], carModels[i][j], carMileage[i][j]+' Miles', carColors[i][j])
            }
        }
    }
}


userMilage(5000, 'Black')
// wantedColor('White')