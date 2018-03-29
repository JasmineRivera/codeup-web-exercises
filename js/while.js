"use strict";

var number;

number= 2;
while (number <=  65536 ) {
    console.log(number);
    number *= 2;
}

for (
    number = 2;
    number <= 65536;
    number *= 2
) {
    console.log(number);
}

number = 2;
do {
    console.log(number);
    number *= 2;
} while (number <= 65536 );


var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) {
        console.log(conesSold + ' cones sold...');

        allCones -= conesSold;
    } else {
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '...');
    }

} while (allCones > 0);
console.log('Yay! I sold them all!');

for (allCones = Math.floor(Math.random() * 50) + 50; allCones > 0; ) {
    conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) {
        console.log(conesSold + ' cones sold...');
        allCones -= conesSold;
    } else {
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '...');
    }
}
console.log('Yay! I sold them all!');
