const wrapper = document.querySelector(".wrapper"),
  input = document.querySelector("input"),
  img = document.querySelector("img"),
  genBtn = document.querySelector(".wrapper button");

genBtn.addEventListener("click", () => {
  if (!input.value) return;
  genBtn.innerText = "Generating QR Code ...";
  let qr_value = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`;
  img.src = qr_value;
  img.addEventListener("load", () => {
    genBtn.innerText = "Generate QR Code";
    wrapper.classList.add("active");
  });
});

input.addEventListener("keyup", () => {
  if (!input.value);
  wrapper.classList.remove("active");
});

// https://goqr.me/api/    (api resource)
