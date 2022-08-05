let container = document.querySelector(".grid-container");
const containerDivs = document.querySelectorAll(".grid-big");
const modal = document.getElementById("myModal");
const gridBtn = document.getElementById("grid-button");
const gridReset = document.querySelector(".grid-reset");
const gridRandom = document.querySelector(".grid-random");
const span = document.getElementsByClassName("close")[0];
const gridSubmit = document.getElementById("grid-submit");
const numberInput = document.getElementById("input-number");
const colorInput = document.getElementById("color");
let containerChild = containerDivs.childNodes;
let inputValue = 16;
let color = "user";
let colorChoice = "black";
let mouseMove = false
document.body.onmousedown = () => (mouseMove = true)
document.body.onmouseup = () => (mouseMove = false)


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);

    }
}

function changeColor(e) {
    if (mouseMove === true) {
        if (color === "random") {
            e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
        else if(color === "user") {
            e.target.style.background = `${colorChoice}`;;
        }
        else if(color === "normal"){
            console.log(e.target.classList.value);
            e.target.style.background = `${colorChoice}`;
        }
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
            divSmall.addEventListener("mousedown", changeColor)
            divSmall.addEventListener("mouseover", changeColor)
            containerChild = document.querySelectorAll(".grid-small")
        }
    }
}

function gridColor() { 
    console.log("Wow!")
    containerChild = document.querySelectorAll(".grid-small")
    if (color == "random") {
        randomColor()
        }
    else if(mouseMove === true) {
        containerChild.forEach( div => div.addEventListener("mouseover", logText, {capture: false}))
        }    
    }


    

gridRandom.addEventListener("click", function() {
    color = "random";
})

colorInput.addEventListener("change", function() {
    color = "user"
    colorChoice = `${this.value}`
})

gridReset.addEventListener("click", function() {
    removeAllChildNodes(container);
    gridDraw(inputValue);
    colorInput.value = "#FFFF"
    color = "normal"
    colorChoice = "black";
})

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
            colorInput.value = "#FFFF"
            color = "normal"
            colorChoice = "black";
        }
        else {
            console.log("ERROR")
        }
})

gridDraw(inputValue);
window.onmousedown = () => {
    // gridColor()
}

