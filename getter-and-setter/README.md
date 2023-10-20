# Thermostat Class

The Thermostat class is designed to control temperature in both Fahrenheit and Celsius. It uses getter and setter methods to track the temperature in one scale while allowing users to access it in either Fahrenheit or Celsius.

## How It Works

The `Thermostat` class has the following features:

- The constructor accepts an initial temperature in Fahrenheit and sets it internally.
- A getter `temperatureInCelsius` allows you to obtain the temperature in Celsius using the conversion formula (C = 5/9 \* (F - 32)).
- A setter `temperatureInCelsius` accepts a temperature in Celsius, converts it to Fahrenheit, and updates the internal temperature value.

### Example Usage:

```javascript
const thermos = new Thermostat(68); // Set temperature in Fahrenheit
console.log(thermos.temperatureInCelsius); // Get temperature in Celsius (20)

thermos.temperatureInCelsius = 25; // Set temperature in Celsius
console.log(thermos._temperature); // Get temperature in Fahrenheit (77)
```
