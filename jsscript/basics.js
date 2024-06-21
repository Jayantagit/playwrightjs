const { log } = require("console");

var a = 10
console.log(typeof (a));
var b = "Playwright"
var c = 2024
console.log(b + c);
let k = -1;
console.log(!k);

var val = 153;
if (val % 2 == 0) {
    console.log("Even number");
}
else {
    console.log("Odd number");
}
val = 15432;
let rev1 = 0;
while (val > 0) {
    rev1 = rev1 * 10 + Math.round(val % 10, 0);
    val = Math.round(val / 10, 0);
}
console.log("Reverse :=" + rev1);

console.log("================");
for (let c1 = 0; c1 < 7; c1++) {
    if (c1 % 2 == 0 && c1 > 0) {
        console.log(`${c1} is even`);
    }
}
console.log("================");
for (let p = 97; p <= 122; p++) {
    console.log(String.fromCharCode(p));
    // console.log(char(p));
}