const todaysWeather = {
  temperature: {
    high: 35,
    low: 28
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "5:43 AM",
    sunset: "6:09 PM"
  }
}
console.log(todaysWeather.temperature.high);
console.log(todaysWeather.temperature.low);
console.log(todaysWeather.conditions);
console.log(todaysWeather.astronomy.sunrise);

console.log(`Today's weather is ${todaysWeather.conditions}. 
            High temperature: ${todaysWeather.temperature.high} degree C, 
            Low temperature: ${todaysWeather.temperature.low} degree C. 
            Sunrise at ${todaysWeather.astronomy.sunrise}, 
            sunset at ${todaysWeather.astronomy.sunset}.`);