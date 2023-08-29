function convertCelsiusToFahrenheit() {
  const celsius = document.getElementById("celsiusInput").value;
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheitInput").value = fahrenheit;
}

function convertFahrenheitToCelsius() {
  const fahrenheit = document.getElementById("fahrenheitInput").value;
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsiusInput").value = celsius;
}