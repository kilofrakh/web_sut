
let person = {
    name:"shaymaa",
    age:25,
    welcome:function(){
        console.log("welcome "+this.name)
    }
}
person.welcome()


console.log(person.name)

person.name = "Ali"
console.log(person)

person.major = "cs"
console.log(person)

delete person.age
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

let person2 = {}
Object.assign(person2,person,{job:"designer"})
console.log(person2)

function Person(name,age){
    this.name = name
    this.age = age
}

// console.log(person.prototype)

let obj = new Person("Mai",27)
console.log(obj.name)

let obj2 = new Person("Sara",30)

// let a = new Array(1,2,3)
// console.log(Array.prototype)

function Animal(name){
    this.name = name
}

Animal.prototype.speak = function(){
    console.log(this.name+" makes a sound")
}

console.log(Animal.prototype)

let a = new Animal("cat")
a.speak()

function Dog(name){
    Animal.call(this,name)
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.speak = function(){
    console.log(this.name+" barks")
}

let d = new Dog("puppy")
d.speak()

class Animal1{
    constructor(name){
        this.name = name
    }
    speak(){
       console.log(this.name+" makes a sound") 
    }
}

class Dog1 extends Animal1{
    constructor(name,type){
        super(name)
        this.type = type
    }
    getData(){
        console.log("the name and type are: "+this.name+" "+this.type)
    }
}

let an = new Animal1("cat")
an.speak()
let d1 = new Dog1("puppy","type")
d1.speak()
d1.getData()


let str = JSON.stringify(person)
console.log(str)

let obj4 = JSON.parse(str)
console.log(obj4)