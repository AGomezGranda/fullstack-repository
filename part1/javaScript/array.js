const t = [1, 2, 3, 4, 5];
t.push(6);

console.log(t.length);
console.log(t);
console.log(t[t.length - 1]);
t.forEach(value => {console.log(value)});
console.log(t[2]);


const y = [1, 2, 4];
const y2 = y.concat([5]);
console.log(y);
console.log(y2);

//map method

const z = [1, 2, 3]
const z2 = z.map(value => value * 2);
const z3 = z.map(value => '<li>' + value + '</li>');

console.log(z);
console.log(z2);
console.log(z3);

const r = [1, 2, 3, 4, 5];
const [first, second, ...rest] = r;
console.log(first);
console.log(rest);

