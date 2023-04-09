const btn=document.querySelector(".bersnabder");
const mobonav=document.querySelector(".mobonav");
btn.addEventListener("click",()=>{
    mobonav.classList.toggle("active");
});