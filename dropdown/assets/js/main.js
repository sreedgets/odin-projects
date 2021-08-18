const getDropdown = document.querySelectorAll('.dropdown-toggle');

//iterate through the nodelist
getDropdown.forEach(el => {
    //add event listener that toggles the 'dropdown-active' class on the current item of the nodelist's next sibling element.
    el.addEventListener('click', (event) => {
        event.target.nextElementSibling.classList.toggle('dropdown-active');
    })
});

/*
This code lets me one block of code to handle multiple dropdown menus on a page. It doees require that the dropdown content to be revealed is directly next to the element with '.dropdown-toggle'
*/