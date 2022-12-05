const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

//body 
const body = document.querySelector("body")
body.style.fontFamily = "sans-serif"
let main = document.createElement('div')
main.id = 'main_div'
main.style.textAlign = "center"
body.appendChild(main)

//heading
let heading = document.createElement('h2')
heading.textContent = 'WORLD COUNTRIES LIST'
main.appendChild(heading)


let numOfCountries = document.createElement('p')
for(let i = 0; i <= countries.length; i++) {
    numOfCountries.textContent = `Total Number of countries:${i}`
numOfCountries.className = 'num_of_countries'
numOfCountries.style.fontSize = '1rem'
numOfCountries.style.fontWeight = 'bolder'
main.appendChild(numOfCountries)
}

let daysOfJs = document.createElement('p')
daysOfJs.textContent ='30DaysOfJavaScript:DOM Day 2'
daysOfJs.className = 'days_of_js'
daysOfJs.style.fontSize = '1rem'
main.appendChild(daysOfJs)

let author = document.createElement('p')
author.textContent = 'Author: Asabeneh Yetayeh'
author.className = 'author_para'
author.style.fontSize = '0.8rem'
main.appendChild(author)


//countries div
let countriesDiv = document.createElement('div')
countriesDiv.className = 'countries_div'
countriesDiv.style.textAlign = "center"
countriesDiv.style.marginLeft = '4.5%'
countriesDiv.style.marginTop = '5%'
countriesDiv.style.display = 'inline-grid'
countriesDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
document.body.appendChild(countriesDiv)

//list of countries
let countriesArray 
for(let i = 0; i < countries.length; i++) {
   countriesArray = document.createElement('p');
   countriesArray.className = 'countries'
   countriesArray.style.padding = '2rem 0.5rem'
   countriesArray.style.border = "1px solid #dbd9d9"
   countriesArray.style.borderRadius = "5px"
   countriesArray.style.fontWeight = "bold"
   countriesArray.style.margin = "0.3rem"
countriesArray.textContent = `${countries[i]}`
countriesDiv.appendChild(countriesArray)
}
