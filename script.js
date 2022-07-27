


const container = document.querySelector(".grid-container");

function newGrid() {
    for (i = 16; i > 0; i--) {
        console.log(i);
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add(".grid");
    }
}

newGrid()