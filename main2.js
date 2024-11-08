const main = document.querySelector(".main")
const tankYou = document.querySelector(".thanks")
const submit = document.getElementById("sub")
const result = document.getElementById("rating")
const rates = document.querySelectorAll(".one")

submit.addEventListener("click", function(){
    tankYou.classList.remove("hidden")
    main.classList.add("hidden")
})
rates.forEach((rates) => {
    rates.addEventListener("click", () => {
        result.innerHTML = rates.innerHTML
    })
})