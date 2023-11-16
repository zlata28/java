//Cоздать HTML страницу.Подключить скрипт js.
//Cделать fetch запрос к https://dummyjson.com/docs/products
//Из полученного массива товаров вывести все заголовки в html
//createI


// output.innerHTML = 


// let products = [] 

//async function getProducts(){
//   const data = await fetch('https://dummyjson.com/docs/products')
//   const products = await data.json()
// }
// getProductO()

// function createProduct(){
//   products
// }




// async function getProducts(){
//   let products = [] 
//   const list = document.guerySelector('output')

//   fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(json =>{
//           products = json.products
//           products.forEach(item =>{
//             let elem = document.createElement('li')
//             elem.textContent = item.title
//             list.appendChild(elem)
//           })
//       })
//       .catch(error => console.log(error))
// }



//модули

import{sayHi}from"./sayHi.js";
import{Person}from"./clases.js";

console.log('Это вывод из script.js')

const obj = new Person('Vasja',23)

sayHi(Vasja)

obj.print()

