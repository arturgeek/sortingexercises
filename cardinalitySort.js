/*
 * Complete the 'cardinalitySort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY nums as parameter.
 */

function cardinalitySort(nums) {
    // Write your code here
    let numbers = nums.map( number => {

        let binary = (number >>> 0).toString(2);

        const binaryCardinality = binary
            .split("").map( bit => { return parseInt(bit) } )
            .reduce( (sum, bit) => sum + bit, 0 );

        return {
            "number": number,
            "binaryCardinality": binaryCardinality
        }
    });

    numbers.sort( (a, b) => {
        return a.binaryCardinality - b.binaryCardinality || a.number - b.number
    });

    console.log(numbers);

    numbers = numbers.map( item => { return item.number });

    return numbers;
}

let nums = [1, 2, 3, 4, 5];
console.log( nums );
console.log( cardinalitySort(nums) );
console.log( "-".repeat(20) );

nums = [31, 15, 7, 3, 2];
console.log( nums );
console.log( cardinalitySort(nums) );
console.log( "-".repeat(20) );

nums = [5,31,15,7,39,128,12,64];
console.log( nums );
console.log( cardinalitySort(nums) );
console.log( "-".repeat(20) );
