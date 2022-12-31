const countriesAPI = 'https://restcountries.com/v2/all';
//num 1
fetch(countriesAPI)
.then((data) => {
    return data.json();
})
.then((formattedData) => {
    let countryDetails = '';
    formattedData.map((val) => {
        countryDetails += `
        <h1>${val.name}</h1>
        <p>${val.capital}</p>
        <p>${val.languages}</p>
        <p>${val.population}</p>
        <p>${val.area}</p>`
    })
    document.getElementById('card').innerHTML = countryDetails
}).catch((err) => {
    console.log(err);
})