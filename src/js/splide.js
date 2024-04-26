import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {
    new Splide('#splide1', {
        type: "loop",
        drag: true,
        autoWidth: true,
        pagination: false,
        focus: 'center',
        arrows: false,
        autoScroll: {
            speed: 1,
        },
    }).mount({ AutoScroll });
}

// new Splide('#splide2', {
//     direction: 'rtl',
//     type: "loop",
//     autoWidth: true,
//     focus: 'center',
//     gap: 30,
//     autoScroll: {
//         speed: 1.5,
//     },
// }).mount({ AutoScroll });


// new Splide('#splide3', {
//     type: "loop",
//     autoWidth: true,
//     focus: 'center',
//     gap: 30,
//     autoScroll: {
//         speed: 3,
//     },
// }).mount({ AutoScroll });

// export function splide() {
//     const ltlElems = document.querySelectorAll('.ltl')
//     const rtlElems = document.querySelectorAll('.rtl')

//     ltlElems.forEach(ltElem => {
//         const splide = new Splide(ltElem, {
//             type: "loop",
//             drag: true,
//             autoWidth: true,
//             gap: 30,
//             pagination: false,
//             arrows: false,
//             autoScroll: {
//                 speed: 1.5,
//                 pauseOnHover: true
//             }
//         })
//         splide.mount(window.splide.Extensions)
//     })

// }
