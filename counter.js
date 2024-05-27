// function startLouder(){
//     let counterElement = document.querySelector(".counter");
//     let currentValue = 0;

//     function updateCounter(){
//         if(currentValue === 100){
//             return;
//         }

//         currentValue += Math.floor(Math.random() * 10) + 1;

//         if(currentValue > 100){
//             currentValue = 100;
//         }

//         counterElement.textContent = currentValue;

//         let delay = Math.floor(Math.random() * 50) + 50;
//         setTimeout(updateCounter, delay);
//     }
//     updateCounter();
// }
// startLouder();

// gsap.to(".counter", 0.25, {
//     delay: 2,
//     opacity: 0,
// });

gsap.to(".bar", 1.5, {
    delay: 0.1,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: function() {
        document.querySelector('.overlay').style.display = 'none';
    }
});