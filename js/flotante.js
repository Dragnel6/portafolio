
let menuIcon = document.querySelector('#icon');
let navegacion = document.querySelector('.menu');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navegacion.classList.toggle('active');
}

/*aaaaaaaaaaaaaaaaaaaaa*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }); 
        }
    });
    //HEADER
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*remocer togle*/
    menuIcon.classList.remove('bx-x');
    navegacion.classList.remove('active');
}


