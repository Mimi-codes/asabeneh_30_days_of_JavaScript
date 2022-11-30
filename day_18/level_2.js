const catsAPI = 'https://api.thecatapi.com/v1/breeds';
//num 1
fetch(catsAPI).then((data) => {
return data.json()
}).then((parsedData) => {
let catNames = ''
parsedData.map((val) => {
    catNames += `
    <h3>${val.name}</h3>
    `
})
document.getElementById('names').innerHTML = catNames

}).catch((err) => {
    console.log(err);
})


