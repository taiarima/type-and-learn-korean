"use strict";

// Global Variables
let currentWord; // deconstructed current word
let charCounter = 0;
let currentList;
let currentIndex = 0;
let exerciseUnderway = false;
let repetitionNumber = 10; // 10 is the default value for reps, can be adjusted by user
let currentCategory; // This will be stored to apply to labels on exercise start modal and results page
let currentExerciseName; // Same as above. Is assigned in loadVocabList

// For calculating typing speed
let totalCharsTyped = 0;
let totalTimeTyped = 0;
let totalPromptChars = 0;
let timerOn = false;
let startTime = 0;
let endTime = 0;

// Global Constants
const nextBtnCorrectText = "Correct! Hit space to continue.";
const nextBtnPrompt = "Press enter or click to submit";

// >>>>>>>>>>>>>>>>>>>>>>>>>> Function declarations <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function startTimer() {
  timerOn = true;
  startTime = new Date().getTime();
}

function stopTimer() {
  timerOn = false;
  endTime = new Date().getTime();
  totalTimeTyped += (endTime - startTime) / 1000 / 60; // Update time and convert to minutes.
}

function checkAnswer() {
  if (userText.value === promptLabel.textContent) {
    userText.disabled = true;
    userText.classList.add("lightup-correct");
    nextButton.classList.add("correct-next-btn");
    setTimeout(() => {
      nextButton.focus();
    }, 50);
    nextButton.textContent = nextBtnCorrectText;
    stopTimer();
  } else {
    setTimeout(() => {
      userText.select();
    }, 50);
  }
}

function generateResults() {
  // Show percentage correct
  // Review of the items of the exercise
  // Number correct and not correct (for that type of exercise)

  // Calculate and show typing speed
  const typingSpeed = totalCharsTyped / totalTimeTyped;
  typingSpeedLabel.textContent = `Typing speed: ${Math.floor(typingSpeed)} SPM`;

  console.log(
    `totalCharsTyped = ${totalCharsTyped}, totalTimeTyped = ${totalTimeTyped}, totalTimeTyped in seconds = ${
      totalTimeTyped * 60
    }`
  );

  // Calculate typing accuracy
  const typingAccuracy = totalPromptChars / totalCharsTyped;
  typingAccuracyLabel.textContent = `Typing Accuracy: ${Math.floor(
    typingAccuracy * 100
  )}%`;

  // Show results container
  clearExercise();
  hideContainers();
  resultsContainer.parentElement.classList.remove("hidden");
}

// I am testing fucntionality for now, clean this up later TODO
function loadVocabList(listIndex) {
  // Bool to prevent user from accidentally navigating away during exercise
  exerciseUnderway = true;

  // Initialize the progress bar to have a sliver of progress showing
  progressBar.style.width = `${100 / repetitionNumber / 2}%`;

  const randomizedList = shuffleArray(
    basicVocabCategories.items[listIndex].items
  );
  currentList = randomizedList;
  // The bottom needs to be adjusted according to the specifications of the exercise
  // currentList.forEach((prompt) => {
  //   const hangeulChars = Hangul.disassemble(prompt.korean);
  //   const hangeulString = hangeulChars.join("");
  //   totalPromptChars += hangeulString.replace(/\s/g, "").length;
  // });

  // Stand in code for testing. It should be changed to the above later
  for (let i = 0; i < repetitionNumber; i++) {
    const hangeulChars = Hangul.disassemble(currentList[i].korean);
    const hangeulString = hangeulChars.join("");
    totalPromptChars += hangeulString.replace(/\s/g, "").length;
  }
  const firstItem = randomizedList[0].korean;
  promptLabel.textContent = firstItem;
  currentWord = Hangul.disassemble(firstItem);
  console.log(`currentWord = ${currentWord}`);
  // This function should be invoked when appropriate to show the user the first key to be pressed
  // showNextKey();

  // document
  //   .querySelector(`.${currentWord[charCounter]}`)
  //   .classList.add("activated-key");

  userText.focus();
}

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
  window.scrollTo({ top: 0, behavior: "smooth" });
  const containers = document.querySelectorAll(".container");
  containers.forEach((ele) => ele.classList.add("hidden"));
}

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

function initializeExercise(callback) {
  beginExerciseButton.addEventListener("click", function () {
    // Other stuff will go here later
    modalStartExercise.style.display = "none";
    callback();
  });
}

// After a user completes or exits an exercise, this will clear all the content of the previous exercise
// so the next one starts out fresh.
function clearExercise() {
  startTime = 0;
  totalCharsTyped = 0;
  totalTimeTyped = 0;
  totalPromptChars = 0;
  startTime = 0;
  endTime = 0;
  currentIndex = 0;
  exerciseUnderway = false;
  userText.value = "";
  userText.classList.remove("lightup-correct");
  promptLabel.textContent = currentList[currentIndex].korean;
  nextButton.classList.remove("correct-next-btn");
  userText.classList.remove("lightup-correct");
  userText.disabled = false;
  nextButton.textContent = nextBtnPrompt;
}

function updateProgressBar() {
  const percentage = (currentIndex / repetitionNumber) * 100;
  progressBar.style.width = `${percentage}%`;
}

