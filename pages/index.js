const footerCopyright = document.getElementByClassName("footer__copyright");
const currentDate = new Date();
const currentYear = currentDate.getFullYear()
const creator = 'Helga';
footerCopyright.textContent = `© ${currentYear}. ${creator}`;
