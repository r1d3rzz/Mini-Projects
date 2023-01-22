const wrapper = document.querySelector(".wrapper");
const genBtn = document.querySelector(".wrapper button");

genBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});
