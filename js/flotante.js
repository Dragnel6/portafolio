const openmodal = document.querySelector('.btnmodal');
const modal = document.querySelector('.modal');
const modalclose = document.querySelector('.cerrar-modal');

openmodal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('.modal--show');

});
modalclose.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('.modal--show');

});