const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// cloing menu when window is resized to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

gsap.registerPlugin(ScrollTrigger);

// initial page load animations
const heroAnimation = () => {
    const tl = gsap.timeline();

    tl.from('.logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.nav-links .nav-link', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.info h1', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    }, '-=0.5');
};

// interactive section animations
const interactiveAnimation = () => {
    gsap.from('.image-section', {
        scrollTrigger: {
            trigger: '.overlap-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.text-section', {
        scrollTrigger: {
            trigger: '.overlap-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });
};

// grid items stagger animation
const gridAnimation = () => {
    gsap.from('.grid-item', {
        scrollTrigger: {
            trigger: '.grid-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: {
            amount: 1,
            grid: 'auto',
            from: 'start'
        },
        ease: 'power3.out'
    });

    gsap.from('.section-heading', {
        scrollTrigger: {
            trigger: '.grid-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.cta-button', {
        scrollTrigger: {
            trigger: '.grid-section',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
};

// footer animations
const footerAnimation = () => {
    gsap.from('footer .logo', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'bottom top',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('footer .nav-link', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    });

    gsap.from('.social-icons a', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });
};

// mobile menu animation
// const mobileMenuAnimation = () => {
//     const menuButton = document.querySelector('.nav-toggle');
//     const navLinks = document.querySelector('.nav-links');
//     let isOpen = false;

//     menuButton.addEventListener('click', () => {
//         if (!isOpen) {
//             gsap.to(navLinks, {
//                 x: '0%',
//                 duration: 0.6,
//                 ease: 'power3.out'
//             });
//             gsap.from('.nav-links .nav-link', {
//                 x: 50, 
//                 opacity: 0,
//                 duration: 0.4,
//                 stagger: 0.1,
//                 ease: 'power3.out'
//             });
//         } else {
//             gsap.to(navLinks, {
//                 x: '100%',
//                 duration: 0.6,
//                 ease: 'power3.in'
//             });
//         }
//         isOpen = !isOpen;
//     });
// };


// initializing all animations
document.addEventListener('DOMContentLoaded', () => {
    heroAnimation();
    interactiveAnimation();
    gridAnimation();
    footerAnimation();
    mobileMenuAnimation();
});

// adding hover animations for grid items
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.color-overlay'), {
        // opacity: 0.3,
        // duration: 0.3
        });
        gsap.to(item.querySelector('.text-overlay h3'), {
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        // gsap.to(item.querySelector('.color-overlay'), {
        // opacity: 0.6,
        // duration: 0.3
        // });
        gsap.to(item.querySelector('.text-overlay h3'), {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
        });
    });
});

console.log(typeof gsap); // Should return 'function'
