function buildSum(a) {
 return function(b) {
     a + b
 } 
}

const addFive = buildSum(5)
console.log(addFive(5)) // 10