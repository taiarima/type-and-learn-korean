"use strict";

const countries = {
  title: "Countries",
  items: [
    { korean: "한국", english: "South Korea" },
    { korean: "미국", english: "United States" },
    { korean: "중국", english: "China" },
    { korean: "일본", english: "Japan" },
    { korean: "북한", english: "North Korea" },
    { korean: "인도", english: "India" },
    { korean: "인도네시아", english: "Indonesia" },
    { korean: "파키스탄", english: "Pakistan" },
    { korean: "브라질", english: "Brazil" },
    { korean: "나이지리아", english: "Nigeria" },
    { korean: "방글라데시", english: "Bangladesh" },
    { korean: "러시아", english: "Russia" },
    { korean: "멕시코", english: "Mexico" },
    { korean: "에티오피아", english: "Ethiopia" },
    { korean: "필리핀", english: "Philippines" },
    { korean: "이집트", english: "Egypt" },
    { korean: "베트남", english: "Vietnam" },
    { korean: "콩고민주공화국", english: "Democratic Republic of the Congo" },
    { korean: "터키", english: "Turkey" },
    { korean: "이란", english: "Iran" },
    { korean: "독일", english: "Germany" },
    { korean: "태국", english: "Thailand" },
    { korean: "영국", english: "United Kingdom" },
    { korean: "프랑스", english: "France" },
    { korean: "이탈리아", english: "Italy" },
    { korean: "남아프리카 공화국", english: "South Africa" },
    { korean: "탄자니아", english: "Tanzania" },
    { korean: "미얀마", english: "Myanmar" },
    { korean: "대한민국", english: "South Korea" },
    { korean: "콜롬비아", english: "Colombia" },
    { korean: "케냐", english: "Kenya" },
    { korean: "스페인", english: "Spain" },
    { korean: "우간다", english: "Uganda" },
    { korean: "아르헨티나", english: "Argentina" },
    { korean: "알제리", english: "Algeria" },
    { korean: "우크라이나", english: "Ukraine" },
    { korean: "수단", english: "Sudan" },
    { korean: "폴란드", english: "Poland" },
    { korean: "캐나다", english: "Canada" },
    { korean: "이라크", english: "Iraq" },
    { korean: "말레이시아", english: "Malaysia" },
    { korean: "우즈베키스탄", english: "Uzbekistan" },
    { korean: "모로코", english: "Morocco" },
    { korean: "아프가니스탄", english: "Afghanistan" },
    { korean: "사우디아라비아", english: "Saudi Arabia" },
    { korean: "우크라이나", english: "Ukraine" },
    { korean: "베네수엘라", english: "Venezuela" },
    { korean: "앙골라", english: "Angola" },
    { korean: "모잠비크", english: "Mozambique" },
    { korean: "카메룬", english: "Cameroon" },
    { korean: "가나", english: "Ghana" },
    { korean: "말라위", english: "Malawi" },
  ],
};

const foodItems = {
  title: "Food",
  items: [
    { korean: "김치", english: "Kimchi" },
    { korean: "불고기", english: "Bulgogi" },
    { korean: "비빔밥", english: "Bibimbap" },
    { korean: "떡볶이", english: "Tteokbokki" },
    { korean: "삼겹살", english: "Samgyeopsal" },
    { korean: "된장찌개", english: "Doenjang jjigae" },
    { korean: "김밥", english: "Gimbap" },
    { korean: "순대", english: "Sundae" },
    { korean: "갈비탕", english: "Galbitang" },
    { korean: "순두부찌개", english: "Sundubu jjigae" },
    { korean: "팥빙수", english: "Patbingsu" },
    { korean: "전복죽", english: "Jebokjuk" },
    { korean: "감자탕", english: "Gamjatang" },
    { korean: "호두과자", english: "Hodu gwaja" },
    { korean: "오징어채볶음", english: "Ojingeo chae bokkeum" },
    { korean: "김치찌개", english: "Kimchi jjigae" },
    { korean: "스시", english: "Sushi" },
    { korean: "햄버거", english: "Hamburger" },
    { korean: "피자", english: "Pizza" },
    { korean: "카레", english: "Curry" },
    { korean: "나쵸", english: "Nachos" },
    { korean: "파스타", english: "Pasta" },
    { korean: "타코", english: "Taco" },
    { korean: "쌀국수", english: "Pho" },
    { korean: "양고기", english: "Lamb" },
    { korean: "우동", english: "Udon" },
    { korean: "삼각김밥", english: "Onigiri" },
    { korean: "참치회", english: "Tuna sashimi" },
    { korean: "푸팟퐁커리", english: "Pad Thai" },
    { korean: "스테이크", english: "Steak" },
    { korean: "크로와상", english: "Croissant" },
  ],
};

