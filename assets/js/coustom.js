

 const hambucer = document.querySelector(".hambarger")
const navber =  document.querySelector(".navber")
const searchicon = document.querySelector(".searchicon")
const search = document.querySelector(".search")
const renovnodil = document.querySelector(".renovnodil")

const toggolNav = ()=>{
    navber.classList.toggle("active")
    search.classList.remove("act")
}

const toggolSearch = ()=>{
    search.classList.toggle("act")
    navber.classList.remove("active")
}

const remodeNav = ()=>{
    navber.classList.remove("active")
}


renovnodil.addEventListener("click",()=> remodeNav())
hambucer.addEventListener("click",()=> toggolNav())
searchicon.addEventListener("click",()=> toggolSearch())


