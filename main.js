gsap.to('.title .text', {
  y: 0,
  duration: 0.1,
});

gsap.from('.html-logo', {
  ease: 'bounce.out',
  y: -500,
  duration: 2,
});
gsap.from('.shadow', {
  ease: 'bounce.out',
  duration: 2,
  css: {
    scaleX: 0,
    scaleY: 0,
  },
});

document.addEventListener('mousemove', (event) => {
  gsap.to('.cursor', {
    x: event.pageX - 20,
    y: event.pageY - 20,
  });
});

gsap.to('.return-logo', {
  css: { rotateY: 360 },
  duration: 3,
});
