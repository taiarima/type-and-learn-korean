"use strict";

prompt.textContent = countries.items[0].korean;

function checkAnswer() {
  if (userText.value === prompt.textContent) {
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
  userText.blur();
  nextButton.textContent = "Next--> (Click or press any key to proceed)";
  nextButton.focus();
}

userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

