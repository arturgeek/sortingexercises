function sortRoman(names) {
    
    let convertedNames = names.map( (item, index) => {
        item = item.split(" ");
        const name = item[0];
        const roman = item[1].split("");

        const convention = { "I": 1, "V": 5, "X": 10, "L": 50 }

        const convertedRoman = roman.map( (character, index) => {
            let next = roman[index+1]
            let multiplier = convention[next] > convention[character] ? -1 : 1;
            return convention[character] * multiplier;
        });

        const decimal = convertedRoman.reduce( (sum, value) => sum + value , 0 );

        return { "index": index, "name": name, "decimal": decimal };
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

names = ["Swordsman I", "Sorcerer II", "Archer I", "Wizard XX", "Pikeman II", "Archer II", "Archer VI", "Pikeman VII"];
console.log( names );
console.log( sortRoman(names) );
console.log( "-".repeat(20) );

names = ['Alexander the Great - Archer I','Arthas - Pikeman II','Arthas - Swordsman I','Keltuzad - Wizard XX','Thrall - Sorcerer II'];
const fixed_names = names.map( (name) => {
    let name_parts = name.split("-").map( (part) => { return part.trim() } );
    let level = name_parts.pop();
    level = level.split(" ")[1];
    return name_parts[0].replace(/ /g,"") + " " + level;
});

console.log( "names: " , names );
console.log( "fixed_names: " , fixed_names );
const sorted_fixed_names = sortRoman(fixed_names)
names = sorted_fixed_names.map( (name) => {
    return names[ fixed_names.indexOf(name) ];
});
console.log( "result: ", names );
console.log( "-".repeat(20) );