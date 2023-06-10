"use strict";

// Selecting elements
const aboutContainer = document.querySelector(".about-container");
const sectionTitle = document.querySelector(".section-title");
const learningContainer = document.querySelector(".learning-container");
const prompt = document.querySelector(".prompt");
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
const nextButton = document.querySelector(".next-btn");
const startLearnLink = document.querySelector(".start-learning-link");
const bubbleContainer = document.getElementById("bubbleContainer");
const aboutLink = document.querySelector(".about-link");
const helpLink = document.querySelector(".help-link");
const whyTypeLink = document.querySelector(".why-type-link");
const whyTypeContainer = document.querySelector(".why-type-container");
const homeContainer = document.querySelector(".home-container");
const helpContainer = document.querySelector(".help-container");
const banner = document.querySelector(".banner");
const startDropdownLink = document.querySelector(".start-dropdown-link");
const aboutDropdownLink = document.querySelector(".about-dropdown-link");
const helpDropdownLink = document.querySelector(".help-dropdown-link");
const whyDropdownLink = document.querySelector(".why-dropdown-link");
const logo = document.querySelector(".logo");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContainer = document.querySelector(".dropdown-container");

// Modal Window selectors
const modalStartExercise = document.querySelector(".modal-start-exercise");
const closeStartExercise = document.querySelector(".close-start-exercise");
const modalAbandon = document.querySelector(".modal-abandon");
const closeAbandon = document.querySelector(".close-abandon-btn");
const abandonBtn = document.querySelector(".abandon-btn");
const continueExerciseBtn = document.querySelector(".continue-btn");

// Start Exercise Modal Selectors
const categoryLabel = document.querySelector(".category");
const exerciseNameLabel = document.querySelector(".exercise-name");
const insertInstructions = document.querySelector(".insert-instructions");
const acceptDefaultsText = document.querySelector(".accept-defaults");
const defaultCheckbox = document.querySelector(".default-checkbox");
const beginExerciseButton = document.querySelector(".begin-button");
const exSettingsContainer = document.querySelector(".ex-settings-container");

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
