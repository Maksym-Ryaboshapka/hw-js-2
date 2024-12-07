const slider = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

slider.addEventListener(
  "input",
  _.debounce((e) => {
    console.log(img.style.width);

    img.style.width = `${slider.value}px`;
    img.style.height = `${slider.value}px`;
  }, 500)
);

const overlay = document.querySelector("#overlay");
const box = document.querySelector("#box");

overlay.addEventListener("mousemove", _.throttle((e) => {
  const rect = overlay.getBoundingClientRect();

  // Координати відносно overlay

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Ліва та верхня межа box

  let left = x - box.offsetWidth / 2;
  let top = y - box.offsetHeight / 2;

  // Перевірка чи вилазить box за межі overlay

  if (left < 0) left = 0;
  if (top < 0) top = 0;
  if (left + box.offsetWidth > rect.width) left = rect.width - box.offsetWidth - 4;
  if (top + box.offsetHeight > rect.height) top = rect.height - box.offsetHeight - 4;

  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
}, 30));