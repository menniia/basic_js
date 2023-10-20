class Thermostat {
    constructor (Fahrenheit) {
      this._Fahrenheit = Fahrenheit;
    }

    // Getter to obtain temperature in celsius
    get temperatureInCelsius() {
      return (5/9) * (this._Fahrenheit - 32);
    }

    // Setter to accept temperature in celsius
    set temperatureInCelsius(updatedFahrenheit) {
      this._Fahrenheit = (updatedFahrenheit * 9.0/5 + 32);
    }
  }