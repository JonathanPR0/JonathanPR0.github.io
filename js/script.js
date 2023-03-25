
document.addEventListener('DOMContentLoaded', () => {

  let tl = new TimelineMax();

  tl.fromTo('.bg-loader', 1,
    { opacity: 1 },
    { opacity: 0, delay: 2.5, ease: Expo.easeInOut })

  fromTo('.bg-video', 2,
    { height: '100%', opacity: 0 },
    { height: '0%', opacity: 0, ease: Expo.easeInOut }, '-=1')

  fromTo('.container-header', 0.7,
    { y: 300, opacity: 0, },
    {
      y: 0, opacity: 1, stagger: { each: 0.15 },
      ease: "back.out(1.7)"
    }, '-=1.8')


})

