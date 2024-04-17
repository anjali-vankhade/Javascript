let div = document.querySelector(".practiceQS");
let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna college students";
console.dir(div);
console.dir(h2);

let boxes = document.querySelectorAll(".boxDiv");
// console.dir(boxes);
let index = 1;
for(box of boxes){
    box.innerText = `Unique value of box green is ${index}`;
    index++
    console.log(box.innerText)
}

// boxes[0].innerText = "Unique value of box is 1";
// boxes[1].innerText = "Unique value of box is 2";
// boxes[2].innerText = "Unique value of box is 3";

// INSERT ELEMENTS ----------------
// creating div by using js ------------
let newDiv = document.createElement('div'); // div created
newDiv.setAttribute('class', 'div_insert'); // add className 
document.querySelector(".boxes").after(newDiv); // append div
let newHeading = document.createElement("h2"); // h2 tag created
newHeading.innerHTML = "DOM PART 2 - INSERT ELEMENTS"
let body = document.querySelector('body');
newDiv.append(newHeading); // append h2 inside div

// create list using js
let ul = document.createElement('ul');
document.querySelector(".div_insert").appendChild(ul); // append div
// li.appendChild(document.createTextNode('Four'));
for(let i=0; i<=4; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('class', "li_"+i);
    li.innerHTML = `list ${i}`;
}

// practice question ----------
let newDiv2 = document.createElement('div'); // div created
newDiv2.setAttribute('class', 'div2_insert'); // add className 
document.querySelector(".div_insert").after(newDiv2); // append div
let newHeading1 = document.createElement("h2"); // h2 tag created
newHeading1.innerHTML = "DOM PART 2 - PRACTICE QUESTIONS"
newDiv2.append(newHeading1); // append h2 inside div

let btn = document.createElement('button');
btn.innerHTML = "CLICK ME!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.fontSize = "15px";
btn.style.fontWeight = "500";
btn.style.padding = "10px";
btn.style.border = "0px";
newDiv2.appendChild(btn);
// body.prepend(btn);