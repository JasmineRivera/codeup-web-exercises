(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('Sun');
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth'); // cmd + b
    console.log(index);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();
var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

/**
 * Convert planetsString to an array, and save it in a variable named
 * planetsArray.
 * console.log planetsArray to check your work
 */
var planetsArray = planetsString.split('|');
console.log(planetsArray);

/**
 * Create a string with <br> tags between each planet. console.log() your
 * results. Why might this be useful?
 *
 * BONUS:
 * Create another string that would display your planets in an unordered
 * list. You will need an opening AND closing <ul> tags around the entire
 * string, and <li> tags around each planet.
 */
console.log(planetsArray.join('<br>'));


document.write('<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>');
