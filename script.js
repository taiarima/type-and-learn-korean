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

// I am just testing functionality for now
function loadVocabList(listIndex) {
  const randomizedList = shuffleArray(
    basicVocabCategories.items[listIndex].items
  );
  const firstItem = randomizedList[0].korean;
  prompt.textContent = firstItem;
  const deconstFirstItem = Hangul.disassemble(firstItem);
  document
    .querySelector(`.${deconstFirstItem[0]}`)
    .classList.add("activated-key");
}

function shuffleArray(array) {
  const newArray = [...array];
  const length = newArray.length;

  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return newArray;
}

//testing dark theme button
// const toggleButton = document.getElementById("theme-toggle");
// const root = document.documentElement;

// toggleButton.addEventListener("click", () => {
//   root.classList.toggle("dark-theme");
// });

// Testing

function createBubbles() {
  const bubbleSize = 150;
  const bubblesPerRow = 2;

  // Clear existing bubbles
  bubbleContainer.innerHTML = "";

  // Create heading element
  const heading = document.createElement("h2");
  heading.textContent = basicVocabCategories.title;
  heading.classList.add("bubble-heading");
  bubbleContainer.appendChild(heading);

  // Calculate the number of rows required
  const numRows = Math.ceil(basicVocabCategories.items.length / bubblesPerRow);

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.classList.add("bubble-row");

    for (let j = 0; j < bubblesPerRow; j++) {
      const index = i * bubblesPerRow + j;

      if (index < basicVocabCategories.items.length) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = `${bubbleSize}px`;
        bubble.textContent = basicVocabCategories.items[index].title;
        row.appendChild(bubble);
      }
    }

    bubbleContainer.appendChild(row);
  }
}

// Event Listeners
startLearnLink.addEventListener("click", function () {
  bubbleContainer.style.display = "flex";
  createBubbles();
});

userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

bubbleContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("bubble")) {
    const bubbles = Array.from(
      bubbleContainer.getElementsByClassName("bubble")
    );
    const bubbleIndex = bubbles.indexOf(event.target);

    console.log("Clicked bubble index:", bubbleIndex);
    bubbleContainer.style.display = "none";
    learningContainer.parentElement.classList.remove("hidden");
    keyboardContainer.parentElement.classList.remove("hidden");
    loadVocabList(bubbleIndex);
  }
});

// Testing
const switchOn = document.getElementById("switch-on");
const switchOff = document.getElementById("switch-off");

switchOn.addEventListener("change", function () {
  if (this.checked) {
    // "On" is selected
    console.log("Switch is ON");
    keyboardContainer.parentElement.classList.remove("hidden");
  }
});

switchOff.addEventListener("change", function () {
  if (this.checked) {
    // "Off" is selected
    console.log("Switch is OFF");
    keyboardContainer.parentElement.classList.add("hidden");
  }
});
