
let expect = function (value) {
    return {

        assertTrue: (val) => {
            if (value === val) {
                return true;
            }
            return false;
        },
        assertFalse: (val) => {
            if (value != val) {
                return true;
            }
            return false;
        }

    }
}

let validate=expect(10)
console.log(validate.assertTrue(10));