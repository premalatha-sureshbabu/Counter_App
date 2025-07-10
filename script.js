const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

const maxChars = 100; 
textarea.addEventListener("input", function() {
  const charCount = textarea.value.length;
  counter.textContent = "Characters: " + charCount;
  if (charCount > maxChars) {
    counter.style.color = "red";
    counter.textContent += " ❗️ Limit exceeded!";
  } else {
    counter.style.color = "black";
  }
});
