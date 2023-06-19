"use strict";

// Global Variables
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
let correctResponsesCounter = 0;
let deconstructedCorrectAnswer = []; // used for keyboard hints
let deconstructedUserInput = [];
let answerRevealed = false;
let keyboardMessage;

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
// let saveSettingsOn = true; // As long as this is checked, defaults will not be automatically be restored;; Disabling this functionality for now
let showEngSetting = showEngAfterGrading;

// For calculating typing speed
let totalCharsTyped = 0;
let totalTimeTyped = 0;
let totalPromptChars = 0;
let timerOn = false;
let startTime = 0;
let endTime = 0;

// Global Constants
const nextBtnCorrectText = "Correct! Click or hit space to continue.";
const nextBtnIncorrectText =
  "Sorry, that's incorrect 😅. Click or press space to continue";
const nextBtnReponseRequired = "There you go! Hit space to continue.";
const nextBtnPrompt = "Press enter or click to submit";
const nextBtnTryAgainText = "That's incorrect. Try again!";
const keyboardMessageContent =
  "This is an on-screen keyboard. It's here to help guide your typing. Not for you to click on... 😅";

// >>>>>>>>>>>>>>>>>>>>>>>>>> Function declarations <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

function restoreDefaultSettings() {
  repetitionNumber = 10;
  speedCalcOn = true;
  maxTries = 3; // amount of tries user can attempt to answer before being shown correct response, only used when unlimitedTries == false
  unlimitedTries = true;
  requireResponse = true; // user will be required to type the correct response before being allowed to continue
  keyboardOn = true;
  keyboardHintsOn = true;
  // saveSettingsOn = true; // As long as this is checked, defaults will not be automatically be restored
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
    gradeCorrect();
  }
  // User entered incorrect answer
  else {
    gradeIncorrect();
  }
}

// This will be executed when the user has entered the correct response
function gradeCorrect() {
  revealBtn.disabled = true;
  revealBtn.classList.add("disabled-button");

  if (!promptContainer.classList.contains("lightup-incorrect")) {
    if (showEngSetting == showEngAfterGrading) {
      promptLabel.innerHTML += "<br>" + currentList[currentIndex - 1].english;
    } else if (showEngSetting == showEngAsPrompt) {
      promptLabel.innerHTML +=
        "<br>" + "Correct answer: " + currentList[currentIndex - 1].korean;
    }
    nextBtn.textContent = nextBtnCorrectText;
    correctResponsesCounter++;
  } else {
    nextBtn.textContent = nextBtnReponseRequired;
  }

  promptInstructions.textContent = "Correct answer:";

  userText.disabled = true;
  userText.classList.add("lightup-correct");
  nextBtn.classList.add("bigger-next-btn");
  setTimeout(() => {
    nextBtn.focus();
  }, 50);

  speedCalcOn && stopTimer();
}

// Executes when user has entered an incorrect response
function gradeIncorrect() {
  setTimeout(() => {
    userText.select();
  }, 50);
  if (!maxTries || (userTriesAmount < maxTries && !answerRevealed)) {
    nextBtn.classList.add("bigger-next-btn");
    nextBtn.textContent = nextBtnTryAgainText;
    userTriesAmount++;
    updateTriesUI();
    userText.classList.add("lightup-incorrect");

    setTimeout(() => {
      userText.classList.remove("lightup-incorrect");
      nextBtn.classList.remove("bigger-next-btn");
      nextBtn.textContent = nextBtnPrompt;
    }, 700);
  }

  // promptLabel.innerHTML += currentAnswer;

  // In the case user is out of tries or reveals answer
  if (maxTries && (userTriesAmount >= maxTries || answerRevealed)) {
    revealBtn.disabled = true;
    revealBtn.classList.add("disabled-button");
    // Reveal correct answer and English if necessary
    if (!promptContainer.classList.contains("lightup-incorrect")) {
      if (showEngSetting == showEngAfterGrading) {
        promptLabel.innerHTML += "<br>" + currentList[currentIndex - 1].english;
      } else if (showEngSetting == showEngAsPrompt) {
        promptLabel.innerHTML +=
          "<br>" + "Correct answer: " + currentList[currentIndex - 1].korean;
      }
      promptContainer.classList.add("lightup-incorrect");
    }

    if (requireResponse) {
      if (answerRevealed) {
        promptInstructions.textContent =
          "You chose to reveal the answer. Type the correct answer to continue.";
      } else {
        promptInstructions.textContent =
          "You have run out of tries. Type the correct answer to continue.";
      }
    } else {
      userText.disabled = true;
      setTimeout(() => {
        nextBtn.focus();
      }, 50);
      nextBtn.textContent = nextBtnIncorrectText;
      nextBtn.classList.add("bigger-next-btn");
      calcSpeedOn && stopTimer();
    }
  }
}

