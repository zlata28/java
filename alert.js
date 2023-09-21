
//let web = 3
//var web2 = 3
//const web3 = 4

//console.log(web,web2,web3)

//web = 5
//web2 =6

//console.log(web,web2,web3)



//let admin = ""
//let name = "Djon"

//admin = name

//alert(admin)


//let a = S;
//let b;

//b = a

//let age =prompt("Какого года ты рождения?")

//let result = 2023 - age

//let name = "Ваш возраст:"

//let  id = 5

//alert(`${name}`+result)

//let url = `locahost:3000/post/${id}`

//console.log(url)


//alert("Я JavaScript!")


//let num; 
//let num = prompt (`Число больше 100`);
//do {alert(num);num++}
//while (num<=100);  

// let a=1;
// const b=2;
// let c = String(a)
// alert (c);

// let age = prompt( "Ваш возвраст?");
// if (age <18){
    // alert(`Школьник`)}
//  else if (age >18){
    // alert(`Студент`)}

// let result=(age<18)? 'Школьник' :'Студент';
// alert(result);


// let i=0;
// while (i<=10) { 
//   alert( i );
//   i++;
// }


// for (let i=0; i<=10;i++){
//      alert(i)
// }


// let i=10;
// while (i>0) { 
//     let num = Math.round(Math.random(100)*100)
//     console.log(num)
//     i--;
// }



// let age = +prompt( "Ваш возвраст?");
// function scoolStud(x) {
//   if(x<18){ 
//     x++
//     console.log('Школьник')
//   }else{
//     console.log('Студент')
//   }
// }

// scoolStud(age)


// let a = +prompt("первое число");
// let b = +prompt("второе число");
// function min(a,b){
//     if(a < b) {
//         return a 
//     }else return b
// } 

// console.log(min(a,b))


// function имя(локальнаяПеременая1,локальнаяПеременая2){
//     //тело функции
//     return локальнаяПеременая1 + локальнаяПеременая2
// }

// let глобальнаяПеременая1 = 2
// let глобальнаяПеременая2 = 4

// let результат = функция( глобальнаяПеременая1,глобальнаяПеременая2)

// console.log(результат)

// let функция = function(локальнаяПеременая1,локальнаяПеременая2){
//       //тело функции
//       return локальнаяПеременая1 + локальнаяПеременая2
// };

// let результат2 = функция(глобальнаяПеременая1,глобальнаяПеременая2)
// console.log(результат2)

// function sayHi() {
//     alert( "Привет" );
//   }
  
//   alert(sayHi); // выведет код функции

//   console.log(sayHi())

// function колбэкФункция(лП1,лП2,лП3){
//     if(confirm(лП1)) лП2()
//     else лП3()
// }

// колбэкФункция(
//     "Ты согласен?",
//     function() {console.log("Вы согласны")},
//     function() {console.log("Вы не согласны")},
// )

// let a = +prompt("Первое число?")
// let x = prompt("знак +-*/ ?")
// let b = + prompt("Второе число?")
// let calculate = (x =='+') ? function(){alert(a+b)}:
// (x =='-') ? function(){alert(a-b)}:
// (x =='*') ? function(){alert(a*b)}:
// (x =='/') ? function(){alert(a/b)}:0
// calculate()


//  let a = +prompt("Первое число?")
//  let b = +prompt("Второе число?")
// function sum(){
//     alert("")
// }
// sum()


// function sum(a,b){
//     return a+b
// }

// let mult = function(a,b){
//     return a * b
// }

// function calculate(a,b,sum, milt){
//     if(a>b) console.log(sum(a,b))
//     else  console.log(milt(a,b))
// }

// calculate(5,6, sum, mult)


// let user = new Object();



// const user ={
//     name: "Alex",
//     age: 30,
//     key: "value",
//     "likes birds": true,
// }


// user.isAdmin = true;

// delete user.age;


// user["likes birds"] = false
// console.log(user["likes birds"])


// let x = "likes birds"
// user[x] = 8
// console.log(user["likes birds"])

// let bag ={
//     fruct: " ",
//     coll: 0,
//     price: 0
// }

// bag.fruct = prompt("Какой фрукт купить?")
// bag.coll = +prompt("Кол-во?")
// bag.price = +prompt("Цена?")





// let a = +prompt("Первое число?")
// let x = prompt("знак +-*/ ?")
// let b = + prompt("Второе число?")
// let calculate = (x =='+') ? function(){alert(a+b)}:
// (x =='-') ? function(){alert(a-b)}:
// (x =='*') ? function(){alert(a*b)}:
// (x =='/') ? function(){alert(a/b)}:0
// calculate()



// объекты JS практика

// let user = {
//     name: "John",
// }

// // user.name = "Alice";

// // delete user.name;

// alert(user.name);

// alert("age" in user);


// const person = {
//     name:"Zlata",
//     age:45,
//     city:"Sochi",
// }

// console.log(person);




// const person = {
//     name:"Zlata",
//     age:45,
//     address:{
//         city:"Sochi",    
//         street:"Mira" ,
//     },
//     set: function(name){
//          this.name = name
//     }
// }

console.log(person)

for(key in person){
       console.log(person[key])
}

person.set("Vlad");

console.log(person.name)



const person2 = {
    name:"Vlad",
    age:36,
    address:{
        city:"Moskov",    
        street:"Lenina" ,
    }
}

const person3 = {...person2}

console.log(person3)






