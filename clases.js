export class Person{


    constructor(name,age){
        this.name = name
        this.age =age
    }

    print =() =>{
        console.log(`Ваше имя: ${this.name} Ваш возраст: ${this.age}`)
    }
}

export default new Person('Vasja'23)