import{ printInfo } from"./printInfo.js";

function sayHi(user){
    console.log(`Hello,${user}!`);
    printInfo()
}

function move(){
    console.log(`Top-top`)
}

export {sayHi,move}

//export{ sayHi as say,move as m}
//     console.log(`Hello,${user}!`);
// }  

