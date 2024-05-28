const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("experience");
const col_left = document.querySelector(".col-left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '200vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    animation: timeln,
    trigger: section_1,
    start: 'top top',
    end: 'bottom center',
    scrub: true
});
