const CtBox = document.getElementById("ContactBox");
const CtBtn = document.getElementById("OpenBoxContact");
const CtXBtn = document.getElementById("CloseBoxContact");

CtBtn.addEventListener('click',() => {
    CtBox.classList.add('Box-Active')
})

CtXBtn.addEventListener('click',() => {
    CtBox.classList.remove('Box-Active')
})