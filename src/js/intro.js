import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro() {
    gsap.registerPlugin(ScrollTrigger)
    const frameCount = 10
    let offsetValue = 500

    gsap.to('.sect1 .intro_text .img', {
        backgroundPosition: -(offsetValue * frameCount) + 'px',
        ease: 'steps(' + frameCount + ')',
        scrollTrigger: {
            trigger: '#intro',
            start: 'top top',
            end: '+=' + (frameCount * offsetValue),
            pin: true,
            scrub: true
        }
    })

    const ani3 = gsap.timeline();
    // 요소들에 대한 애니메이션을 추가합니다.
    ani3.from('.ab_item.s1', { y: -90, autoAlpha: 0 });
    ani3.from('.ab_item.s2', { y: 90, autoAlpha: 0 });
    ani3.from('.ab_item.s3', { y: 180, autoAlpha: 0 });

    // ScrollTrigger를 사용하여 애니메이션을 트리거합니다.
    ScrollTrigger.create({
        animation: ani3, // 위에서 만든 애니메이션을 사용합니다.
        trigger: '.ab_wrap', // 트리거 요소를 지정합니다.
        start: 'top 70%', // 시작 지점을 지정합니다.
        end: 'bottom 80%', // 종료 지점을 지정합니다.
        scrub: true // 스크롤에 따라 애니메이션을 스크럽합니다.
    });

}
