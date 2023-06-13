"use strict";

// Global Variables
let currentWord; // deconstructed current word
let currentAnswer; // This will be the answer the user must type in for their response to be graded correct
let charCounter = 0;
let currentList;
let currentIndex = 0;
let exerciseUnderway = false;
let currentCategory; // This will be stored to apply to labels on exercise start modal and results page
let currentExerciseName; // Same as above. Is assigned in loadVocabList
let keepDefaultSettings = true;
let resultsSummaryItems = []; // This will hold the content of the exercise to present in results summary text area
let userTriesAmount = 0; // For each prompt, the amount of tries a user attempts will be tracked. Only relevant if maxTries != 0

// Possible values for showing English settings
const showEngAsPrompt = "prompt"; // users will be asked to translate English to Korean
const showEngAfterGrading = "afterGrading"; // how English only on results page
const showEngWithResults = "withResults"; // Show English only after prompt has been graded as correct/incorrect
const showEngSameTime = "sameTime"; // Show English translation at same time as Korean prompt
const showNoEng = "none"; // Don't provide English translations anywhere

// User Settings Default Values, these can be changed by user
let repetitionNumber = 10;
let speedCalcOn = true;
let maxTries = 3; // amount of tries user can attempt to answer before being shown correct response, only used when unlimitedTries == false
let unlimitedTries = true;
let requireResponse = true; // user will be required to type the correct response before being allowed to continue
let keyboardOn = true;
let keyboardHintsOn = true;
let saveSettingsOn = true; // As long as this is checked, defaults will not be automatically be restored
let showEngSetting = showEngAfterGrading;

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

function restoreDefaultSettings() {
  repetitionNumber = 10;
  speedCalcOn = true;
  maxTries = 3; // amount of tries user can attempt to answer before being shown correct response, only used when unlimitedTries == false
  unlimitedTries = true;
  requireResponse = true; // user will be required to type the correct response before being allowed to continue
  keyboardOn = true;
  keyboardHintsOn = true;
  saveSettingsOn = true; // As long as this is checked, defaults will not be automatically be restored
  showEngSetting = showEngAfterGrading;
}

function startTimer() {
  timerOn = true;
  startTime = new Date().getTime();
}

function stopTimer() {
  timerOn = false;
  endTime = new Date().getTime();
  totalTimeTyped += (endTime - startTime) / 1000 / 60; // Update time and convert to minutes.
}

// Function to evluate if the user-provided response is correct according to the given prompt
function checkAnswer() {
  // User entered correct answer
  if (userText.value.trim() === currentAnswer) {
    if (showEngSetting == showEngAfterGrading) {
      promptLabel.innerHTML += "<br>" + currentList[currentIndex - 1].english;
    } else if (showEngSetting == showEngAsPrompt) {
      promptLabel.innerHTML +=
        "<br>" + "Correct answer: " + currentList[currentIndex - 1].korean;
    }

    userText.disabled = true;
    userText.classList.add("lightup-correct");
    nextButton.classList.add("correct-next-btn");
    setTimeout(() => {
      nextButton.focus();
    }, 50);
    nextButton.textContent = nextBtnCorrectText;
    stopTimer();
  }
  // User entered incorrect answer
  else {
    setTimeout(() => {
      userText.select();
    }, 50);
  }
}

// Results will be generated after the user completes an exercise
function generateResults() {
  // Show percentage correct

  // Print the items from the exercise to the corresponding text area
  resultsSummaryTextArea.value = "";
  resultsSummaryItems.forEach((rep, index) => {
    resultsSummaryTextArea.value += `\n${index + 1}.\nKorean: ${rep.korean}\n`;
    if (showEngSetting != showNoEng) {
      resultsSummaryTextArea.value += `English: ${rep.english}\n`;
    }
  });

  if (speedCalcOn) {
    // Calculate and show typing speed
    const typingSpeed = totalCharsTyped / totalTimeTyped;
    typingSpeedLabel.textContent = `Typing speed: ${Math.floor(
      typingSpeed
    )} SPM`;

    // Calculate typing accuracy
    const typingAccuracy = totalPromptChars / totalCharsTyped;
    typingAccuracyLabel.textContent = `Typing Accuracy: ${Math.floor(
      typingAccuracy * 100
    )}%`;
  }

  // Show results container
  clearExercise();
  hideContainers();
  resultsContainer.parentElement.classList.remove("hidden");
}

// This loads the prompts that a user will be shown for an exercise in accordance with
// the exercise and settings they have selected.
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

  setNextPrompt();
  currentWord = Hangul.disassemble(currentAnswer);
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

