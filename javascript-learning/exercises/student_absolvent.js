/*
Cvičení ( ⌛10:00):
Vytvořte program, který bude vyhodnocovat, jestli má student dostatek bodů k úspěšnému ukončení studia.
Program ulož do složky: javascript-learning/exercises
Název souboru: student_absolvent.js

Vstupy: 
Počet bodů studenta.
Jméno studenta.

Hodnocení:
Minimální počet bodů pro úspěch: 75

Výsledek zaloguj srozumitelně do konzole s jménem.

*/

const studentName = "Jiří Vondra";
const result = 70;
const minGradPoints =75;


if (result >= minGradPoints) {
const studentName = "Jiří Vondra";
const result = 70;


if (result >= 75) {
    console.log(`Student ${studentName} has ${result} point and past test!`);
} else {
    console.error(`Student ${studentName} has ${result} point and do not pass in test!`);
}
}