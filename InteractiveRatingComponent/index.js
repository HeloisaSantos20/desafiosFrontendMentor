const mainContainer = document.querySelector(".mainContainer");
const thankContainer = document.querySelector(".thankContainer");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click",()=>{
    thankContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})