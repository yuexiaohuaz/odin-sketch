//create a function that will first automatically trigger, creating 16 figures. in tha tloop, every square will have an event listener placed over them.
/* 
1. Create the container (x)
2. Create a function that generates grids. 
Make the default 16 x 16
3. Add a hover effect. 
So when mouseover, add function that changes color.
4. Add button that asks for a 
popup for the number of squares per side.
5. Set user limit input as 100
*/

const container = document.querySelector("#container");
const body = document.querySelector("body");
const button = document.createElement("button");

container.style.height = "650px";
container.style.width = "650px";

button.textContent = "Click me to regenerate grid!";
button.addEventListener("click", () => {
    let size = prompt("How large will the new grid be?");
    while (size > 100 || size < 0 || isNaN(size)) {
        size = prompt("That is an invalid size! Enter a different value");
    }
    deleteGrid();
    generateGrid(size);
})
body.insertBefore(button, container);

function getRandom() {
    return Math.floor(Math.random() * 256);
}
function deleteGrid() {
    rows = document.querySelectorAll(".row");
    for (row of rows) {
        container.removeChild(row);
    }
}
 //make as many subdivs representing for rows 
function generateGrid(size = 16) {
    //generates divs and adds a class to it 
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.height = `${100 / size}%`
        container.appendChild(row);
 
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
                // box.style.backgroundColor = "rgb(255, 120, 120)";
            });
            row.appendChild(box);

        }
        
    }
}

generateGrid(12);