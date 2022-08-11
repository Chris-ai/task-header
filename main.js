const mobileMenu = document.querySelector('.mobile-menu')
const mobileBtn = document.getElementById('toggle-mobile')
const closeMobileMenu = document.getElementById('close-menu')

mobileBtn.addEventListener("click", () => {
    if (mobileMenu.style.display == '' || mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
    }
})


closeMobileMenu.addEventListener("click", () => {
    mobileMenu.style.display = 'none';
})