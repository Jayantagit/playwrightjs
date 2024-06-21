const { log } = require("console");

var cars = ["toyota", "audi", "maruti"]
console.log(cars.join(":"));
//console.log(cars[1]);
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);

}
cars.push("tata xcl");
console.log(cars);
cars.pop();
console.log(cars.join(":"));
cars.unshift("ambasadder")
console.log(cars.join(":"));
cars.splice(1, 0, "sumo");
console.log(cars.join(":"));
cars.splice(2, 1, "tata safari");
console.log(cars.join(":"));
console.log(cars.slice(1, 3));
let nums = [2, 1, 6, 9, 6];
nums.sort((a, b) => (b - a));
console.log(nums);
console.log("====================");
let sum = nums.reduce((p, c) => (p + c), 0)
let mapb=nums.filter(m=>m>2).map(m=>m*2)
console.log(sum);
console.log(mapb);
console.log("====================");
var sum_num = 0
for (let a of nums) {
    sum_num += a;
}
console.log(sum_num);
console.log("====================");
var suma = 0;
for (let p in nums) {
    suma += nums[p];
}
console.log(suma);

console.log("====================");
function summation(a,b)
{
    return (a+b);
}
let addition=(a,b)=>a+b;
console.log(addition(10,20));