const arto = {
    name: 'Arto Fernandez',
    age: 33,
    education: 'PhD',
    greet: function(){
        console.log("Hello my name is " + this.name)
    },
    doAddition: function(a, b){
        console.log(a + b);
    }
}
arto.greet();

arto.grow = function(){
    this.age += 1;
}
console.log(arto.age);
arto.grow();
console.log(arto.age);

arto.doAddition(3, 4);

const reference = arto.doAddition;
reference(7, 4);

arto.greet()
const referenceGreet = arto.greet;
referenceGreet();

setTimeout(arto.greet.bind(arto), 1000);
