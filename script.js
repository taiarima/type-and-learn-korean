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

let currentWord; // deconstructed current word
let charCounter = 0;

// I am just testing functionality for now
function loadVocabList(listIndex) {
  const randomizedList = shuffleArray(
    basicVocabCategories.items[listIndex].items
  );
  const firstItem = randomizedList[0].korean;
  prompt.textContent = firstItem;
  currentWord = Hangul.disassemble(firstItem);
  document
    .querySelector(`.${currentWord[charCounter]}`)
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

// Keyboard Switch
const switchOn = document.getElementById("switch-on");
const switchOff = document.getElementById("switch-off");

switchOn.addEventListener("change", function () {
  if (this.checked) {
    keyboardContainer.parentElement.classList.remove("hidden");
  }
});

switchOff.addEventListener("change", function () {
  if (this.checked) {
    keyboardContainer.parentElement.classList.add("hidden");
  }
});

// Event listener for lighting up keys
document.addEventListener("compositionupdate", function (event) {
  console.log("event.data = ", event.data);
  const syllable = Hangul.disassemble(String(event.data));
  console.log(syllable.length);
  console.log("sllyable[0] = ", syllable[syllable.length - 1]);
  const key = syllable[syllable.length - 1];
  const targetElement = document.querySelector(`.key.${key}`);

  if (targetElement) {
    // Remove previous animation class if any
    const previousKey = document.querySelector(".key.lightup");
    if (previousKey) {
      previousKey.classList.remove("lightup");
    }

    // Add animation class to the target key
    targetElement.classList.add("lightup");
    targetElement.classList.remove("activated-key");
    document
      .querySelector(`.${currentWord[++charCounter]}`)
      .classList.add("activated-key");

    // Reset the animation after 1 second
    setTimeout(() => {
      targetElement.classList.remove("lightup");
    }, 500);
  }
});


// Plan
// Start a timer only when the user starts typing. Stop it when they get hit enter.
// As they type, each decomposed hangeul string should have spaces removed, and then
// the length of the characters for each exercise added on to a counter.
// At the end of the exercise, I will calculate characters per minute by simply dividing the time
// in minutes by the total of the counter. 

// I will have one modal window, which will be injected with the correct HTML depending on the exercise
// There will be options: Show Korean, show English, Show fill in blank, show keyboard, calculate typing speed
// How many reps to do. <-- that can be an option for certain exercises