// Used for randomizing order of prompts for exercises
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
  bubbleContainer.style.display = "flex";
  bubbleContainer.parentElement.classList.remove("hidden");
  const bubbleSize = 150;

  // Clear existing bubbles
  bubbleContainer.innerHTML = "";

  // Create heading element
  const heading = document.createElement("h2");
  heading.textContent = basicVocabCategories.title;
  heading.classList.add("bubble-heading");
  bubbleContainer.appendChild(heading);

  const containerWidth = bubbleContainer.offsetWidth;
  const bubblesPerRow = Math.floor(containerWidth / bubbleSize);

  basicVocabCategories.items.forEach((item, index) => {
    const rowNumber = Math.floor(index / bubblesPerRow);
    let row = bubbleContainer.querySelector(
      `.bubble-row[data-row="${rowNumber}"]`
    );

    if (!row) {
      row = document.createElement("div");
      row.classList.add("bubble-row");
      row.setAttribute("data-row", rowNumber);
      bubbleContainer.appendChild(row);
    }

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.width = `${bubbleSize}px`;
    bubble.style.height = `${bubbleSize}px`;
    bubble.textContent = item.title;
    row.appendChild(bubble);
  });
}

// Function to call when clicking a nav link to close all other sections
function hideContainers() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const containers = document.querySelectorAll(".container");
  containers.forEach((ele) => ele.classList.add("hidden"));
}

// This function is for when a user attempts to navigate away during the middle of the exercise
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
  beginExerciseButton.addEventListener("click", function beginExercise(event) {
    // Other stuff will go here later
    if (!keepDefaultSettings) {
      applyUserSettings();
    }
    modalStartExercise.style.display = "none";
    callback();
    // Remove the listener afterwards to prevent it doubling up later
    event.target.removeEventListener("click", beginExercise);
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
  resultsSummaryItems = [];
  userText.classList.remove("lightup-correct");
  promptLabel.textContent = currentList[currentIndex].korean;
  nextButton.classList.remove("correct-next-btn");
  userText.classList.remove("lightup-correct");
  userText.disabled = false;
  nextButton.textContent = nextBtnPrompt;
  userTriesAmount = 0;

  if (!saveSettingsOn) {
    keepDefaultSettings = true;
  }
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

// Users can choose settings for their exercise
function applyUserSettings() {
  const selectedShowEnglishOption = document.querySelector(
    `${showEnglishOptionsSelector} input[type="radio"]:checked`
  );
  const repetitionsInput = document.querySelector(repetitionsInputSelector);
  const onScreenKeyboardCheckbox = document.querySelector(
    onScreenKeyboardCheckboxSelector
  );
  const keyboardHintsCheckbox = document.querySelector(
    keyboardHintsCheckboxSelector
  );
  const calculateTypingSpeedCheckbox = document.querySelector(
    calculateTypingSpeedCheckboxSelector
  );

  const triesPerPromptInput = document.querySelector(
    ".tries-per-prompt-number"
  );
  const selectedTriesPerPrompt = document.querySelector(
    'input[name="triesPerPrompt"]:checked'
  ).value;
  maxTries =
    selectedTriesPerPrompt === "unlimited"
      ? 0
      : parseInt(triesPerPromptInput.value);
  unlimitedTries = maxTries === 0;
  requireResponse = !unlimitedTries;

  requireResponse = requireAnswerCheckbox.checked;

  saveSettingsOn = saveSettingsCheckbox.checked;

  repetitionNumber = repetitionsInput ? parseInt(repetitionsInput.value) : 10;

  speedCalcOn = calculateTypingSpeedCheckbox.checked;
  if (speedCalcOn) {
    typingResults.classList.remove("hidden");
  } else {
    typingResults.classList.add("hidden");
  }

  keyboardOn = onScreenKeyboardCheckbox.checked;

  keyboardHintsOn = keyboardHintsCheckbox.checked;

  showEngSetting = selectedShowEnglishOption
    ? selectedShowEnglishOption.value
    : showEngAfterGrading;

  console.log("User settings saved");
}

// Sets next prompt and puts the current rep in the results summary array
function setNextPrompt() {
  // Save the current rep's information for results summary
  const currentRep = {
    korean: currentList[currentIndex].korean,
    english: currentList[currentIndex].english,
    correctAnswer: currentList[currentIndex].correctAnswer
      ? currentList[currentIndex].correctAnswer
      : currentList[currentIndex].korean,
    yourAnswer: userText.value.trim(),
  };
  resultsSummaryItems.push(currentRep);

  userTriesAmount = 0;

  // Actual prompt will depend on various settings, this is under construction TODO
  if (showEngSetting == showEngAsPrompt) {
    promptLabel.innerHTML = currentList[currentIndex].english;
  } else {
    promptLabel.innerHTML = currentList[currentIndex].korean;
    if (showEngSetting == showEngSameTime) {
      console.log("Show english at same time");
      promptLabel.innerHTML += "<br>" + currentList[currentIndex].english;
    }
  }

  // The current answer will change depending on settings and exercise type. For now it is just the Korean
  currentAnswer = currentList[currentIndex].korean;
  currentIndex++;
}

function handleLinkClick(targetContainer) {
  if (exerciseUnderway) {
    showModalAbandon(function (choice) {
      if (choice === "abandon") {
        hideContainers();
        targetContainer.parentElement.classList.remove("hidden");
      }
    });
  } else {
    hideContainers();
    targetContainer.parentElement.classList.remove("hidden");
  }
}

// >>>>>>>>>>>>>>>>>>>>>>> Event Listeners <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

startLearnLinks.forEach(function (startLearnLink) {
  startLearnLink.addEventListener("click", function () {
    if (exerciseUnderway) {
      showModalAbandon(function (choice) {
        if (choice === "abandon") {
          hideContainers();
          createBubbles();
        }
      });
    } else {
      hideContainers();
      createBubbles();
    }
  });
});

aboutLinks.forEach(function (aboutLink) {
  aboutLink.addEventListener("click", function () {
    handleLinkClick(aboutContainer);
  });
});

whyTypeLinks.forEach(function (whyTypeLink) {
  whyTypeLink.addEventListener("click", function () {
    handleLinkClick(whyTypeContainer);
  });
});

helpLinks.forEach(function (helpLink) {
  helpLink.addEventListener("click", function () {
    handleLinkClick(helpContainer);
  });
});

homeLink.addEventListener("click", function () {
  handleLinkClick(homeContainer);
});

logo.addEventListener("click", function () {
  handleLinkClick(homeContainer);
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
      if (keyboardOn) {
        keyboardContainer.parentElement.classList.remove("hidden");
      }
      loadVocabList(bubbleIndex);
    });
  }
});

