// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
    console.log("Can Savcı")
}
// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", function () {
    console.log("Best Way!");
});
// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
});