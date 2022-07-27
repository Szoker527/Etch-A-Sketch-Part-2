


const container = document.querySelector(".grid-container");

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

const smallDivs =  document.querySelectorAll(".grid-small");

    smallDivs.forEach( function(div) {
        div.addEventListener("mouseover", (event) => {
            event.target.style.background = "orange";
        })
    })