document.addEventListener("DOMContentLoaded", function() {
    const footerCopyright = document.getElementsByClassName("footer__copyright")[0];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const creator = 'Helga';
    footerCopyright.innerHTML = `© ${currentYear}. ${creator}`;
});
