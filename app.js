const wrapper = document.querySelector(".code_box");
const firstText = document.querySelector(".first_name .text_name");
const secondText = document.querySelector(".second_name .text_name");
const frame = document.querySelector(".frame");

let onMouseMove = ({ clientX }) => {
  // 화면전체 크기에서 border 크기만큼 줄인 값을 적용한다
  frame.style.width = innerWidth / 2 - 15 + "px";
  frame.style.height = innerHeight - 30 + "px";

  const x = clientX - innerWidth / 2;

  const firstText = ".first_name .text_name";
  const secondText = ".second_name .text_name";

  TweenLite.to(`${firstText}, ${secondText}`, 1, {
    x: x,
    ease: Sine.easeOut,
  });
};

wrapper.addEventListener("mousemove", onMouseMove);