// This function is currently not used anywhere. Delete if unnecessary.
function isKoreanInput(input) {
  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
  return koreanRegex.test(input);
}

function containsNonKorean(text) {
  const regex = /[^\sㄱ-ㅎㅏ-ㅣ가-힣.,()0-9]/;
  return regex.test(text);
}

function filterNonKorean(text) {
  const regex = /[^\sㄱ-ㅎㅏ-ㅣ가-힣.,()0-9]/g;
  return text.replace(regex, "");
}

// Function to play a warning sound
function playWarningSound() {
  const audio = new Audio("path/to/warning-sound.mp3");
  audio.play();
}

function getUserSettings() {
  const showEnglishOptions = document.querySelectorAll(
    `${showEnglishOptionsSelector} input[type="radio"]`
  );
  const selectedShowEnglishOption = document.querySelector(
    `${showEnglishOptionsSelector} input[type="radio"]:checked`
  );
  const calculateTypingSpeedCheckbox = document.querySelector(
    calculateTypingSpeedCheckboxSelector
  );
  const triesPerPromptInput = document.querySelector(
    triesPerPromptInputSelector
  );
  const repetitionsInput = document.querySelector(repetitionsInputSelector);
  const onScreenKeyboardCheckbox = document.querySelector(
    onScreenKeyboardCheckboxSelector
  );
  const keyboardHintsCheckbox = document.querySelector(
    keyboardHintsCheckboxSelector
  );

  const userInput = {
    showEnglish: selectedShowEnglishOption
      ? selectedShowEnglishOption.value
      : "",
    calculateTypingSpeed: calculateTypingSpeedCheckbox
      ? calculateTypingSpeedCheckbox.checked
      : true,
    triesPerPrompt: triesPerPromptInput
      ? parseInt(triesPerPromptInput.value)
      : 10,
    repetitions: repetitionsInput ? parseInt(repetitionsInput.value) : 10,
    onScreenKeyboard: onScreenKeyboardCheckbox
      ? onScreenKeyboardCheckbox.checked
      : true,
    keyboardHints: keyboardHintsCheckbox ? keyboardHintsCheckbox.checked : true,
  };

  return userInput;
}

// >>>>>>>>>>>>>>>>>>>>>>> Event Listeners <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

startLearnLinks.forEach(function (startLearnLink) {
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
});

aboutLinks.forEach(function (aboutLink) {
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
});

whyTypeLinks.forEach(function (whyTypeLink) {
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
});

helpLinks.forEach(function (helpLink) {
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
});

homeLink.addEventListener("click", function () {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        homeContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    homeContainer.parentElement.classList.remove("hidden");
  }
});

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
    // Determine bubble (exercise) user clicked on
    const bubbles = Array.from(
      bubbleContainer.getElementsByClassName("bubble")
    );
    const bubbleIndex = bubbles.indexOf(event.target);

    // Assign values for labels
    currentCategory = basicVocabCategories.title;
    currentExerciseName = basicVocabCategories.items[bubbleIndex].title;
    categoryLabels.forEach((ele) => (ele.textContent = currentCategory));
    exerciseNameLabels.forEach(
      (ele) => (ele.textContent = currentExerciseName)
    );

    // Load pre-exercise modal. Exercise will not be initialized until begin btn pressed.
    modalStartExercise.style.display = "block";

    initializeExercise(function () {
      hideContainers();
      learningContainer.parentElement.classList.remove("hidden");
      keyboardContainer.parentElement.classList.remove("hidden");
      loadVocabList(bubbleIndex);
    });
  }
});

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

generateResultsBtn.addEventListener("click", function () {
  generateResults();
});

nextButton.addEventListener("click", function () {
  if (nextButton.textContent === nextBtnCorrectText) {
    currentIndex++;
    updateProgressBar();
    if (currentIndex >= repetitionNumber) {
      hideContainers();
      congratsContainer.parentElement.classList.remove("hidden");
      generateResultsBtn.focus();
      return;
    }
    promptLabel.textContent = currentList[currentIndex].korean;
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

// Event listener which prevents user from typing non-Korean characters
userText.addEventListener("input", function () {
  const userInput = userText.value;

  if (userInput && containsNonKorean(userInput)) {
    const koreanText = filterNonKorean(userInput);
    userText.value = koreanText;

    if (koreanFlag.style.display !== "block") {
      if (timerOn) {
        stopTimer();
      }
      koreanFlag.style.display = "block";
      // playWarningSound(); TODO --> Make a sound for this
    } else {
      koreanFlag.classList.add("warning-flag-flash");
      setTimeout(function () {
        koreanFlag.classList.remove("warning-flag-flash");
      }, 1000);
    }
  } else {
    if (!timerOn) {
      startTimer();
    }
    totalCharsTyped++;

    koreanFlag.style.display = "none";
    koreanFlag.classList.remove("flash");
  }
});

userText.addEventListener("compositionend", function () {
  totalCharsTyped--;
});

triesPerPromptRadio.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.value === "limited") {
      triesPerPromptInput.disabled = false;
    } else {
      triesPerPromptInput.disabled = true;
    }
  });
});
