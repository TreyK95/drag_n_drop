const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener('dragstart', dragstart)
fill.addEventListener('.dragend', dragend)

for(const empty of empties)
