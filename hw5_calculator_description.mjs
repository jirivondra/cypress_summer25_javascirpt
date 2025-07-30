/*
Branch: hw5_calculator_oop
GitHub: Javascript learning
Můžeš použít kód z úkolu 4 (kalkulačka) do složky s úkolem 5.1
Vytvoř třídu Calculator, která bude mít metody (není potřeba vytvářet konstruktor):
Sečíst (add)
Odečíst (subtract)
Násobit (multiple)
Dělit (divide)
Metody budou mít vždy 2 parametry: a, b (nedávejte je do konstruktoru!)
Metoda budou vracet výsledek (pomocí return).
Následně vytvoř kód, který bude inicializovat (vytvoří objekt) Calculator.
Bude vypisovat výsledky do konzole:
Sečíst  14 + 41
Odečíst 174 - 32
Násobit  47 * 50
Dělit 125 / 7
(Objekt Calculator stačí jen jeden).

Výsledek tvé práce napushuj do tvého repa a vytvoř Pull Request na Petra.
*/


export const values = {
    add:{
        a: 14,
        b: 41
    },
    subtract:{
        a: 174,
        b: 32
    },
    multiply:{
        a: 47,
        b: 50
    },
    divide:{
        a: 125,
        b: 7
    },

}


export class calculator {

add(a,b) {
  return a + b;
  }
subtract(a,b) {
  return  a - b;
  }
multiply(a,b) {
  return  a * b;
}
divide(a,b) {
  return  a / b;
}
}

