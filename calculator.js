/* 
Branch: hw4_calculator
Do nové branch viz výše vytvoř nový program kalkulačky, který bude:
sečte: 565 + 584
odečte: 474 - 520
znásobí: 5822 * 65
Vydělí: 632 / 6
Výsledky vypíše do konzole.

Výsledky nacommituj a pushni do GitHub. Vytvoř PR na lektora (fifkapetr) a můžete zamergovat.
*/


const sum = {
    x: 565,
    y: 584
};
console.log(`Sum ${sum.x} + ${sum.y} = ${sum.x + sum.y}`);


const difference = {
    x: 474,
    y: 520
};
console.log(`Difference ${difference.x} - ${difference.y} = ${difference.x - difference.y}`);

const product = {
    x: 5822,
    y: 65
};
console.log(`Product ${product.x} * ${product.y} = ${product.x * product.y}`);

const quotient = {
    x: 632,
    y: 6
};
console.log(`Quotient ${quotient.x} / ${quotient.y} = ${quotient.x / quotient.y}`);
