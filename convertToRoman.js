function convertToRoman(num) {
    var equivalents = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var roman = '';
    
    Object.keys(equivalents).forEach( (key) => {
        const quantity = Math.floor(num / equivalents[key]);
        num -= quantity * equivalents[key];
        roman += key.repeat(quantity);
    });
    
    return roman;
}

let number = 58;
console.log( number, convertToRoman(number) );

number = 4;
console.log( number, convertToRoman(number) );

number = 797;
console.log( number, convertToRoman(number) );

number = 3999;
console.log( number, convertToRoman(number) );