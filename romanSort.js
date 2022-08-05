function sortRoman(names) {
    // Write your code here
    let convertedNames = names.map( (item, index) => {
        item = item.split(" ");
        const name = item[0];
        const roman = item[1].split("");

        const convention = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50
        }

        const convertedRoman = roman.map( (character, index) => {
            let next = roman[index+1]
            let multiplier = convention[next] > convention[character] ? -1 : 1;
            return convention[character] * multiplier;
        });

        const decimal = convertedRoman.reduce( (sum, value) => sum + value , 0 );

        return {
            "index": index,
            "name": name,
            "decimal": decimal
        };
    });

    convertedNames = convertedNames.sort( (a, b) => {
        let alphabeticalSorter = 1;
        if(a.name < b.name) {
            alphabeticalSorter = -1;
        }
        else if(a.name > b.name) {
            alphabeticalSorter = 1;
        }
        else {
            alphabeticalSorter = 0;
        }
        return alphabeticalSorter || a.decimal - b.decimal
    });

    console.log(convertedNames);

    convertedNames = convertedNames.map( item => {
        return names[item.index];
    });

    return convertedNames;
}

let names = ['Louis IX', 'Louis VIII'];
console.log( names );
console.log( sortRoman(names) );
console.log( "-".repeat(20) );

names = ['Philippe I', 'Philip II', 'Philip I'];
console.log( names );
console.log( sortRoman(names) );
console.log( "-".repeat(20) );

names = ['Steven XL', 'Steven XVI', 'David IX', 'Mary XV', 'Mary XIII', 'Mary XX'];
console.log( names );
console.log( sortRoman(names) );
console.log( "-".repeat(20) );