// Results will be generated after the user completes an exercise
function generateResults() {
  // Print the items from the exercise to the corresponding text area
  resultsSummaryTextArea.value = "";
  resultsSummaryItems.forEach((rep, index) => {
    resultsSummaryTextArea.value += `\n${index + 1}.\nKorean: ${rep.korean}\n`;
    if (showEngSetting != showNoEng) {
      resultsSummaryTextArea.value += `English: ${rep.english}\n`;
    }
  });

  // Write string to show how many answers user got correct
  exercisePerformanceLabel.textContent = `Exercise performance: ${
    (correctResponsesCounter / repetitionNumber) * 100
  }% correct`;

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

  userText.focus();
}

// This is a function to show the user the next key to press by highlighting the key aqua
// on the on-screen keyboard
function showNextKey() {
  // Remove previously activated key if relevant
  document.querySelector(".activated-key")?.classList.remove("activated-key");
  if (!keyboardOn || !keyboardHintsOn) {
    return;
  }

  let keyIndex = -1;

  // There are five possible scenarios:
  // 1. The user has typed only correct characters but has not completed the answer yet
  // ----> Function should light up next key
  // 2. The user has typed one or more incorrect characters
  // -----> The function should show the next correct character, and show a message showing the user should hit backspace
  /// 3. The user has typed the entire answer correctly
  // -----> No further hints should be shown
  // 4. The user has typed the entire correct answer, but also additional characters which are unncessary
  // -----> A message should be shown that the user has typed too many characters, no hints should be shown
  // 5. The user hasn't typed anything yet
  // ---> The hint should be for the first character

  // Show the first character in deconstructedCorrectAnswer if userText is empty
  if (deconstructedUserInput.length == 0) {
    keyIndex = 0;
  }

  // Make sure all characters are same. keyIndex should equal -1 if they're the same
  // or the index of the first mismatched character.
  else {
    const shorterLength = Math.min(
      deconstructedCorrectAnswer.length,
      deconstructedUserInput.length
    );
    for (let i = 0; i < shorterLength; i++) {
      if (deconstructedUserInput[i] !== deconstructedCorrectAnswer[i]) {
        keyIndex = i;
        break;
      }
    }
    // User has typed an incorrect character
    if (keyIndex !== -1) {
      // show a message to hit backspace
    }

    // All characters correct so far, but word not complete
    else if (
      deconstructedUserInput.length < deconstructedCorrectAnswer.length
    ) {
      keyIndex = deconstructedUserInput.length;
    }
    // User has typed everything correctly, but has typed too many chars
    else if (
      deconstructedUserInput.length > deconstructedCorrectAnswer.length
    ) {
      // Show message that user has typed too many characters
    }
  }

  // The user has completely typed the correct answer
  if (keyIndex == -1) {
    document
      .querySelector(
        `.${deconstructedCorrectAnswer[deconstructedCorrectAnswer.length - 1]}`
      )
      .classList.remove("activated-key");
    return;
  }

  let keyToPress = deconstructedCorrectAnswer[keyIndex];
  if (keyToPress === " ") {
    keyToPress = "space-bar";
  }
  // TODO : Add functionality to account for a space.
  document.querySelector(`.${keyToPress}`).classList.add("activated-key");
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
    // Reveal typing results as necessary
    if (speedCalcOn) {
      typingResults.classList.remove("hidden");
    } else {
      typingResults.classList.add("hidden");
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
  nextBtn.classList.remove("bigger-next-btn");
  promptContainer.classList.remove("lightup-incorrect");
  userText.disabled = false;
  nextBtn.textContent = nextBtnPrompt;
  userTriesAmount = 0;
  correctResponsesCounter = 0;
  document.querySelector(".activated-key")?.classList.remove("activated-key");
  answerRevealed = false;

  // I haven't decided how I'm going to handle this yet
  // if (!saveSettingsOn) {
  //   keepDefaultSettings = true;
  // }
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

// Function to play a warning sound, haven't got a sound file for it yet
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

  requireResponse = requireAnswerCheckbox.checked;

  // Haven't decided how to handle this yet
  // saveSettingsOn = saveSettingsCheckbox.checked;

  repetitionNumber = repetitionsInput ? parseInt(repetitionsInput.value) : 10;

  speedCalcOn = calculateTypingSpeedCheckbox.checked;

  if (onScreenKeyboardCheckbox.checked) {
    keyboardOn = true;
    showKeyboardCheckbox.checked = true;
  } else {
    keyboardOn = false;
    showKeyboardCheckbox.checked = false;
  }

  if (keyboardHintsCheckbox.checked) {
    keyboardHintsOn = true;
    showHintsCheckbox.checked = true;
  } else {
    keyboardHintsOn = false;
    showHintsCheckbox.checked = false;
  }

  showEngSetting = selectedShowEnglishOption.value;
}

// Sets next prompt and puts the current rep in the results summary array
function setNextPrompt() {
  // Restore reveal button
  revealBtn.disabled = false;
  revealBtn.classList.remove("disabled-button");

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

  if (maxTries) {
    userTriesAmount = 0;
    updateTriesUI();
  }
  answerRevealed = false;

  //This will be customized according to exercise type in the future.
  promptInstructions.textContent = "Type the following in Korean:";

  // Actual prompt will depend on various settings, this is under construction TODO
  if (showEngSetting == showEngAsPrompt) {
    promptLabel.innerHTML = currentList[currentIndex].english;
  } else {
    promptLabel.innerHTML = currentList[currentIndex].korean;
    if (showEngSetting == showEngSameTime) {
      promptLabel.innerHTML += "<br>" + currentList[currentIndex].english;
    }
  }

  // The current answer will change depending on settings and exercise type. For now it is just the Korean
  currentAnswer = currentList[currentIndex].korean;
  deconstructedCorrectAnswer = Hangul.disassemble(currentAnswer);
  currentIndex++;

  // This function should be invoked when appropriate to show the user the first key to be pressed
  showNextKey();
}

function updateTriesUI() {
  // Clear the previous emojis
  triesEmojisContainer.innerHTML = "";

  // Calculate the number of remaining tries
  const remainingTries = maxTries - userTriesAmount;
  triesLabel.textContent = `Tries remaining: ${remainingTries}`;

  // Add emojis for each remaining try
  for (let i = 0; i < remainingTries; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = "❤️";
    triesEmojisContainer.appendChild(emoji);
  }
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

function keyToKoreanLetter(keyCode, isShiftPressed) {
  const koreanMapping = {
    KeyA: "ㅁ",
    KeyB: "ㅠ",
    KeyC: "ㅊ",
    KeyD: "ㅇ",
    KeyE: "ㄷ",
    KeyF: "ㄹ",
    KeyG: "ㅎ",
    KeyH: "ㅗ",
    KeyI: "ㅑ",
    KeyJ: "ㅓ",
    KeyK: "ㅏ",
    KeyL: "ㅣ",
    KeyM: "ㅡ",
    KeyN: "ㅜ",
    KeyO: "ㅐ",
    KeyP: "ㅔ",
    KeyQ: "ㅂ",
    KeyR: "ㄱ",
    KeyS: "ㄴ",
    KeyT: "ㅅ",
    KeyU: "ㅕ",
    KeyV: "ㅍ",
    KeyW: "ㅈ",
    KeyX: "ㅌ",
    KeyY: "ㅛ",
    KeyZ: "ㅋ",
    Space: "space-bar",
  };

  const shiftedCharacters = {
    KeyQ: "ㅃ",
    KeyW: "ㅉ",
    KeyE: "ㄸ",
    KeyR: "ㄲ",
    KeyT: "ㅆ",
    KeyO: "ㅒ",
    KeyP: "ㅖ",
  };

  if (keyCode in koreanMapping) {
    if (isShiftPressed && keyCode in shiftedCharacters) {
      return shiftedCharacters[keyCode];
    } else {
      return koreanMapping[keyCode];
    }
  } else {
    return null;
  }
}

// Function to handle the reveal answer action
function revealAnswer() {
  if (answerRevealed) {
    return;
  }
  answerRevealed = true;
  gradeIncorrect();
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

// Listener for submitting answer
userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents the cursor from going to next line
    if (userText.value.trim() == "") {
      userText.value = "";
    } else {
      checkAnswer();
    }

    const previousKey = document.querySelector(".key.lightup-correct");
    const previousIncorrectKey = document.querySelector(
      ".key.lightup-incorrect"
    );
    if (previousKey) {
      previousKey.classList.remove("lightup-correct");
    }
    if (previousIncorrectKey) {
      previousIncorrectKey.classList.remove("lightup-incorrect");
    }
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

    // Set max amount of repetitions to be the amount of items in the list
    const repsNumberEle = document.querySelector(repetitionsInputSelector);
    const maxValue = basicVocabCategories.items[bubbleIndex].items.length;
    repsNumberEle.setAttribute("max", maxValue);
    if (repsNumberEle.value > maxValue) {
      repsNumberEle.value = maxValue;
    }

    initializeExercise(function () {
      hideContainers();
      learningContainer.parentElement.classList.remove("hidden");
      keyboardCheckboxes.parentElement.classList.remove("hidden");
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

    const selectedShowEnglishOption = document.querySelectorAll(
      `${showEnglishOptionsSelector} input[type="radio"]`
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

    onScreenKeyboardCheckbox.checked = true;
    keyboardHintsCheckbox.checked = true;
    // saveSettingsCheckbox.checked = true;
    requireAnswerCheckbox.checked = true;
    calculateTypingSpeedCheckbox.checked = true;

    repetitionsInput.value = 10;
    selectedShowEnglishOption.forEach((option) => {
      if (option.value === "afterGrading") {
        option.checked = true;
      } else {
        option.checked = false;
      }
    });
    const unlimitedRadio = document.querySelector(".unlimited-tries");
    const limitedRadio = document.querySelector(".limited-tries");
    unlimitedRadio.checked = false;
    limitedRadio.checked = true;
    triesPerPromptNumber.disabled = false;

    triesPerPromptInput.value = "3";
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
nextBtn.addEventListener("click", function () {
  if (
    nextBtn.textContent === nextBtnCorrectText ||
    nextBtn.textContent === nextBtnIncorrectText ||
    nextBtn.textContent === nextBtnReponseRequired
  ) {
    updateProgressBar();

    // Exercise over condition.
    if (currentIndex >= repetitionNumber) {
      hideContainers();
      congratsContainer.parentElement.classList.remove("hidden");
      generateResultsBtn.focus();
      return;
    }
    setNextPrompt();
    nextBtn.classList.remove("bigger-next-btn");
    promptContainer.classList.remove("lightup-incorrect");
    userText.classList.remove("lightup-correct");
    userText.disabled = false;
    userText.focus();
    userText.value = "";
    nextBtn.textContent = nextBtnPrompt;
  } else {
    if (userText.value.trim() == "") {
      userText.value = "";
    } else {
      checkAnswer();
    }
  }
});

// Event listener to light up the correct key.
userText.addEventListener("keydown", function (event) {
  const key = keyToKoreanLetter(event.code);

  let targetElement = document.querySelector(`.key.${key}`);

  // console.log(`syllable = ${syllable} and key = ${key}`);

  // if (!targetElement) {
  //   if (document.querySelector(`.key-upper-right.${key}`)) {
  //     targetElement = document
  //       .querySelector(`.key-upper-right.${key}`)
  //       .closest(".key");
  //   } else {
  //     return;
  //   }
  // }

  // Remove previous lightup class if any
  const previousKey = document.querySelector(".key.lightup-correct");
  const previousIncorrectKey = document.querySelector(".key.lightup-incorrect");
  if (previousKey) {
    previousKey.classList.remove("lightup-correct");
  }
  if (previousIncorrectKey) {
    previousIncorrectKey.classList.remove("lightup-incorrect");
  }

  // Add lightup class to the target key
  if (keyboardHintsOn) {
    if (targetElement?.classList.contains("activated-key")) {
      targetElement?.classList.add("lightup-correct");
    } else {
      targetElement?.classList.add("lightup-incorrect");
    }
  } else {
    targetElement?.classList.add("lightup-correct");
  }

  // Reset the animation after 1 second
  setTimeout(() => {
    targetElement?.classList.remove("lightup-correct");
    targetElement?.classList.remove("lightup-incorrect");
  }, 500);
});

// Event listener which prevents user from typing non-Korean characters
userText.addEventListener("input", function () {
  const userInput = userText.value;

  // Backtick is used as a hotkey to reveal answer, so it has a special case here
  if (userInput && containsNonKorean(userInput) && userInput.includes("`")) {
    userText.value = userInput.replace("`", "");
    return;
  }

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
    // Timer for calculating typing speed only turns on if calc enabled and user typing Hangeul
    if (speedCalcOn && !timerOn) {
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
  totalCharsTyped--; // this might be unnecessay now TODO
});

showKeyboardCheckbox.addEventListener("change", function () {
  if (showKeyboardCheckbox.checked) {
    keyboardContainer.parentElement.classList.remove("hidden");
    keyboardOn = true;
    showHintsCheckbox.disabled = false;
    if (showHintsCheckbox.checked) {
      showNextKey();
    }
  } else {
    keyboardContainer.parentElement.classList.add("hidden");
    keyboardOn = false;
    showHintsCheckbox.disabled = true;
  }
});

showHintsCheckbox.addEventListener("change", function () {
  if (showHintsCheckbox.checked) {
    keyboardHintsOn = true;
  } else {
    keyboardHintsOn = false;
  }
  showNextKey();
});

// For tracking what key needs to be lit up next for hints
userText.addEventListener("input", function () {
  const userInput = userText.value;

  // Convert the user input into a deconstructed array
  const deconstructedInput = userInput
    .split("")
    .map((char) => Hangul.disassemble(char))
    .flat();

  // Update deconstructedUserInput
  deconstructedUserInput = deconstructedInput;

  setTimeout(() => showNextKey(), 10);
});

// Event listener for the "Reveal answer" button
revealBtn.addEventListener("click", () => {
  revealAnswer();
});

// Event listener for the backtick (`) key press
document.addEventListener("keydown", (event) => {
  if (event.key === "`") {
    revealAnswer();
  }
});

keyboard.addEventListener("click", (event) => {
  if (keyboardMessage) {
    keyboardMessage.remove();
    keyboardMessage = null;
  }
  keyboardMessage = document.createElement("div");
  keyboardMessage.classList.add("keyboard-message");
  keyboardMessage.textContent = keyboardMessageContent;

  keyboardMessage.style.left = event.clientX + "px";
  keyboardMessage.style.top = event.clientY + "px";

  document.body.appendChild(keyboardMessage);

  setTimeout(() => {
    if (keyboardMessage) {
      keyboardMessage.remove();
      keyboardMessage = null;
    }
  }, 5000);
});

document.addEventListener("click", (event) => {
  if (keyboardMessage && !keyboard.contains(event.target)) {
    keyboardMessage.remove();
    keyboardMessage = null;
  }
});
