import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function work(){
    gsap.registerPlugin(ScrollTrigger)
    const horSection=gsap.utils.toArray('.work_item')
    gsap.to(horSection,{
        xPercent:-110 * (horSection.length - 1),
        ease:"none",
        scrollTrigger:{
            trigger:"#work",
            start:'top 0',
            end:'+=4400',
            pin:true,
            scrub:1,
            invalidateOnRefresh:true,
            anticipatePin:1
        }
    })
    
}