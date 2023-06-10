"use strict";

// Global Variables
let currentWord; // deconstructed current word
let charCounter = 0;
let currentList;
let currentIndex = 0;
let exerciseUnderway = false;
let repetitionNumber = 2;

// Global Constants
const nextBtnCorrectText = "Correct! Hit space to continue.";
const nextBtnPrompt = "Press enter or click to submit";

function checkAnswer() {
  if (userText.value === prompt.textContent) {
    userText.disabled = true;
    userText.classList.add("lightup-correct");
    nextButton.classList.add("correct-next-btn");
    setTimeout(() => {
      nextButton.focus();
    }, 50);
    nextButton.textContent = nextBtnCorrectText;
  } else {
    setTimeout(() => {
      userText.select();
    }, 50);
  }
}

nextButton.addEventListener("click", function () {
  if (nextButton.textContent === nextBtnCorrectText) {
    currentIndex++;
    if (currentIndex === repetitionNumber) {
      hideContainers();
      congratsContainer.parentElement.classList.remove("hidden");
      clearExercise();
      return;
    }
    prompt.textContent = currentList[currentIndex].korean;
    nextButton.classList.remove("correct-next-btn");
    userText.classList.remove("lightup-correct");
    userText.disabled = false;
    userText.focus();
    userText.value = "";
    nextButton.textContent = nextBtnPrompt;
  } else {
    console.log("Should be checking answer now");
    checkAnswer;
  }
});

function presentResults() {
  // Show percentage correct
  // Typing accuracy
  // Typing speed
  // Review of the items of the exercise
  // Number correct and not correct (for that type of exercise)
  hideContainers();
}

// I am testing fucntionality for now, clean this up later TODO
function loadVocabList(listIndex) {
  exerciseUnderway = true;
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
  // console.log(syllable);
  // console.log("Syllable length = ", syllable.length);
  const key = syllable[syllable.length - 1];
  let targetElement = document.querySelector(`.key.${key}`);
  if (!targetElement) {
    if (document.querySelector(`.key-upper-right.${key}`)) {
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
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        bubbleContainer.style.display = "flex";
        bubbleContainer.parentElement.classList.remove("hidden");
        createBubbles();
      }
    });
  } else {
    hideContainers();
    bubbleContainer.style.display = "flex";
    bubbleContainer.parentElement.classList.remove("hidden");
    createBubbles();
  }
});

startDropdownLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        bubbleContainer.style.display = "flex";
        bubbleContainer.parentElement.classList.remove("hidden");
        createBubbles();
      }
    });
  } else {
    hideContainers();
    bubbleContainer.style.display = "flex";
    bubbleContainer.parentElement.classList.remove("hidden");
    createBubbles();
  }
});

aboutLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        aboutContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    aboutContainer.parentElement.classList.remove("hidden");
  }
});

whyTypeLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        whyTypeContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    whyTypeContainer.parentElement.classList.remove("hidden");
  }
});

whyDropdownLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        whyTypeContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    whyTypeContainer.parentElement.classList.remove("hidden");
  }
});

helpLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        helpContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    helpContainer.parentElement.classList.remove("hidden");
  }
});

helpDropdownLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        helpContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    helpContainer.parentElement.classList.remove("hidden");
  }
});

aboutDropdownLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        aboutContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    aboutContainer.parentElement.classList.remove("hidden");
  }
});

function showModalAbandon(callback) {
  modalAbandon.style.display = "block";

  abandonBtn.addEventListener("click", function () {
    modalAbandon.style.display = "none";
    clearExercise();
    callback("abandon");
  });

  continueExerciseBtn.addEventListener("click", function () {
    modalAbandon.style.display = "none";
    callback("continue");
  });
}

// After a user completes or exits an exercise, this will clear all the content of the previous exercise
// so the next one starts out fresh.
function clearExercise() {
  exerciseUnderway = false;
  userText.value = "";
  userText.classList.remove("lightup-correct");
  prompt.textContent = currentList[currentIndex].korean;
  nextButton.classList.remove("correct-next-btn");
  userText.classList.remove("lightup-correct");
  userText.disabled = false;
  nextButton.textContent = nextBtnPrompt;
}

logo.addEventListener("click", function () {
  if (exerciseUnderway) {
    modalAbandon.style.display = "block";
    return;
  }
  hideContainers();
  homeContainer.parentElement.classList.remove("hidden");
});

userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

bubbleContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("bubble")) {
    modalStartExercise.style.display = "block"; // testing TODO
    hideContainers();
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

// Coding modals
// modalStartExercise.style.display = "block";
closeStartExercise.onclick = function () {
  modalStartExercise.style.display = "none";
};

closeAbandon.onclick = function () {
  modalAbandon.style.display = "none";
};

defaultCheckbox.addEventListener("change", function () {
  if (defaultCheckbox.checked) {
    exSettingsContainer.classList.add("hidden");
  } else {
    exSettingsContainer.classList.remove("hidden");
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalStartExercise || event.target == modalAbandon) {
    modalStartExercise.style.display = "none";
    modalAbandon.style.display = "none";
  }
};

// Testing
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownBtn.addEventListener("click", function () {
  dropdownContainer.classList.toggle("open");
});

dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    dropdownContainer.classList.remove("open");
  });
});

document.addEventListener("click", function (event) {
  if (!dropdownContainer.contains(event.target)) {
    dropdownContainer.classList.remove("open");
  }
});

beginExerciseButton.addEventListener("click", function () {
  // Other stuff will go here later
  modalStartExercise.style.display = "none";
});

generateResultsBtn.addEventListener("click", function () {
  presentResults();
  hideContainers();
  resultsContainer.parentElement.classList.remove("hidden");
});
