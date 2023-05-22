getElem(".modalOpen", true).forEach((elem)=>{
  elem.addEventListener("click", function(){
    let classes = this.classList;
    if(classes.contains("loginBtn")){
      getElem(".loginModal").classList.add("open")
    }else if(classes.contains("signupBtn")){
      getElem(".signupModal").classList.add("open")
    }
  })
})

getElem(".modalClose", true).forEach((elem)=>{
  elem.addEventListener("click", function(){
    this.closest(".open").classList.remove("open")
  })
})

function getElem(selector, getAll = false, scope = document){
  if(!getAll){
    return scope.querySelector(selector);
  }else{
    return scope.querySelectorAll(selector);
  }
}
