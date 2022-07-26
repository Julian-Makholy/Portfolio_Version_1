gsap.from('.nav-container', { duration: 1, y: '-100%', ease: 'bounce' })
gsap.from('.nav_text', { duration: 1, opacity: 0, delay: 1, stagger: .5 })

gsap.fromTo(".myimg", {opacity: 0}, {opacity: 1, duration: 1, delay: 1.5});
gsap.from('.myimg', { duration: 1, x: '-100vw', delay: 1, ease: 'power.in' })

gsap.from('.Anim-1', { duration: 1, x: '100vw', delay: 1.5,stagger: 0.9, ease: 'power1.in' })
gsap.from('.Anim-2', { duration: 1, x: '100vw', delay: 4,stagger: 0.5, ease: 'power1.in' })



gsap.fromTo(".welcome-2", {opacity: 0}, {opacity: 1, duration: 1, delay: 7});
gsap.from('.welcome-2', { duration: 1, y: '100vh', delay: 6.5, ease: 'power.in' })

gsap.fromTo(".welcome-3", {opacity: 0}, {opacity: 1, duration: 1, delay: 7});
gsap.from('.welcome-3', { duration: 1, y: '100vh', delay: 6.5, ease: 'power.in' })