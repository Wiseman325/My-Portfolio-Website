document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

function adjustAnimationSpeed() {
    const animation = document.querySelector('.hero-bg-animation');
    animation.style.animationDuration = window.innerWidth < 600 ? '20s' : '15s';
}

adjustAnimationSpeed();
window.addEventListener('resize', adjustAnimationSpeed);