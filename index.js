document.addEventListener('DOMContentLoaded', function () {
    // hide or show menu
    window.addEventListener('scroll', function () {
        let mewoBlock = document.getElementById('meow');
        console.log(mewoBlock.getBoundingClientRect());
        if (mewoBlock.getBoundingClientRect().y < 0) {
            const menu = document.getElementById('menu');
            menu.classList.remove('active');
        }
        if (mewoBlock.getBoundingClientRect().y === 0) {
            const menu = document.getElementById('menu');
            menu.classList.add('active');
        }
    });

    const a = document.getElementById('menu');
    a.classList.add('active');

    
});