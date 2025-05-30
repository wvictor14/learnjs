const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p1 = document.createElement('p');
p1.classList.add('content');
p1.textContent = "Hey, I'm red!";
p1.style.color = 'red';
container.appendChild(p1);

const h3 = document.createElement('h3');
h3.classList.add('content');
h3.textContent = "Hey, I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);




const div2 = document.createElement('div');
div2.setAttribute("style", "border: black solid; background-color: pink;");

const h1inner = document.createElement('h1');
h1inner.textContent = "I'm in a div!";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

div2.appendChild(h1inner);
div2.appendChild(p2);
container.appendChild(div2);

