let firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);

let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[0].innerText);

console.log(firstLi.nextElementSibling.textContent);

let fourthLi = document.querySelector(".fourth");
console.log(fourthLi.textContent);
console.log(fourthLi.previousElementSibling.textContent);


