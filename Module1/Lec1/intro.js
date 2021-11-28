//cout<<"Hello World"    . In c++


console.log("Hello World");

//Let is blocked scope

let a = 10;
let b = 12;
console.log(a,b);

if(true){
   let a = 20;
    console.log(a);
}

console.log(a);


// Primitive Data type

const pi = 3.14;
console.log(pi);

let c = true;
console.log(c);
let f = undefined;
console.log(f);
let g;
console.log(g);

let h = 'Hi My name is Piyush'
console.log(h);

//Non Primitve Data type

let value = [1,2,3,'i',5,6,7,8,9,10]
console.log(value);
console.log(value[3]);

//add some data in value array in end 
value.push(100);
console.log(value);
console.log(typeof(value));
//delete data in value array in end 
value.pop();
console.log(value);
//delete data in value array from starting
value.shift();
console.log(value);
//Add data in value array from starting
value.unshift('abc')
console.log(value);


//splice
value.splice(5,2)
console.log(value);

//Object
let obj = {
    name:"Piyush kumar",
    place:"Gorakhpur",
    movies:["Sholey","Gangasta","Satyamev jayte"]
}
console.log(obj);
console.log(obj.name);
console.log(obj.movies[0]);