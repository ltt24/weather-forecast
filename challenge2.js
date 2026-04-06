const weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

console.log(weatherForecast[0].conditions);
console.log(weatherForecast[1].temperature.high);
console.log(weatherForecast[1].astronomy.sunrise);
console.log(weatherForecast[2].conditions);
console.log(weatherForecast[2].astronomy.sunset);

console.log(`Sunday will have a high of ${weatherForecast[2].temperature.high} 
            and a low of ${weatherForecast[2].temperature.low}. 
            Conditions: ${weatherForecast[2].conditions}. 
            Sunrise at ${weatherForecast[2].astronomy.sunrise}, 
            sunset at ${weatherForecast[2].astronomy.sunset}.`);