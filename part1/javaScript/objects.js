const object1 = {
    name: "Alvaro Gomez",
    age: 25,
    education: "PhD",

}

const object2 = {
    name: "Full Stack Developer",
    level: "Junior",
    size: 4,
}

const object3 = {
    name: {
        first: "Alberto",
        last: "Ramirez",
    },
    grades: [2, 3, 5, 2],
    departament: "IT",
}

console.log(object1);
console.log(object1.age);

const fieldNane = "age"
console.log(object1[fieldNane]);

console.log(object3.name);

object1.address = "Calle falsa 123";
object1["DNI"] = "12345678";

console.log(object1);
