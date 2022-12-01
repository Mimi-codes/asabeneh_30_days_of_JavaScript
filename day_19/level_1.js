//num 1
const functionCount = (n) => {
    let count = 5;
    function innerFunction() {
count = count * n
return count
    }
    return innerFunction 
 }
 const accessOuterFunction = functionCount(2);
 console.log(accessOuterFunction())