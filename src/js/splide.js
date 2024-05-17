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
