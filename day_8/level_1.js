// num 1
const dog = {};

//num 2
console.log(dog);

//num 3
dog.name = 'Sibberian Husky';
dog.legs = 4;
dog.color = 'Gray';
dog.age = 5;
dog.bark = 'Woof'
dog.bark = function() {
    return 'Woof Woof';
}
// console.log(dog) 

//num 4 
const dogValues = Object.values(dog);
// console.log(dogValues);

//num 5
dog.breed = 'Sibberian';
dog.getDogInfo = function () {
    console.log(Object.values(dog));
}

// console.log(dog);