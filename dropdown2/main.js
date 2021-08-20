const dropdownMenu = (() => {
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
    let timer = setTimeout(nextSlide, 5000);
    let slideIndex = 0;

    //add event listeners to arrows
    const getPrev = document.querySelector('.prev-arrow');
    getPrev.addEventListener('click', prevSlide);

    const getNext = document.querySelector('.next-arrow');
    getNext.addEventListener('click', nextSlide);

    const getDots = document.getElementsByClassName('dot');
    let dotsArr = Array.from(getDots); //convert getDots htmlcollection to array

    dotsArr.forEach(dot => {
        dot.addEventListener('click', () => {
            let index = dotsArr.indexOf(dot);
            pickSlide(index);
        });
    });

    //slideshow control logic
    function prevSlide() {
        slideIndex += -1;
        showSlide(slideIndex);
    }

    function nextSlide() {
        slideIndex += 1;
        showSlide(slideIndex);
    }

    function pickSlide(i) {
        slideIndex = i;
        showSlide(slideIndex);
    }

    function showSlide(i) {
        clearTimeout(timer);
        //collect slides into a nodelist
        const getSlides = document.querySelectorAll('.slide');

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

        timer = setTimeout(nextSlide, 5000);
    }

    function fillDot(i) {
        const getDots = document.querySelectorAll('.dot');

        getDots.forEach(dot => {
            dot.classList.remove('active-dot');
        });

        getDots[i].classList.add('active-dot');
    }
})();