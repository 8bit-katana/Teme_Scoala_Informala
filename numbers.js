function countOddEven(array) {
    let oddValues = 0;
    let evenValues = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenValues++;
        } else {
            oddValues++;
        }
    }

    return {
        oddValues: oddValues,
        evenValues: evenValues
    };
}

const numbersExample = [3, 8, 2, 17, 6, 9, 54, 65, 14, 82, 91, 3151351, 242];
const resultExample = countOddEven(numbersExample);

console.log("Odd values:", resultExample.oddValues);
console.log("Even values:", resultExample.evenValues);
