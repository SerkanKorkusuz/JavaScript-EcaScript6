const last_javascript_bender = "serkan korkusuz";

var name = "John";
var age = 22;

var message = `Hello. My name is ${name}. I am ${age} years old.`
message;

var text = "Hello! My name is \n Bob. What is \n your name?";
console.log(text);

var text2 = `Hello! My name is 
    Bob.        What is
yours?`;
console.log(text2);


const activities = [
    "running",
    "swimming",
    "crossing",
    "hiking"
];

const myMess = `I like many activities and the ones I mostly spend time for doing are ${activities.join(", ")}`;
console.log(myMess);

const activities2 = activities.map(activitiy =>  `${activities.join(", ")}!`);
myMess2 = `I like many activities and the ones I mostly spend time for doing are ${activities2}`;
console.log(myMess2);
myMess3 = `I like many activities and the ones I mostly spend time for doing are ${activities}.join(", ")!`;
console.log(myMess3);

function tag(strings, ...values){
    console.log(strings);
    console.log(values);
    return "heyyy";
}

tag `Hello, I know ${name} but did not know that he was ${age} years old.`;
const word = tag `Hello, I know ${name} but did not know that he was ${age} years old.`;
console.log(word);

function tag2(strings, ...values){
    let message = "";
    strings.forEach((string, index) => {
        message += string;
        if(index < values.length){
            message += `<strong>${values[index]}</strong>`;
        }
    })
     return message;   
    };
    const word2 = tag2 `Hello, I know ${name} but did not know that he was ${age} years old.`;
    console.log(word2); 
   
function tag3(strings, ...values){
        console.log(strings);
        console.log(strings.raw[0]);
    }

    tag3`Hello, I know him \n but did not know that he was \n 22 years old.`;

var firstname = "bob";
    var lastname = "james";
    var age = 22;

    var person = {
        firstname,
        lastname,
        age
    };
    person;

var human = {
     firstname : "jessy",
      age : 20,
      haveAbirthday : function(){
       return this.age++;
     }
}
human.haveAbirthday();
human;

var human2 = {
    firstname : "jessy",
    age : 24,
    birthday(){
        this.age++;
    }
}
human2.birthday();
human2;

/*import {add} from './add';
import {add as myAddFunction} from '/add';

const bri = add(33, 12);
const bri2 = myAddFunction(27, 35);
console.log(bri);

import myUtilLib from './add'; // this brings the  "export default{...}" which is included in add.js*/

var Personal = function(name, age){
    this.name = name;
    this.age = age;
}
var friend = new Personal("Tommy", 17);
friend;

Personal.prototype.jump = function() {
    console.log("jump");
}
friend.jump();

class Personal2 {
    constructor(name, age){
        this.name =name;
        this.age = age;
    }
    jump(){
        console.log("jump");
    }
}
var friend2 = new Personal2("Tommy", 18);
friend2;
friend2.jump()
