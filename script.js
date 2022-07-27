


const container = document.querySelector(".grid-container");

function newGrid() {
    for (i = 16; i > 0; i--) {

        const divBig = document.createElement("div");
        container.appendChild(divBig);
        divBig.classList.add("grid-big");

        for (x = 16; x > 0; x--) {
            const divSmall = document.createElement("div");
            divBig.appendChild(divSmall);
            divSmall.classList.add("grid-small");
        }

    }

}
//div.setAttribute('style', `height: ${size}px; width: ${size}px;`);   
newGrid()