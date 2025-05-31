const year = document.querySelector("#currentyear");

const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = document.lastModified;

const navigation = document.querySelector("nav");
const hamButton = document.querySelector("#menu");

hamButton.addEventListener("click", function(){
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
});

window.addEventListener("resize", function(){
    if (window.innerWidth >= 600) {
        navigation.classList.remove("show");
        hamButton.classList.remove("show");
    }
});