let str = "1: 2: 3: 4: 5";

let average = str.split(": ").reduce(function(avg, number, index) {
   return +avg + (number - avg) / (index + 1)
});

console.log(average)