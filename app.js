const wrapper = document.querySelector(".code_box");
const firstText = document.querySelector(".first_name .text_name");
const secondText = document.querySelector(".second_name .text_name");
const frame = document.querySelector(".frame");

console.log("js");

let onMouseMove = ({ clientX }) => {
  frame.style.width = innerWidth / 2 - 15 + "px";
  frame.style.height = innerHeight - 30 + "px";

  let x = ((clientX / innerWidth) * 2 - 1) * (innerWidth / 4);

  TweenLite.to(".first_name .text_name, .second_name .text_name", 1, {
    x: x,
    ease: Sine.easeOut,
  });
};

wrapper.addEventListener("mousemove", onMouseMove);