const natureTerms = {
  title: "Nature",
  items: [
    { korean: "강", english: "river" },
    { korean: "산", english: "mountain" },
    { korean: "바다", english: "sea" },
    { korean: "하늘", english: "sky" },
    { korean: "나무", english: "tree" },
    { korean: "꽃", english: "flower" },
    { korean: "별", english: "star" },
    { korean: "해변", english: "beach" },
    { korean: "풀", english: "grass" },
    { korean: "섬", english: "island" },
    { korean: "바람", english: "wind" },
    { korean: "빗물", english: "rain" },
    { korean: "태양", english: "sun" },
    { korean: "구름", english: "cloud" },
    { korean: "폭포", english: "waterfall" },
    { korean: "지구", english: "earth" },
    { korean: "해", english: "ocean" },
    { korean: "풍경", english: "scenery" },
    { korean: "계곡", english: "valley" },
    { korean: "바위", english: "rock" },
    { korean: "모래", english: "sand" },
    { korean: "갈대", english: "reed" },
    { korean: "시골", english: "countryside" },
    { korean: "호수", english: "lake" },
  ],
};

const animals = {
  title: "Animals",
  items: [
    { korean: "고양이", english: "cat" },
    { korean: "개", english: "dog" },
    { korean: "사자", english: "lion" },
    { korean: "호랑이", english: "tiger" },
    { korean: "코끼리", english: "elephant" },
    { korean: "기린", english: "giraffe" },
    { korean: "여우", english: "fox" },
    { korean: "뱀", english: "snake" },
    { korean: "악어", english: "crocodile" },
    { korean: "원숭이", english: "monkey" },
    { korean: "양", english: "sheep" },
    { korean: "코뿔소", english: "rhinoceros" },
    { korean: "다람쥐", english: "squirrel" },
    { korean: "판다", english: "panda" },
    { korean: "침팬지", english: "chimpanzee" },
    { korean: "고릴라", english: "gorilla" },
    { korean: "토끼", english: "rabbit" },
    { korean: "쥐", english: "mouse" },
    { korean: "얼룩말", english: "zebra" },
    { korean: "북극곰", english: "polar bear" },
    { korean: "말", english: "horse" },
    { korean: "사슴", english: "deer" },
    { korean: "앵무새", english: "parrot" },
    { korean: "돼지", english: "pig" },
  ],
};

const colors = {
  title: "Colors",
  items: [
    { korean: "빨강", english: "red" },
    { korean: "주황", english: "orange" },
    { korean: "노랑", english: "yellow" },
    { korean: "초록", english: "green" },
    { korean: "파랑", english: "blue" },
    { korean: "남색", english: "indigo" },
    { korean: "보라", english: "purple" },
    { korean: "분홍", english: "pink" },
    { korean: "갈색", english: "brown" },
    { korean: "회색", english: "gray" },
    { korean: "검정", english: "black" },
    { korean: "하양", english: "white" },
    { korean: "금색", english: "gold" },
    { korean: "은색", english: "silver" },
    { korean: "브론즈", english: "bronze" },
  ],
};

const greetings = {
  title: "Greetings",
  items: [
    { korean: "안녕", english: "Hello (informal)" },
    { korean: "안녕하세요", english: "Hello (formal)" },
    {
      korean: "안녕히 계세요",
      english: "Goodbye (when you are leaving and the other party is staying)",
    },
    {
      korean: "안녕히 가세요",
      english: "Goodbye (when addressing someone who is leaving)",
    },
    { korean: "안녕하십니까", english: "Hello (extra formal)" },
    { korean: "여보세요", english: "Hello? (on the phone)" },
    { korean: "오랜만이에요", english: "Long time no see" },
    {
      korean: "처음 뵙겠습니다",
      english: "[Said when you meet someone for the first time]",
    },
    { korean: "좋은 아침이에요", english: "Good morning!" },
    { korean: "잘가", english: "Bye! (among close friends)" },
  ],
};

const basicVocabCategories = {
  title: "Basic Vocabulary",
  items: [],
};
basicVocabCategories.items.push(countries);
basicVocabCategories.items.push(foodItems);
basicVocabCategories.items.push(natureTerms);
basicVocabCategories.items.push(animals);
basicVocabCategories.items.push(colors);
basicVocabCategories.items.push(greetings);

// class Category {
//   constructor(title) {
//     this.title = title;
//     this.items = [];
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
// }

// class Item {
//   constructor(title) {
//     this.title = title;
//   }
// }

// // Create an instance of Category
// const basicVocabCategories = new Category("Basic Vocabulary");

// // Create instances of Item and add them to the category
// basicVocabCategories.addItem(new Item(countries));
// basicVocabCategories.addItem(new Item(foodItems));
// basicVocabCategories.addItem(new Item(natureTerms));
// basicVocabCategories.addItem(new Item(animals));
// basicVocabCategories.addItem(new Item(colors));
// basicVocabCategories.addItem(new Item(greetings));

// New OOP approach:
// class Category {
//     constructor(title) {
//       this.title = title;
//       this.drills = [];
//     }

//     addDrill(drill) {
//       this.drills.push(drill);
//     }
//   }

//   class Drill {
//     constructor(title, type, items) {
//       this.title = title;
//       this.items = items;
//       this.type = type; // e.g. fill in blank, write full prompt (FIB, WFP)
//      this.instructions = -- if (fib) { these, or these}
//     }
//   }

//   // Creating instances of Category and Drill
//   const vocabularyCategory = new Category("Vocabulary Drills");

//   const greetingsDrill = new Drill("Greetings", [
//     { korean: "안녕", english: "Hello (informal)" },
//     // Add more items if needed
//   ]);

//   vocabularyCategory.addDrill(greetingsDrill);
//   // Add more drills to the vocabularyCategory if needed
