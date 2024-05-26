function reqListener() {
  const countryArr = JSON.parse(this.responseText); 

  const asianCountries = countryArr.filter(country => country.region === "Asia");
  const popul=countryArr.filter(country=>country.population<200000);
  console.log(asianCountries); 
  console.log(popul);
  countryArr.forEach(country => {
  const name = country.name.common;
  const capital = country.capital
  const flag = country.flags && country.flags.svg 

  console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
});

  const totalPopulation = countryArr.reduce(
    (accumulator, country) => accumulator + country.population,0
  );
  console.log(`Total population:${totalPopulation}`);
  const dollars=countryArr.filter(country=>{
    const currencies = country.currencies;

    if (currencies) {
      return Object.values(currencies).some(currency => currency.name === "United States dollar");
    }
    return false;
  });
  console.log(dollars)
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();




