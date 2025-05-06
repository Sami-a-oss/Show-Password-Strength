const input = document.querySelector("input");
const para = document.querySelector("p");
const span = document.querySelector("span");


input.addEventListener("input", () => {
  if(input.value.length < 4) {
    para.style.display = "block";
    span.innerText = "week";
  }
  else if(input.value.length > 4 && input.value.length < 8) {
    para.style.display = 'block';
    span.innerText = 'mediam';
  }
  else if (input.value.length > 8) {
    para.style.display = 'block';
    span.innerText = 'strong';
  }
});
