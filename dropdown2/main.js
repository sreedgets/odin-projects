


const dropdownInit = (() => {
    //querySelectorAll returns a Nodelist (static array like object)
    const getDropdowns = document.querySelectorAll('.dropdown-toggle');

    getDropdowns.forEach(el => {
        el.addEventListener('click', togDrop );
    });

    function togDrop() {
        this.nextElementSibling.classList.toggle('visible');
    }
})();