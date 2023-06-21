"use strict";

// Selecting elements
const aboutContainer = document.querySelector(".about-container");
const sectionTitle = document.querySelector(".section-title");
const learningContainer = document.querySelector(".learning-container");
const promptLabel = document.querySelector(".prompt-label");
const promptContainer = document.querySelector(".prompt-container");
const userTextContainer = document.querySelector(".user-text-container");
const userText = document.querySelector(".user-text");
const keyboardContainer = document.querySelector(".keyboard-container");
const keyboard = document.querySelector(".keyboard");
const keys = document.querySelectorAll(".key");
const keyRowTop = document.querySelectorAll(".row-top");
const keyRowMiddle = document.querySelectorAll(".row-middle");
const keyRowBottom = document.querySelectorAll(".row-bottom");
const keyFiller = document.querySelectorAll(".filler");
const keyUpperRight = document.querySelectorAll(".key-upper-right");
const nextBtn = document.querySelector(".next-btn");
const startLearnLinks = document.querySelectorAll(".start-learning-link");
const bubbleContainer = document.querySelector(".bubble-container");
const aboutLinks = document.querySelectorAll(".about-link");
const helpLinks = document.querySelectorAll(".help-link");
const whyTypeLinks = document.querySelectorAll(".why-type-link");
const whyTypeContainer = document.querySelector(".why-type-container");
const homeContainer = document.querySelector(".home-container");
const helpContainer = document.querySelector(".help-container");
const banner = document.querySelector(".banner");
const logo = document.querySelector(".logo");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContainer = document.querySelector(".dropdown-container");
const congratsContainer = document.querySelector(".congrats-container");
const resultsContainer = document.querySelector(".results-container");
const generateResultsBtn = document.querySelector(".generate-results-btn");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const homeLink = document.querySelector(".home-link");
const warningFlag = document.querySelector(".warning-flag");
const typingSpeedLabel = document.querySelector(".typing-speed");
const typingAccuracyLabel = document.querySelector(".typing-accuracy");
const progressBar = document.querySelector(".progress-bar");
const exerciseSummaryTextArea = document.querySelector(".exercise-summary");
const typingResults = document.querySelector(".typing-results");
const promptInstructions = document.querySelector(".prompt-instructions");
const exercisePerformanceLabel = document.querySelector(
  ".exercise-performance"
);
const showKeyboardCheckbox = document.querySelector(".show-keyboard-checkbox");
const showHintsCheckbox = document.querySelector(".show-hints-checkbox");
const revealBtn = document.querySelector(".reveal-btn");
const triesContainer = document.querySelector(".tries-container");
const triesEmojisContainer = document.querySelector(".tries-emojis");
const triesLabel = document.querySelector(".tries-label");
const keyboardCheckboxes = document.querySelector(".keyboard-checkboxes");
const backArrow = document.querySelector(".back-arrow");
const startLearningHeader = document.querySelector(".start-learning-header");

// Modal Window selectors
const modalStartExercise = document.querySelector(".modal-start-exercise");
const closeStartExercise = document.querySelector(".close-start-exercise");
const modalAbandon = document.querySelector(".modal-abandon");
const closeAbandon = document.querySelector(".close-abandon-btn");
const abandonBtn = document.querySelector(".abandon-btn");
const continueExerciseBtn = document.querySelector(".continue-btn");

// For user settings
const showEnglishOptionsSelector = ".show-english-options";
const showEnglishOptionsContainer = document.querySelector(
  ".show-english-container"
);
const requireFullSentenceLabel = document.querySelector(
  ".require-full-sentence-label"
);
const requireFullSentenceSelector = ".require-full-sentence";
const calculateTypingSpeedCheckboxSelector = ".calculate-typing-speed-checkbox";
const triesPerPromptRadio = document.querySelectorAll(
  'input[name="triesPerPrompt"]'
);
const triesPerPromptNumber = document.querySelector(".tries-per-prompt-number");
const repetitionsInputSelector = ".repetitions-input";
const onScreenKeyboardCheckboxSelector = ".on-screen-keyboard-checkbox";
const keyboardHintsCheckboxSelector = ".keyboard-hints-checkbox";
const requireAnswerCheckbox = document.querySelector(
  ".require-answer-checkbox"
);
const showHintsLabel = document.querySelector(".hints-label");
// const saveSettingsCheckbox = document.querySelector(".save-settings-checkbox");

// Start Exercise Modal Selectors
const categoryLabels = document.querySelectorAll(".category");
const exerciseNameLabels = document.querySelectorAll(".exercise-name");
const insertInstructions = document.querySelector(".insert-instructions");
const acceptDefaultsText = document.querySelector(".accept-defaults");
const defaultCheckbox = document.querySelector(".default-checkbox");
const beginExerciseButton = document.querySelector(".begin-button");
const exSettingsContainer = document.querySelector(".ex-settings-container");
const exerciseTypeLabel = document.querySelector(".exercise-type");

// Keyboard keys
const keyBieup = document.querySelector(".key.ㅂ");
const keyJieut = document.querySelector(".key.ㅈ");
const keyDigeut = document.querySelector(".key.ㄷ");
const keyGiyeok = document.querySelector(".key.ㄱ");
const keySiot = document.querySelector(".key.ㅅ");
const keyYeo = document.querySelector(".key.ㅕ");
const keyYa = document.querySelector(".key.ㅑ");
const keyAe = document.querySelector(".key.ㅐ");
const keyE = document.querySelector(".key.ㅔ");
const keyMieum = document.querySelector(".key.ㅁ");
const keyNieun = document.querySelector(".key.ㄴ");
const keyIeung = document.querySelector(".key.ㅇ");
const keyRieul = document.querySelector(".key.ㄹ");
const keyHieuh = document.querySelector(".key.ㅎ");
const keyEo = document.querySelector(".key.ㅓ");
const keyA = document.querySelector(".key.ㅏ");
const keyI = document.querySelector(".key.ㅣ");
const keyKieuk = document.querySelector(".key.ㅋ");
const keyTieut = document.querySelector(".key.ㅌ");
const keyChieut = document.querySelector(".key.ㅊ");
const keyPieup = document.querySelector(".key.ㅍ");
const keyU = document.querySelector(".key.ㅜ");
const keyEu = document.querySelector(".key.ㅡ");
