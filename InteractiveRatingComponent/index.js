const mainContainer = document.querySelector(".mainContainer");
const thankContainer = document.querySelector(".thankContainer");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

/*screen change*/
submitButton.addEventListener("click",()=>{
    thankContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})
/* You selected X out 5 */
rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        rating.textContent = rate.textContent;
    })
})