import { menu } from "./menu.js"
import { intro } from "./intro.js"
import { work } from "./work.js"
import { graphics } from "./graphics.js"
import { link } from "./link.js"
import { smooth } from "./smooth.js"
import { splide } from "./splide.js"



window.addEventListener('load', function () {
    smooth()
    link()
    menu()
    intro()
    work()
    graphics()
    splide()

})


document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 4; // document의 x좌표값
    let mouseY = e.pageY + 4; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  })


//   --------------------------

 window.onload = function () {
      const imgObj = document.getElementById("imgObj");
      let startX = 0, startY = 0, offsetX = 0, offsetY = 0;

      imgObj.addEventListener("mousedown", function (e) {
        // 드래그시 마우스 클릭 동작 방지
        e.preventDefault();

        // 마우스 현재 좌표
        startX = e.clientX;
        startY = e.clientY;

        // 이동중인 마우스의 좌표값 업데이트
        offsetX = parseInt(imgObj.style.left) - startX;
        offsetY = parseInt(imgObj.style.top) - startY;

        // 이동중이거나 마우스 드래그 상태가 아닐때의 이벤트
        document.addEventListener("mousemove", startMove);
        document.addEventListener("mouseup", stopMove);
      });

      function startMove(e) {
        // 이미지 드래그시 마우스 위치의 좌표로 이동
        imgObj.style.left = e.clientX + offsetX + 'px';
        imgObj.style.top = e.clientY + offsetY + 'px';
      }

      function stopMove() {
        // 드래그 상태가 아니면 모든 이벤트 제거
        document.removeEventListener("mousemove", startMove);
        document.removeEventListener("mouseup", stopMove);
      }
    }
