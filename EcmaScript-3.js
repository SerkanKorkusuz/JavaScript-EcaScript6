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
#to be continued...
