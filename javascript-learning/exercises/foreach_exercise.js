/*
Cvičení - forEach ⌛5:00:
Vytvořte ve složce: javascript-learning/exercises soubor: foreach_exercise.js
Vytvořte array: usernames
Tuto array naplňte alespoň pěti string hodnotami.
Vytvořte forEach, který postupně vypíše hodnoty z array usernames
*/


const usernames =[ 'Jirka', 'Honza', 'Petr']


usernames.forEach((element, index, array) => {
    console.log(`element: ` + element);
    console.log(`index: ` + index);
    console.log(`array: ` + array);
});