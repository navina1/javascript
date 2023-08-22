
//Array concatination
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
//console.log(arr3);

//Adding elements to an array
const arr4 = ["q","w","e"];
const arr5 = [...arr4, "b", "n"];
//console.log(arr5)

//copy array
const array6 = [0, 9, 8];
const copy = [...array6];

//object concatination
const a = { name: "navi", age: 12 };
const d = { n: "anu", a: 12 };
const concat ={...a,...d}
console.log(concat);

//object copy
const n = { a: "nm", b: 10 };
const m = { ...n }
console.log(m)

//adding new feilds to object
const z = { a: "abc", b: 10 }
const y = { ...z, c: "p", d: 9 };
console.log(y)


//function spread operator
function abc(a, b, c) {
    return a + b + c;
}
const num = [1, 2, 3]
const u = abc(...num)
console.log(u)



