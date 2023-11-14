//Cоздать HTML страницу.Подключить скрипт js.
//Cделать fetch запрос к https://dummyjson.com/docs/products
//Из полученного массива товаров вывести все заголовки в html
//createI


output.innerHTML = 


let products = [] 

async function getProductO(){
  const data = await fetch('https://dummyjson.com/docs/products')
  const products = await data.json()
}
getProductO()

function createProduct(){
  products
}