// User settings listeners
defaultCheckbox.addEventListener("change", function () {
  if (defaultCheckbox.checked) {
    keepDefaultSettings = true;
    exSettingsContainer.classList.add("hidden");

    // onScreenKeyboardCheckboxSelector.checked = true;
    // keyboardHintsCheckboxSelector.checked = true;
    // saveSettingsCheckbox.checked = true;
    // requireAnswerCheckbox.checked = true;
    // calculateTypingSpeedCheckboxSelector.checked = true;

    // repetitionsInputSelector.value = 10;
    // showEnglishOptionsSelector.forEach((option) => {
    //   if (option.value === "afterGrading") {
    //     option.checked = true;
    //   } else {
    //     option.checked = false;
    //   }
    // });
    // triesPerPromptRadio.checked = true;
    // triesPerPromptNumber.disabled = true;
    // triesPerPromptNumber.value = "3";
  } else {
    keepDefaultSettings = false;
    exSettingsContainer.classList.remove("hidden");
  }
});

triesPerPromptRadio.forEach(function (radio) {
  radio.addEventListener("change", function () {
    if (this.value === "limited") {
      triesPerPromptNumber.disabled = false;
    } else {
      triesPerPromptNumber.disabled = true;
    }
  });
});

// Switch for turning on-screen keyboard on and off
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

// Modal windows
closeStartExercise.onclick = function () {
  modalStartExercise.style.display = "none";
};

closeAbandon.onclick = function () {
  modalAbandon.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalStartExercise || event.target == modalAbandon) {
    modalStartExercise.style.display = "none";
    modalAbandon.style.display = "none";
  }
};

// Dropdown menu listeners
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

// Exercise listeners
generateResultsBtn.addEventListener("click", function () {
  generateResults();
});

// This button either is used to check answer or progress to the next prompt/end exercise after rep is graded
nextButton.addEventListener("click", function () {
  if (nextButton.textContent === nextBtnCorrectText) {
    updateProgressBar();

    // Exercise over condition.
    if (currentIndex >= repetitionNumber) {
      hideContainers();
      congratsContainer.parentElement.classList.remove("hidden");
      generateResultsBtn.focus();
      return;
    }
    setNextPrompt();
    nextButton.classList.remove("correct-next-btn");
    userText.classList.remove("lightup-correct");
    userText.disabled = false;
    userText.focus();
    userText.value = "";
    nextButton.textContent = nextBtnPrompt;
  } else {
    checkAnswer;
  }
});

document.addEventListener("compositionupdate", function (event) {
  const syllable = Hangul.disassemble(String(event.data));
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

    if (warningFlag.style.display !== "block") {
      if (timerOn) {
        stopTimer();
      }
      warningFlag.style.display = "block";
      // playWarningSound(); TODO --> Make a sound for this
    } else {
      warningFlag.classList.add("warning-flag-flash");
      setTimeout(function () {
        warningFlag.classList.remove("warning-flag-flash");
      }, 1000);
    }
  } else {
    if (!timerOn) {
      startTimer();
    }
    totalCharsTyped++;

    warningFlag.style.display = "none";
    warningFlag.classList.remove("flash");
  }
});

// This event listener is necessary to prevent the inadvertent behavior
// of totalCharsTyped being incremented twice upon completion of a Korean syllable
userText.addEventListener("compositionend", function () {
  totalCharsTyped--;
});
