let navBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
    cardItem.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    navBar.classList.remove("active");
    cardItem.classList.remove("active");
}

let cardItem = document.querySelector(".card-items-container");

document.querySelector("#card-btn").onclick = () =>{
    cardItem.classList.toggle("active");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
}

window.onscroll = () => {
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    cardItem.classList.remove("active");
}