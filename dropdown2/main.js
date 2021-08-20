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



const slideShow = (() => {
    let slideIndex = 0;
    //add event listeners to arrows
    const getPrev = document.querySelector('.prev-arrow');
    const getNext = document.querySelector('.next-arrow');
    const getDots = document.getElementsByClassName('dot');

    getPrev.addEventListener('click', prevSlide);
    getNext.addEventListener('click', nextSlide);

    //convert getDots htmlcollection to array
    let dotsArr = Array.from(getDots);

    dotsArr.forEach(dot => {
        dot.addEventListener('click', () => {
            let index = dotsArr.indexOf(dot);
            console.log(index);
        });
    });

    //slideshow control logic
    function prevSlide() {
        showSlide(-1);
    }

    function nextSlide() {
        showSlide(1);
    }

    function showSlide(i) {
        //collect slides into a nodelist
        const getSlides = document.querySelectorAll('.slide');
        slideIndex = slideIndex += i;

        //check if we're moving to a slide that doesnt exist
        if (slideIndex === getSlides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = getSlides.length - 1;
        }

        getSlides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

        getSlides[slideIndex].classList.add('active-slide')

        fillDot(slideIndex);
    }

    function fillDot(i) {
        const getDots = document.querySelectorAll('.dot');

        getDots.forEach(dot => {
            dot.classList.remove('active-dot');
        });

        getDots[i].classList.add('active-dot');
    }
})();