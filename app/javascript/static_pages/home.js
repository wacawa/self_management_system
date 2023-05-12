let loginBtn = document.querySelector(".loginBtn")
let loginModal = document.querySelector(".loginModal")

loginBtn.addEventListener("click", function(){
  loginModal.classList.add("open")
})

let closeBtn = document.querySelector(".closeBtn")

closeBtn.addEventListener("click", function(){
  loginModal.classList.remove("open")
})
