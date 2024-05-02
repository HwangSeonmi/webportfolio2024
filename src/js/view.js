import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function view() { 
    gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록

    gsap.utils.toArray('.view_box').forEach(function (imgBox) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: 'top 80%', // 이미지가 화면의 상단에서 80% 위치에서 애니메이션 시작
                end: 'bottom 20%', // 이미지가 화면의 하단에서 20% 위치까지 애니메이션 종료
                toggleClass: { 'targets': imgBox, className: 'active' },
                scrub: true, // ScrollTrigger에 의해 애니메이션의 속도가 변경될 수 있도록 설정
            }
        });
    });
    
}
