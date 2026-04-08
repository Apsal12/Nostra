var para = document.querySelector(".container1 p");

function removeElement() {
    para.parentNode.remove();
}

para.addEventListener("click", removeElement);