function getYearCopyright() {
    const currentYear = new Date().getFullYear();
    $('#copyright').html(`© Copyright ${currentYear} Remodelaciones Agüero`);
}

function fadeNavbar() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#myNavbar').addClass('scrolled'); // Muestra la barra de navegación

            // $('#myNavbar').css('background-color', 'black'); // Muestra la barra de navegación
        } else {
            $('#myNavbar').removeClass('scrolled'); // Muestra la barra de navegación


            // $('#myNavbar').css('background-color', 'transparent'); // Oculta la barra de navegación
        }
    });
}

$(document).ready(function () {
    //YEARCOPYRIGHT
    getYearCopyright();

    fadeNavbar();

    $("#title").fadeIn(3000); // Adjust the duration (1000 milliseconds) as needed
    $("#slogan").fadeIn(4000); // Adjust the duration (1000 milliseconds) as needed
});