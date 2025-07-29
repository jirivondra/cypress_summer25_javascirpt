const cities = ["Praha", "Brno", "Olomouc", "Plzeň"];
console.log(cities);
console.log("2. město: " + cities[1]);

for (let i = 0; i < cities.length; i++) {
  console.log(`cities[${i}] = ${cities[i]}`);
}