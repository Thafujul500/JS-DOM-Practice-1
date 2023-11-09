document.getElementById("id1").innerHTML = "I  love my village."
document.getElementById("id1").innerText = "I don't love my village."
document.getElementById("id1").textContent = "I do not love my village."

document.getElementsByClassName("class1")[0].textContent = "I have a class"

document.getElementsByName("name")[0].textContent = "This is another name."

document.getElementsByTagName("h1")[3].innerText = "This is anotehr text for using tag name"
document.querySelector("h2").textContent = "i am the first queary selector"


document.querySelectorAll("h2")[4].innerText = "i am a queary selector"


{/* <p>------------ Onclick-------------</p> */}


function date(){
   document.getElementsByName("date")[0].textContent = Date();
}

{/* <p>------------ DOM Traversing -------------</p> */}


var chield = document.getElementsByClassName("Node")[0]

console.log(chield.parentNode); // to select parent

var papa = document.getElementsByClassName("papa")[0];

// first Chield
console.log(papa.firstChild); // with text
console.log(papa.firstElementChild); // without text

// last Chield

console.log(papa.lastChild); // with text
console.log(papa.lastElementChild); // without text

console.log(papa.childNodes); // to select childs
console.log(papa.children); // to select childs

// Siblings to siblings

var middle = document.querySelector(".middle-chield");

// next siblings

console.log(middle.nextElementSibling); // without text
console.log(middle.nextSibling); // with text

// previoius siblings

console.log(middle.previousSibling);  // with text
console.log(middle.previousElementSibling); // without text

// DOM Manupulaating

// createElement

var newDiv = document.createElement("div");
newDiv.innerHTML = "<p>This is a para.</p>"

document.body.appendChild(newDiv);
newDiv.id = "myId"
newDiv.className = "myClassName"
let para = document.createElement("p")
let text = document.createTextNode("I have a  text.")
para.appendChild(text)

newDiv.appendChild(para)

// Short Cut Method start

var h1 = document.createElement("h1");

h1.textContent = "I love you!";

newDiv.appendChild(h1);

// Short Cut Method end

// Long Cut Method start

var h2 = document.createElement("h2");

var h2Text = document.createTextNode("I hate you!");

h2.appendChild(h2Text);

newDiv.appendChild(h2);

// Long Cut Method end

var list = document.createElement("ul")

document.body.appendChild(list)
list.id = "list-id";
list.className = "lost-class";

var listIdentity = document.querySelector("#list-id");


newDiv.appendChild(listIdentity);

var element = document.createElement("li");
listIdentity.appendChild(element);

var element_text = document.createTextNode("I  am a list element!");

element.appendChild(element_text);


var another_list = document.createElement("li");
another_list.textContent = "<p>I love you so much!</p>";
listIdentity.appendChild(another_list);

// ---------- appentChild --------------

let menu = document.getElementById("menu");

function createMenu(name){

   let li = document.createElement("li");
   li.textContent = name;
   return li;

}
menu.appendChild(createMenu("Thafujul Islam"));
menu.appendChild(createMenu("Rahim"));
menu.appendChild(createMenu("Sagor"));

// ---------- text Contant --------------
// ---------- Document Fragment --------------


// Problem

// var language = document.querySelector("#language");
// let lang = ["Bangla","English","PHP","R","Python"];

// let frag = document.createDocumentFragment("li")

// language.forEach(language) = > {
//    let li = document.createElement("li");
//    li.textContent = language;
//    frag.appendChild(li);
// }

// menu.appendChild(frag)

// insert Before

let insert_Before = document.querySelector(".IB");
let ibtext = document.createElement("p");
ibtext.textContent = "I love you very nuch!";
insert_Before.insertBefore(ibtext,insert_Before.firstElementChild);

// Insert Adjecent HTML

// 4 kinds of position :

// 1. baforebegin
// 2. afterbegin
// 3. beforeend
// 4. afterend

var postion = document.querySelector("#postion");

postion.insertAdjacentHTML("beforebegin","<p>This is before begin</p>");
postion.insertAdjacentHTML("afterbegin","This is after beign");
postion.insertAdjacentHTML("beforeend","This is before end");
postion.insertAdjacentHTML("afterend","This is after end")

//  repplace clone remove 

// replace child

let rcr = document.querySelector("#rcr")

let rcl_li = document.createElement("li");
rcl_li.textContent = "Home";
rcr.replaceChild(rcl_li , rcr.firstElementChild);

// remove child

rcr.removeChild(rcr.firstElementChild);

//clone

let cloneNode = rcr.cloneNode(true);

document.body.appendChild(cloneNode);

btn = document.getElementById("btn")
btn1 = document.getElementById("btn1")

btn.setAttribute("class","zihad")
btn1.setAttribute("name","zihad")

// JS Manipulating

let dom_manipulating = document.querySelector("#dom_manipulating")

dom_manipulating.style.backgroundColor = "blue";
dom_manipulating.style.fontSize = "30px"

var cls = document.querySelector(".class");

cls.classList.add("my_cls")
console.log(cls.classList);
cls.classList.replace("my_cls","your_cls")
cls.classList.replace("your_cls","no_cls");


// <!-- Width and hight -->

var width_heigth = document.querySelector(".width_heigth");

let width =  width_heigth.offsetWidth;
let height =  width_heigth.offsetHeight;
console.log(width, height);

let width_without = width_heigth.clientHeight;
let height_without = width_heigth.clientWidth;
console.log(width_without, height_without);

  
// Event
let event_btn = document.querySelector("#event");
event_btn.addEventListener("click",function(){
   alert("I love you!")
})

function father(){
   alert("I have a pc")
}

// Event Handlaning

// in html => onclick;
// in js => click;

var mother = document.getElementById("mother");

mother.addEventListener("click",function(){
   alert("I have a mother!")
});

// page Load Event

// DomContentLoaded Event

// document.addEventListener("DOMContentLoaded", (e) => {
//    alert("DOM is fully loaded.")
// })

// Load Event

// addEventListener("load",(e) => {
//    alert("Contant is loaded");
// })

// BeforeUnload Event

// addEventListener("beforeunload",(e) => {
//    e.preventDefault();
//    e.returnValue = " ";

// })

// UnLoad Event


// Mouse Event

let track = document.querySelector(".track");


track.addEventListener("mousedown",(e)=>{

})

function mouseEvent(e){
   console.log(e.type);
}


track.addEventListener("mouseup", mouseEvent)

track.addEventListener("mouseenter", (e) => {
   console.log(e.type);
});

// Keybord Event 

// let message = document.querySelector("#message");

// message.addEventListener("keyup",(e) => {
//    console.log(e.type);
// })

// scroll

// window.onscroll = function() {
//    console.log("scroled");
//    alert("your window is scroled")
// }

// // window.addEventListener("scroll", function() {
// //    console.log(("scroll"));
// // })

// let scroller = 0;

// window.addEventListener("scroll", () => {
//    if(window.scrollYoffset || document.documentElement.scrollTop > scroller){
//       console.log("scroll is down.");
//    }else{
//       console.log("scroll is up.");

//    }
//    scroller = NewScroller;
// })

// focus

let message = document.getElementById("message")

message.addEventListener("focus", (e) => {
   e.target.style.backgroundColor = "red";
   e.target.style.color = "blue";
})

message.addEventListener("blur", function(e) {
   e.target.style.backgroundColor = "gold";
   e.target.style.color = "tomato"
})








































































































// append or prepent










































