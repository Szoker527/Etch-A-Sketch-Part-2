const container = document.querySelector(".grid-container");
const modal = document.getElementById("myModal");
const gridBtn = document.getElementById("grid-button");
const gridReset = document.querySelector(".grid-reset");
const gridRandom = document.querySelector(".grid-random");
const span = document.getElementsByClassName("close")[0];
const gridSubmit = document.getElementById("grid-submit");
const numberInput = document.getElementById("input-number");
const form = document.forms.gridForm
let containerChild = container.childNodes;
const colorInput = document.getElementById("color");
let inputValue = 16;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);

    }

}

function gridDraw(gridAmount) {
    containerChild = container.childNodes;
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

function randomColor() {
    containerChild.forEach( function(div) {
            div.addEventListener("mouseover", (event) => {
                event.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            })
        })

}

function gridColor(nodelist, color) {
    if (color == "random") {
        randomColor()
    }
    else {
        nodelist.forEach( function(div) {
            div.addEventListener("mouseover", (event) => {
                event.target.style.background = `${color}`;
            })
        })
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

gridSubmit.addEventListener("click", function() {
    inputValue = numberInput.value;
        if (numberInput.value < 101 && numberInput.value > 0) {
            modal.style.display = "none";
            removeAllChildNodes(container);
            gridDraw(inputValue);
            gridColor(containerChild, setBg = "black"); 
            colorInput.value = "#000000"
        }
        else {
            console.log("ERROR")
        }
})

gridReset.addEventListener("click", function() {
    removeAllChildNodes(container);
    gridDraw(inputValue);
    gridColor(containerChild, "black"); 
    colorInput.value = "#000000"
})


gridRandom.addEventListener("click", randomColor)

colorInput.addEventListener("change", function() {
    gridColor(containerChild, this.value)
})


gridDraw(inputValue);
gridColor(containerChild, "black");  