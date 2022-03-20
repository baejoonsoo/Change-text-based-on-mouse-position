const wrapper = document.querySelector(".code_box");
const firstText = document.querySelector(".first_name .text_name");
const secondText = document.querySelector(".second_name .text_name");
const frame = document.querySelector(".frame");

let onMouseMove = ({ clientX }) => {
  frame.style.width = innerWidth / 2 - 15 + "px";
  frame.style.height = innerHeight - 30 + "px";

  const x = clientX - innerWidth / 2;

  const firstText = ".first_name .text_name";
  const secondText = ".second_name .text_names";

  TweenLite.to(`${firstText}, ${secondText}`, 1, {
    x: x,
    ease: Sine.easeOut,
  });
};

wrapper.addEventListener("mousemove", onMouseMove);
