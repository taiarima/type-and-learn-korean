"use strict";

// Global Variables
let currentWord; // deconstructed current word
let charCounter = 0;
let currentList;
let currentIndex = 0;

function checkAnswer() {
  if (userText.value === prompt.textContent) {
    console.log("Correct");
  } else {
    console.log("Incorrect");
  }
  userText.blur();
  nextButton.textContent = "Next--> (Click or press any key to proceed)";
  // nextButton.focus();
}

nextButton.addEventListener("click", function () {
  if (
    nextButton.textContent === "Next--> (Click or press any key to proceed)"
  ) {
    console.log(nextButton.textContent);
    currentIndex++;
    prompt.textContent = currentList[currentIndex].korean;
    nextButton.textContent = "Press enter or click to submit";
  } else {
    checkAnswer;
  }
});

// I am testing fucntionality for now, clean this up later TODO
function loadVocabList(listIndex) {
  const randomizedList = shuffleArray(
    basicVocabCategories.items[listIndex].items
  );
  currentList = randomizedList;
  const firstItem = randomizedList[0].korean;
  prompt.textContent = firstItem;
  currentWord = Hangul.disassemble(firstItem);
  console.log(`currentWord = ${currentWord}`);
  // This function should be invoked when appropriate to show the user the first key to be pressed
  // showNextKey();

  // document
  //   .querySelector(`.${currentWord[charCounter]}`)
  //   .classList.add("activated-key");

  userText.focus();
}

// Event listener for lighting up keys when pressed
document.addEventListener("compositionupdate", function (event) {
  const syllable = Hangul.disassemble(String(event.data));
  console.log(syllable);
  console.log("Syllable length = ", syllable.length);
  const key = syllable[syllable.length - 1];
  let targetElement = document.querySelector(`.key.${key}`);
  if (!targetElement) {
    console.log("This is not a valid key!");
    if (document.querySelector(`.key-upper-right.${key}`)) {
      console.log("Found an upper-right");
      targetElement = document
        .querySelector(`.key-upper-right.${key}`)
        .closest(".key");
    } else {
      return;
    }
  }

  // Fix this to also light up red when user has hit incorrect key
  if (targetElement) {
    // Remove previous animation class if any
    const previousKey = document.querySelector(".key.lightup-correct");
    if (previousKey) {
      previousKey.classList.remove("lightup-correct");
    }

    // showNextKey();

    // Add animation class to the target key
    targetElement.classList.add("lightup-correct");
    targetElement.classList.remove("activated-key");

    // Reset the animation after 1 second
    setTimeout(() => {
      targetElement.classList.remove("lightup-correct");
    }, 500);
  }
});

// This is a function to show the user the next key to press by highlighting the key aqua
// on the on-screen keyboard
function showNextKey() {
  // There need to be two arrays
  // One to track the current keys that have been pressed
  // one to check the keys that need to be pressed (currentWord)
  let userTypedSoFar = Hangul.disassemble(userText.value);
  if (userTypedSoFar.length === 0) {
    console.log(currentWord[0]);
    document.querySelector(`.${currentWord[0]}`).classList.add("activated-key");
  } else {
    // check something
    document
      .querySelector(`.${currentWord[++charCounter]}`)
      .classList.add("activated-key");
  }

  // The next key should only be activated in two instances:
  // 1. It's the first key
  // 2. Everything typed up until now is correct
  // Check this by splicing the currentWord (This should be current answer or something)
  // with the current length of userTypedSoFar
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

// Creates "bubbles", which are selectable categories of exercises
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

  // Calculate the number of rows required; this is hard-coded for basicVocabCats now, update it to take input later
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

// Function to call when clicking a nav link to close all other sections
function hideContainers() {
  const containers = document.querySelectorAll(".container");
  containers.forEach((ele) => ele.classList.add("hidden"));
}

// Event Listeners
startLearnLink.addEventListener("click", function () {
  hideContainers();
  // This will have to be changed later
  bubbleContainer.style.display = "flex";
  bubbleContainer.parentElement.classList.remove("hidden");
  createBubbles();
});

startDropdownLink.addEventListener("click", function () {
  hideContainers();
  bubbleContainer.style.display = "flex";
  bubbleContainer.parentElement.classList.remove("hidden");
  createBubbles();
});

aboutLink.addEventListener("click", function () {
  hideContainers();
  aboutContainer.parentElement.classList.remove("hidden");
  console.log(aboutContainer);
});

aboutDropdownLink.addEventListener("click", function () {
  hideContainers();
  aboutContainer.parentElement.classList.remove("hidden");
  console.log("Clicked about dropdown");
});

whyTypeLink.addEventListener("click", function () {
  hideContainers();
  whyTypeContainer.parentElement.classList.remove("hidden");
});

whyDropdownLink.addEventListener("click", function () {
  hideContainers();
  whyTypeContainer.parentElement.classList.remove("hidden");
});

helpLink.addEventListener("click", function () {
  hideContainers();
  helpContainer.parentElement.classList.remove("hidden");
});

helpDropdownLink.addEventListener("click", function () {
  hideContainers();
  helpContainer.parentElement.classList.remove("hidden");
});

logo.addEventListener("click", function () {
  hideContainers();
  homeContainer.parentElement.classList.remove("hidden");
});

userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

bubbleContainer.addEventListener("click", function (event) {
  hideContainers();
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
