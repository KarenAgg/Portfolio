document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  //Scrolltrigger text animation

  let revealContainers = document.querySelectorAll('.reveal-text');

  revealContainers.forEach(container => {
    gsap.set(container, { opacity: 1 });

    gsap.from(container, {
      scrollTrigger: {
        trigger: container,
        start: 'top 95%',
        //markers: true,
        toggleActions: 'play none none none',
      },
      y: 120,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  });

  ScrollTrigger.refresh();

  //CARDS

  gsap.from('.card', {
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 80%',
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  });
});

// LIST ITENS

gsap.set('.list-item', { opacity: 1, y: 0 });

gsap.from('.list-item', {
  scrollTrigger: {
    trigger: '.journey-content',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.6,
  ease: 'power2.out',
});

//images

document.querySelectorAll('.project-img').forEach(container => {
  let img = container.querySelector('img');

  // 🎬 SCROLL ANIMATION
  gsap.fromTo(
    img,
    { scale: 1.2 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      duration: 1.2,
      ease: 'power3.out',
    },
  );

  // 🖱️ HOVER ENTER
  container.addEventListener('mouseenter', () => {
    gsap.to(img, {
      scale: 1.06,
      duration: 0.6,
      ease: 'power2.out',
    });
  });

  // 🖱️ HOVER LEAVE
  container.addEventListener('mouseleave', () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
});
