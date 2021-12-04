const bgi = document.querySelector(".bgimg");
const pqi = document.querySelectorAll(".pqimg");

pqi.forEach (pqimg => pqimg.addEventListener("click", () => bgi.src = pqimg.src));
