// Show Image 
const show = document.querySelector('.container');
const mainImg = document.querySelector('.img-main');


show.addEventListener('click', function (e) {
    if (e.target.className == 'img-show-click') {
        mainImg.src = e.target.src;
    }
});

// Scrorll aactive 
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar-list a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.navbar-list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);