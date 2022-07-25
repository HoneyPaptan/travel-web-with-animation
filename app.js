const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // Check for next slide
  if(current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // Check for prev slide
  if(current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);

  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);

  }

});

// Auto slide
if(auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}








//animation

TweenMax.from(".logo h2", 2, {
    y:-20,
    opacity:0,
    ease: Expo.easeInOut
    
})
TweenMax.to(".logo h2", 2, {
    y:0,
    opacity:1,
    ease: Expo.easeInOut

    
})

TweenMax.staggerFrom(".menu ul li", 2, {
    y:-20,
    opacity:0,
    ease: Expo.easeInOut
}, 0.20);


TweenMax.from(".slider", 2, {
    delay:1,
    
    scale: 0,
    opacity:0,
    ease: Expo.easeInOut
    
})
TweenMax.to(".slider", 2, {
    delay:1,
    
    scale: 1,
    opacity:1,
    ease: Expo.easeInOut

    
})



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        ease: Expo.easeInOut,
        start: "center center",
        stagger: 0.50
        

    }
})

tl.from(".text", { x:-400, opacity: 0, duration: 1.2 })
tl.from(".image", { x:-400, opacity: 0, duration: 1.2 } , "-=1");





let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        ease: Expo.easeInOut,
        start: "top center"
        

    }
})



tl1.from(".heading", { x:-400, opacity: 1, duration: 1.5 });
tl1.from(".cardholder", { x: -400, opacity: 0, duration: 1.5, stagger: 0.20}, "-=1")


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".book",
        ease: Expo.easeInOut,
        start: "top bottom"
        

    }
})

tl2.from(".heading", { x:-400, opacity: 0, duration: 1.5});
tl2.from(".buttons-1 button", { x:-400, opacity: 0, duration: 1.5, stagger: 0.20}, "-=1")

