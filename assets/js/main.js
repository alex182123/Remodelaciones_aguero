function getYearCopyright() {
    const currentYear = new Date().getFullYear();
    const link = '<a target="_blank" href="https://github.com/alex182123?tab=repositories">Alex182123</a>';
    $('#copyright').html(`© Copyright ${currentYear} ${link}`);
}


$(document).ready(function () {
    //YEARCOPYRIGHT
    getYearCopyright();
});