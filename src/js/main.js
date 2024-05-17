import { menu } from "./menu.js"
import { intro } from "./intro.js"
import { work } from "./work.js"
import { link } from "./link.js"
import { smooth } from "./smooth.js"
import { splide } from "./splide.js"
import { view } from "./view.js"



window.addEventListener('load', function () {
    smooth()
    link()
    menu()
    intro()
    work()

    splide()
    view()
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
  const imgs = document.querySelectorAll(".draggable");

  imgs.forEach(function(img) {
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;
    let isDragging = false;

    function startDrag(e) {
      e.preventDefault();

      startX = e.clientX;
      startY = e.clientY;

      startLeft = img.offsetLeft;
      startTop = img.offsetTop;

      isDragging = true;

      document.addEventListener("mousemove", moveImage);
      document.addEventListener("mouseup", stopDrag);
    }

    function moveImage(e) {
      if (!isDragging) return;

      img.style.left = startLeft + e.clientX - startX + 'px';
      img.style.top = startTop + e.clientY - startY + 'px';
    }

    function stopDrag() {
      if (!isDragging) return;

      isDragging = false;

      // 드래그 종료 후 이미지가 아래로 이동하는 애니메이션 적용
      img.style.transition = 'top 0.5s ease-out, bottom 0.5s ease-out';
      img.style.top = window.innerHeight - img.offsetHeight + 'px';
      img.style.bottom = 0;

      // 이미지가 화면 밖으로 나가지 않도록 다시 위치 조정
      if (parseInt(img.style.bottom) < 0) {
        img.style.bottom = '0';
      }

      // 이미지에 다시 드래그 이벤트 리스너 추가
      img.addEventListener("mousedown", startDrag);

      // 이벤트 리스너 제거
      document.removeEventListener("mousemove", moveImage);
      document.removeEventListener("mouseup", stopDrag);
    }

    // 이미지에 초기 드래그 이벤트 리스너 추가
    img.addEventListener("mousedown", startDrag);
  });
}
