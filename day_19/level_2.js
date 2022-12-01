//num 1
const functionCount = (n) => {
    let count = 1;
    function addFunc() {
count = count + n
return count
    }

    function multiplyFunc() {
count = count * n
return count
    }

    function minusFunc() {
count = count - n
return count
    }

    return {
        addFunc:addFunc(), 
        multiplyFunc:multiplyFunc(), 
        minusFunc:minusFunc(), 
    } 
}
 const accessOuterFunction = functionCount(2);
 console.log(accessOuterFunction.addFunc)
 console.log(accessOuterFunction.multiplyFunc)
 console.log(accessOuterFunction.minusFunc)

