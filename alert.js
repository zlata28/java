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

//console.log(person)

// for(key in person){
//        console.log(person[key])
// }

// person.set("Vlad");

// console.log(person.name)



// const person2 = {
//     name:"Vlad",
//     age:36,
//     address:{
//         city:"Moskov",    
//         street:"Lenina" ,
//     }
// }

// const person3 = {...person2}

// console.log(person3)

//Строки
// let str = "Hello"
// console.log(str.at(-1))

// for(let i of str){
//     console.log(str.at(-2))
// }

// let str3 = ''
// let str4 = ''

// for(let i of str){
//     if(i == str[0])str3 = i.toLowerCase()
//     else str4 += i   
// }
// str = str3 + str4
// console.log(str)

// str = str.toUpperCase()

// // console.log(str)


// //строки
// let str = 'Ослик Иа-Иа посмотрел на виадук';

// console.log(str.indexOf("Иа",7))

// //let searchStr = "Иа"

// function searchStr(search){
//      if(str.indexOf(searchStr) >= 0)console.log("Найдено")
//      else console.log("Не найдено.")
// }

// searchStr("потом")


// let strLuko = "У лукоморья дуб зелёный,Златая цепь на дубе том:И днём и ночью кот учёный,Всё ходит по цепи кругом.Идёт направо — песнь заводит,Налево — сказку говорит."

// let strLukoCopy = strLuko.toLowerCase()

// let target = "на"
// // let pos = 0
// //  while(true){
// //     let foundPos = strLukoCopy.indexOf(target,pos)
// //     if(foundPos == -1) break;
 
// // console.log(`Найдено тут: ${foundPos}`)
// // pos = foundPos +1
// //  }

//  function Luko(str,target){   // ?
//     let strCopy = strLuko.toLowerCase()

//     let pos = 0
//  while(true){
//     let foundPos = strCopy.indexOf(target,pos)
//     if(foundPos == -1) break;
 
// console.log(`Найдено тут: ${foundPos}`)
// pos = foundPos +1
//  }
// }
// Luko(strLuko,'на')


// // массивы
// let arr = new Array()
// let arr2 = ["Яблоко", "Апельсин", "Слива"];

// console.log(arr2[1])

// arr2[1] = 'Груша'
// console.log(arr2[1])

// arr2[3] = 'Лимон'
// console.log(arr2)

// arr2[4] = {name: 'Igor'}
// console.log(arr2[4])

//arr3 = [()=> 2+2,54,'Oleg']
// console.log(arr3)

// console.log(arr2.at(-2))

// arr2.push(67)
// console.log(arr2)
// arr2.shift()
// console.log(arr2)
// arr2.unshift('Яблоко')
// console.log(arr2)
// arr2.pop()
// console.log(arr2)
// let num2 = arr2.pop()
// console.log(arr2)
// arr2.push("Апельсин","Груша");
// arr2.unshift("Ананас","Лимон");
// console.log(arr2)

// let arr3 = []

// arr2.at(-1)
// arr2.length

//Методы массивов
// let arr = ["Яблоко","Апельсин","Груша"]
// let buf = ''
// arr.forEach((i) => {
//      buf += i +','
// })
// console.log(buf)


// let arr = [1,20,3,45]

// function sum(arr){
//     let sum = 0
//     for(let i=0; i < arr.length; i++){
//         sum += arr[i]
//     } 
//     return sum
// }
// let summ = sum(arr)
// console.log(summ)

// ///////////////////

// function maxsimal(arr){
//     return Math.max(...arr)
// } 
//  let max = maxsimal(arr)
//  console.log(max)

//  ////////
//  let user = [1,"Вася",2, "Петя",
//  ]

//  let users = user.filter (function()){
    
//  }
    // let arr=["a","bc","de","fgh","i","jkl"];

    // var resultArray = arr.filter(function(t) {
    //   return t.length >= 2;
    // }).sort(function(a, b) {
    //   return b.length - a.length;
    // });
    
    // console.log(resultArray);



    // let arr3 = [32,76,82,32,22,76]

    // function newArr(arr){
    //     arrBuff = new Set(arr)
    //     arrBuff2 = Array.from(arrBuff)
    //     return arrBuff2   
    //    // return [...new Set(arr)]
    // }

    // let arr4 = newArr(arr3)
    // console.log(arr4)


    function aclean(arr) {
        let map = new Map();
      
        for (let word of arr) {
          // разбиваем слово на буквы, сортируем и объединяем снова в строку
          let sorted = word.toLowerCase().split("").sort().join(""); // (*)
         console.log(`${sorted}:${word}`)
          map.set(sorted, word);
        }
      
        return Array.from(map.values());
      }
      
      let arr5 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
      
      //alert( aclean(arr) );
      aclean(arr5)
      console.log(aclean(arr5));



      let map = new Map();

      map.set("name", "John");
      
      let keys = Array.from(map.keys());
      
      keys.push("more");
      
      console.log(keys);



      // fetch('https://dummyjson.com/docs/products')
//     .then(res => res.json())
//     .then(json => {

//     })