/* Add your Application JavaScript */

window.addEventListener("load", function() {
    const flashes = document.querySelectorAll('.flashes li');
    flashes.forEach(function(flash) {
        setTimeout(function() {
            flash.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            flash.style.opacity = "0";
            flash.style.transform = "translateY(-10px)"; 
            setTimeout(function() {
                flash.remove();
            }, 500); 
        }, 4000); 
    });
});

