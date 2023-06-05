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
  const containers = document.querySelectorAll(".container");
  containers.forEach((ele) => ele.classList.add("hidden"));
  bubbleContainer.style.display = "flex";
  bubbleContainer.parentElement.classList.remove("hidden");
  createBubbles();
});

userText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

aboutLink.addEventListener("click", function () {
  const containers = document.querySelectorAll(".container");
  containers.forEach((ele) => ele.classList.add("hidden"));
  aboutContainer.parentElement.classList.remove("hidden");
  console.log(aboutContainer);
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

// Make typing exercises where it highlights text as you go along

// TODO: Warning if user tries to abandon current drill
// --> make sure all things are removed from the keyboard at end of drill
//
//
/*
  Why learn Korean while typing?

  First and foremost, typing in Korean is a skill that you will need if you want to make use
  of computers and mobile devices effectively using Korean. Unlike the majority of languages, which
  make use of a keyboard layout similar to that of QWERTY, Korean uses a keyboard layout which is unique to the Korean language.
  This means that you will need practice building up your typing speed in Korean, as it is a completely separate skill
  from typing in English or other languages. By gaining confidence in your Korean typing speed, you will experience more
  success and less frustration when it comes to using the Korean for things such as online research, online shopping,
  making friends online, chatting in Korean, playing Korean games online, and so on.

  Typing in Korean is something that will feel awkward and frustrating at first. With a small amount of practice, however,
  your fingers will quickly remember the keyboard layout. From there, building up typing speed is merely a matter of practice.
  The more you type Korean every day, the quicker you will go. 

  Typing Korean also has an added benefit that it is an active skill. To type effectively in Korean, you have to pay close attention 
  to spelling conventions. Moving your fingers and actually typing the words helps you internalize the language on a deeper level. 
  There is often a large difference between a language learner's active and passive vocabularies in their target language.
  Challenging yourself by doing active learning exercises such as typing where you have to recall words and grammar from memory
  will expand your active vocabulary, and improve your overall proficiency and confidence in the language. 

  Corrected version:
  Typing in Korean is an essential skill for effectively using computers and mobile devices in the Korean language. 
  Unlike most languages that follow QWERTY layouts, Korean has its unique keyboard layout. This means you
  essentially have to learn how to type again from scratch.

Initially, typing in Korean may feel awkward and frustrating. However, with practice, your fingers will quickly adapt 
to the keyboard layout. Consistent daily practice will help you increase your typing speed. By gaining confidence in typing Korean, 
you will have more success and less frustration when using Korean for online research, shopping, socializing, gaming, and so on.

Typing in Korean has many additional benefits. Typing is an active skill which deepens your understanding of the language. 
Language learners often have a huge gap between active and passive vocabularies. By challlenging yourself to actively engage in typing exercises 
which require recalling words and grammar from memory, you can expand your active vocabulary, enhance overall proficiency, 
and boost confidence in the language. Not to mention, it will be great for your spelling.
*/
