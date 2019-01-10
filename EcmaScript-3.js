const last_javascript_bender = "serkan korkusuz";

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    jump(){
        console.log("jump");
    }
throw(){
        console.log("throw");
    }
    getName(){
        return this.name;
    }
}

class Employee extends Person{
    constructor(name, age, years){
        super(name, age)
        this.years = years;
    }
    quit(){
        console.log("I quite my job.");
        this.years = 0;
    }
    throw(){
        console.log("I throw.");
        super.throw();
    }
    getName(){
        return super.getName() + "!";
    }
}

const friend = new Employee("Bob", 20, 7);
friend
friend.jump();
friend.quit();
friend;
friend.throw();
const name = friend.getName();
name;

const keys = Object.keys({a : 1});
const values = Object.values({a : 1});
keys;
values;

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static setName(person, name){
        person.name = name;
    }
}

const person = new Person2("Bob", 24);
Person2.setName(person, "Michael");
person;

class Person3{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
        console.log("we are here");
    }
    set name(name){
        this._name = name
    } 
}
const person3 = new Person3("Dylan", 27);
const name3 = person3.name;
name3;
person3.name = "Alex";
person3;

var mylist = [1, 2, 3, 4]
const a = mylist[0];
const b = mylist[1];
const c = mylist[2];
const d = mylist[3];
a;
b;
c;
d;

const [x, y, z, q, t] = mylist;
x;
y;
z;
q;
t;

const [, , r, ] = mylist;
r;

let [e, f, g, h] = mylist;
[g, h] = [e, f];
e;
f;
g;
h

function getConfig(){
    return [
        true,
        99,
        101,
        33,
        4
    ];
}

const [isHigh, numb] = getConfig();
const config = getConfig();
isHigh;
numb;
config;

#to be continued...
