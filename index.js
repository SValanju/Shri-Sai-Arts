(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    });


    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });

})();

function toggleMenu() {
    var btnMenu = $("#menuBtn");
    btnMenu.click();
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const scrollThreshold = 100;

    // Debounce function to limit how often a function can be executed
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    // Toggle visibility of the "Scroll to Top" button based on scroll position
    const toggleScrollToTopBtn = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const isVisible = scrollY > scrollThreshold;
        scrollToTopBtn.style.display = isVisible ? "block" : "none";
    };

    // Smoothly scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Debounce the scroll event handler to improve performance
    const handleScroll = debounce(toggleScrollToTopBtn, 100);

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    scrollToTopBtn.addEventListener("click", scrollToTop);

});

$(function () {
    setTimeout(function () {
        $('#alertModal').modal('show');

        const $timer = $("#alertModal .timer");
        const $closeBtn = $("#alertModal .btn");
        let timerCount = parseInt($timer.text());

        const countdown = setInterval(function () {
            timerCount--;
            $timer.text(timerCount);

            if (timerCount <= 0) {
                clearInterval(countdown);
                $closeBtn.removeClass("disabled");
                $closeBtn.text("Close");
            }
        }, 1000);
        
    }, 2000);
});