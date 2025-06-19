const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

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

const components = [
  {
    id: 1,
    name: "NVIDIA RTX 4090",
    price: 1000,
    image: "images/gpu.webp"
  },
  {
    id: 2,
    name: "Ryzen 9 7900",
    price: 600,
    image: "images/cpu.webp"
  },
  {
    id: 3,
    name: "32GB DDR5 RAM",
    price: 150,
    image: "images/ram.webp"
  },
  {
    id: 4,
    name: "Motherboard z790",
    price: 320,
    image: "images/motherboard.webp"
  }
];

const container = document.querySelector("#components")

if (container){
    createComponentCard(components);
}


function createComponentCard(components) {
    components.forEach(component => {
        const card = document.createElement("div");

        card.innerHTML = `
            <img src="${component.image}" alt="${component.name}" loading="lazy" width="200" height="150">
            <h3>${component.name}</h3>
            <p><span class="price">Price:</span> ${component.price} $</p>
            <button class="button">Add to Cart</button>`

        const button = card.querySelector(".button");
        button.addEventListener("click", () => addToCart(component.name, component.price));
        
        container.appendChild(card);
    });
}

function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to the cart`);
}