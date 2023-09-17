// объекты JS практика

let user = {
    name: "John",
}

user.name = "Alice";

delete user.name;

console.log(user.name);

console.log("age" in user);


const person = {
    name:"Zlata",
    age:45,
    city:"Sochi",
    address:{
        street:"Mira",
        zipcode:354054,
    }
}

console.log(person);

for(key in person){
    console.log(person[key])
}

let result = (person).length === 0 ? "Пустой" :"Не пустой";

console.log(result)
//11
const personCopy = {...person}

console.log(personCopy)
//12
const person2 = {...person,...personCopy};

for(key in person2){
console.log(person2[key])
};

console.log(person.address.street)
//16
delete person.address;
//17
console.log("proto"in person);
//22
const circle = {
    radius:5,
    MathPi:3.14,
    calculateArea: function(result){          
    result = (radius*radius*Math.PI)
    console.log(result)
},
}



