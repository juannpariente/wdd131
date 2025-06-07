const year = document.querySelector("#currentyear");

const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = document.lastModified;

const temp = parseFloat(document.querySelector("#temp").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

function calculateWindChill(t, w) {
    return (13.12 + 0.6215 * t - 11.37 * w ** 0.16 + 0.3965 * t * w ** 0.16).toFixed(1);
}

if (temp <= 10 && wind > 4.8) {
    document.querySelector("#windChill").textContent = `${calculateWindChill(temp, wind)} °C`;
} else{
    document.querySelector("#windChill").textContent = "N/A";
}