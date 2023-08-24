
    // Slideshow 1
    var slideIndex1 = 1;
    showSlides(slideIndex1, 0);
    autoSlide(0);
    function plusSlides1(n) {
        showSlides(slideIndex1 += n, 0);
    }

    function currentSlide1(n) {
        showSlides(slideIndex1 = n, 0);
    }

    // Slideshow 2
    var slideIndex2 = 1;
    showSlides(slideIndex2, 1);
    autoSlide(1);

    function plusSlides2(n) {
        showSlides(slideIndex2 += n, 1);
    }

    function currentSlide2(n) {
        showSlides(slideIndex2 = n, 1);
    }

    function showSlides(n, slideshowIndex) {
        var i;
        var slides = document.querySelectorAll(".slideshow-container")[slideshowIndex].querySelectorAll(".mySlides");
        var dots = document.querySelectorAll(".slideshow-container")[slideshowIndex].querySelectorAll(".dot");
        
        if (n > slides.length) { 
            if (slideshowIndex === 0) {
                slideIndex1 = 1;
            } else {
                slideIndex2 = 1;
            }
        }
        
        if (n < 1) { 
            if (slideshowIndex === 0) {
                slideIndex1 = slides.length;
            } else {
                slideIndex2 = slides.length;
            }
        }
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideshowIndex === 0 ? slideIndex1 - 1 : slideIndex2 - 1].style.display = "block";
        dots[slideshowIndex === 0 ? slideIndex1 - 1 : slideIndex2 - 1].className += " active";
    }
    function autoSlide(slideshowIndex) {
        setInterval(function() {
            if (slideshowIndex === 0) {
                plusSlides1(1);
            } else {
                plusSlides2(1);
            }
        }, 4000); // Change slide every 3 seconds (adjust as needed)
    }
