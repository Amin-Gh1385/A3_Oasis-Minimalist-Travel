// 1. Granim.js Initialization 
const granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#141517', '#1e2430'],
                ['#161b26', '#101012'],
                ['#241e30', '#141517']
            ],
            transitionSpeed: 8000
        }
    }
});

// 2. Typed.js Initialization 
const typed = new Typed('#typed-text', {
    strings: ['Serenity.', 'Silence.', 'The Unknown.', 'Minimalism.'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// 3. Glide.js Initialization 
const glideConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
        1024: { perView: 2 },
        600: { perView: 1 }
    }
};
new Glide('.glide', glideConfig).mount();

// 4. AOS Initialization 
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});