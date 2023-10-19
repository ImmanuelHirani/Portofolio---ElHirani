const navburger = document.getElementById('navBurger')
const navCont = document.getElementById('navContainer')
const navLinks = document.getElementById('navLinks')

navburger.addEventListener('click' , ()=> {
  navburger.classList.toggle('navBurger-Active')
  navLinks.classList.toggle('navLinks-Active')
  navLinks.classList.toggle('-z-20')
  navCont.classList.toggle('navCont-Active')
})


