const dropdownParent = document.querySelector('.dropdown-parent');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownParent.addEventListener('click', () => {
    dropdownMenu.classList.toggle('dropdown-active');
});