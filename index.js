const day1TempF = 32 
const day2TempF = 25
const day3TempF = 70
const day4TempF = 18
const day5TempF = 80
const day6TempF = 15
const day7TempF = 72
const day8TempF = 28
const day9TempF = 68
const day10TempF = 20
const day11TempF = 75
const day12TempF = 23 
const day13TempF = 82
const day14TempF = 30
const day15TempF = 65
const day16TempF = 22
const day17TempF = 77
const day18TempF = 26
const day19TempF = 78
const day20TempF = 24
const day21TempF = 73
const day22TempF = 21
const day23TempF = 79
const day24TempF = 27
const day25TempF = 71
const day26TempF = 19
const day27TempF = 74
const day28TempF = 17
const day29TempF = 76
const day30TempF = 29

// --- Your Conversion Functions ---

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9;
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
}

const tempsF = [
  day1TempF, day2TempF, day3TempF, day4TempF, day5TempF, day6TempF, day7TempF, day8TempF, day9TempF, day10TempF,
  day11TempF, day12TempF, day13TempF, day14TempF, day15TempF, day16TempF, day17TempF, day18TempF, day19TempF, day20TempF,
  day21TempF, day22TempF, day23TempF, day24TempF, day25TempF, day26TempF, day27TempF, day28TempF, day29TempF, day30TempF
];

const totalDays = tempsF.length;

const tot_temperature_in_fahrenheit = tempsF.reduce((sum, temp) => sum + temp, 0);
const tot_temperature_in_celsius = tempsF.reduce((sum, temp) => sum + fahrenheitToCelsius(temp), 0);

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / totalDays;
const avg_temperature_in_celsius = tot_temperature_in_celsius / totalDays;

console.log(`tot_temperature_in_fahrenheit: ${tot_temperature_in_fahrenheit}`); // 1416
console.log(`tot_temperature_in_celsius: ${tot_temperature_in_celsius.toFixed(2)}`); // 253.33
console.log(`avg_temperature_in_fahrenheit: ${avg_temperature_in_fahrenheit.toFixed(1)}`); // 47.2
console.log(`avg_temperature_in_celsius: ${avg_temperature_in_celsius.toFixed(2)}`); // 8.44
module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};