let submissions = document.querySelector("#submissions");

let numSubmissions = Number(localStorage.getItem("numberSubmissions")) || 0;

numSubmissions++;
submissions.textContent = numSubmissions;
localStorage.setItem("numberSubmissions", numSubmissions);