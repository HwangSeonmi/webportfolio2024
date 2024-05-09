import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function about() {
    gsap.utils.toArray('.img_box').forEach(function (imgBox) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: '50% 100%',
                toggleClass: { 'targets': imgBox, className: 'active' },
                scrub: 1,
                
            }   
        })
        .from(imgBox, { 
            opacity: 0, 
            y: 100, 
            scale: 0.8, 
            duration: 1 
        });
    })
}
