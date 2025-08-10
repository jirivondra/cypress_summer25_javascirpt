/*
Branch: bonus_students_rating
Po dokončení úkolu nacommitujte, pushněte do branch a vytvořte Pull Request na Petra.

Vytvořte jednoduchý program pro výpočet známky studentům.
Vstupy: 
Počet bodů studenta (max 100 bodů).
Jméno studenta.
Hodnocení:
Známka A: 90 - 100 bodů
Známka B: 85 - 89 bodů
Známka C: 75 - 84 bodů
Známka D: 70 - 74 bodů
Známka F: méně než 74 bodů
Výsledek zaloguj srozumitelně do konzole s jménem.
TIP: začni podmínku od 90 bodů, ať se ti správně vyhodnotí podmínky níže.
*/


const studentName = "Jiří Vondra"
const actualResult = 78
let finalGrade
const result = {
    a:{
        max:100,
        min: 90,
    },
    b:{
        max: 89,
        min: 85,
    },
    c:{
        max: 84,
        min: 75,
    },
    d:{
        max: 74,
        min: 70,
    },
    f:{
        max: 69,
        min: 0
    },
}


if (actualResult >= result.a.min) {
    finalGrade = 'A';
} else if (actualResult >= result.b.min) {
    finalGrade = 'B';
} else if (actualResult >= result.c.min) {
    finalGrade = 'C';
} else if (actualResult >= result.d.min) {
    finalGrade = 'D';
} else {
    finalGrade = 'F';
} 

const passTest = "passed"
const failTest = "failed"

const finalResultStatus = ['A', 'B', 'C', 'D'].includes(finalGrade) ? passTest : failTest

if(finalResultStatus === passTest) {
    console.log(`Student ${studentName} has ${actualResult} points, got ${finalGrade} for result and ${passTest} the test.`);
} else {
    console.error(`Student ${studentName} has ${actualResult} points, got ${finalGrade} for result and ${failTest} the test.`);
}



