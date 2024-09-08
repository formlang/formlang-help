(function () {
    const initFunc = function() {
        const clipboard = new ClipboardJS('.btn.copy-to-clipboard');
        clipboard.on('success', function(e) {
            e.clearSelection();
        });
    };

    function initSwiper() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            lazy: true,
            zoom: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }

    function glightbox() {
        /**
         * Initiate glightbox
         */
        const glightbox = GLightbox({
            selector: '.glightbox'
        });

        /**
         * Initiate gallery lightbox 
         */
        const galleryLightbox = GLightbox({
            selector: '.gallery-lightbox'
        });
    }

    $(document).ready(function () {
        initFunc();
        glightbox();
    });
})();
