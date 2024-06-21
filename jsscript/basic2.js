let arr = [1, 7, 8]
console.log(arr.indexOf(8));

var obj1 = { "stud1": 90, "stud2": 76, "stud3": 76 }
for (let key in obj1) {
    console.log(key + ":" + obj1[key]);
    if (key == "stud2")
        break;
}
console.log("==========");
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 10]
let sumOfArr = 0
for (let n of arr1) {
    sumOfArr += n
}

let p = 10
let sum = p * (p + 1) / 2
console.log(sum - sumOfArr);
console.log("==========");
let puzz_arr = [1, 2, 9, 4, 5, 6]
let target = 7
let lenarr = puzz_arr.length;
//console.log(puzz_arr[0]);
for (let i = 0; i < lenarr - 1; i++) {
    let num1 = puzz_arr[i]
    for (let j = i + 1; j < lenarr; j++) {
        if ((target - num1) === puzz_arr[j]) {
            console.log("Pair is :=", num1, puzz_arr[j]);
            //break;
        }

    }

}
console.log("==========");
for (let m = 0; m < lenarr; m++) {
    let diff = target - puzz_arr[m]
    if (puzz_arr.indexOf(diff) != -1 && puzz_arr.indexOf(diff) != m) {
        console.log(diff, puzz_arr[m]);
       // break;
    }

}