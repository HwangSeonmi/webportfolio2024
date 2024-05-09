import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro() {
    gsap.registerPlugin(ScrollTrigger)
    const frameCount = 10
    let offsetValue = 400

     gsap.to('.sect2 .intro_text .img',{
        backgroundPosition:-(offsetValue*frameCount)+'px',
        ease:'steps('+frameCount+')',
        scrollTrigger:{
            trigger:'#intro',
            start:'top top',
            end:'+='+(frameCount*offsetValue),
            pin:true,
            scrub:true
        }
     })
}