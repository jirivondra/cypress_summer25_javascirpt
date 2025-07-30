import { calculator, values } from "./hw5_calculator_description.mjs";

const cauting = new calculator()

console.log(`Result of counting: ${values.add.a} + ${values.add.b} = ${cauting.add(values.add.a,values.add.b)}`);
console.log(`Result of counting: ${values.subtract.a} - ${values.subtract.b} = ${cauting.subtract(values.subtract.a,values.subtract.b)}`);
console.log(`Result of counting: ${values.multiply.a} * ${values.multiply.b} = ${cauting.multiply(values.multiply.a,values.multiply.b)}`);
console.log(`Result of counting: ${values.divide.a} / ${values.divide.b} = ${cauting.divide(values.divide.a,values.divide.b)}`);