const container = document.querySelector(".grid-container");
const smallDivs =  document.querySelectorAll(".grid-small");
const modal = document.getElementById("myModal");
const gridBtn = document.getElementById("grid-button");
const span = document.getElementsByClassName("close")[0];
const gridSubmit = document.getElementById("grid-submit");
const form = document.forms.gridForm
let inputValue;

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

    smallDivs.forEach( function(div) {
        div.addEventListener("mouseover", (event) => {
            event.target.style.background = "orange";
        })
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
        inputValue = form.elements.input_value.value;
        console.log(inputValue)
        modal.style.display = "none";
    })
    