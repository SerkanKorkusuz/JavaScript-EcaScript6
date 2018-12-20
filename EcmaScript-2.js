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
