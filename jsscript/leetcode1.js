
function sumNumbers(arr, fn) {
    let modarr = []
    arr.forEach((val, index) => {
        modarr.push(fn(val, index))
    });
    return modarr;
}

function addsum(val,index)
{
    return val+index;

}
let vb = sumNumbers([1, 2, 3, 4, 5], addsum)

console.log(vb);
