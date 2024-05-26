// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const a = document.querySelector("a");
console.log(a.getAttribute("href"));
const atwo = document.querySelector(".a-two");
atwo.setAttribute("href", "www.youtube.com");