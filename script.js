const container = document.querySelector(".grid-container");
const containerChild = container.childNodes;
const modal = document.getElementById("myModal");
const gridBtn = document.getElementById("grid-button");
const span = document.getElementsByClassName("close")[0];
const gridSubmit = document.getElementById("grid-submit");
const form = document.forms.gridForm
let inputValue = 16;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);

    }

}

function gridDraw(gridAmount) {

    for (i = 0; i < gridAmount; i++) {
        const divBig = document.createElement("div");
        container.appendChild(divBig);
        divBig.classList.add("grid-big");
    
        for (x = 0; x < gridAmount; x++) {
            const divSmall = document.createElement("div");
            divBig.appendChild(divSmall);
            divSmall.classList.add("grid-small");

        }

}
}

    gridBtn.onclick = function() {
        modal.style.display = "flex";
        modal.classList.add("modal-flex");
      }

    span.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

function colorGrid(nodelist) {
    nodelist.forEach( function(div) {
        div.addEventListener("mouseover", (event) => {
            event.target.style.background = "orange";
        })
    })
}

    gridSubmit.addEventListener("click", function() {
        inputValue = form.elements.input_value.value;
        console.log(inputValue)
        modal.style.display = "none";
        removeAllChildNodes(container);

        gridDraw(inputValue);

        const newContainerChild = container.childNodes;

        colorGrid(newContainerChild);  
    })

    gridDraw(inputValue);
    colorGrid(containerChild);   