"use strict";

const countries = {
  title: "Countries",
  type: "transcribe",
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
    { korean: "콩고 민주 공화국", english: "Democratic Republic of the Congo" },
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
  type: "transcribe",
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
  type: "transcribe",
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
  type: "transcribe",
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
  type: "transcribe",
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
  type: "transcribe",
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
const sea = {
  title: "The Sea",
  type: "transcribe",
  items: [
    { korean: "배", english: "boat" },
    { korean: "미역", english: "seaweed" },
    { korean: "게", english: "crab" },
    { korean: "갑각류", english: "barnacle" },
    { korean: "파도", english: "wave" },
    { korean: "닻", english: "anchor" },
    { korean: "바닷속", english: "ocean" },
    { korean: "고래", english: "whale" },
    { korean: "상어", english: "shark" },
    { korean: "오징어", english: "squid" },
    { korean: "조개", english: "shellfish" },
    { korean: "소라", english: "seashell" },
    { korean: "바닷가", english: "seashore" },
    { korean: "모래", english: "sand" },
    { korean: "소금", english: "salt" },
    { korean: "햇볕", english: "sunlight" },
    { korean: "돌고래", english: "dolphin" },
    { korean: "계류", english: "current" },
    { korean: "물고기", english: "fish" },
    { korean: "조류", english: "tide" },
    { korean: "솔방울", english: "seagull" },
    { korean: "파도타기", english: "surfing" },
    { korean: "바다표범", english: "sealion" },
    { korean: "저녁노을", english: "evening sunset" },
  ],
};
const space = {
  title: "Space",
  type: "transcribe",
  items: [
    { korean: "은하", english: "galaxy" },
    { korean: "블랙홀", english: "black hole" },
    { korean: "빅뱅", english: "big bang" },
    { korean: "별", english: "star" },
    { korean: "슈퍼노바", english: "supernova" },
    { korean: "운석", english: "meteoroid" },
    { korean: "태양", english: "sun" },
    { korean: "행성", english: "planet" },
    { korean: "달", english: "moon" },
    { korean: "성운", english: "nebula" },
    { korean: "혜성", english: "comet" },
    { korean: "수성", english: "Mercury" },
    { korean: "금성", english: "Venus" },
    { korean: "지구", english: "Earth" },
    { korean: "화성", english: "Mars" },
    { korean: "목성", english: "Jupiter" },
    { korean: "토성", english: "Saturn" },
    { korean: "천왕성", english: "Uranus" },
    { korean: "해왕성", english: "Neptune" },
    { korean: "명왕성", english: "Pluto" },
    { korean: "우주선", english: "spaceship" },
    { korean: "로켓", english: "rocket" },
    { korean: "인공위성", english: "satellite" },
    { korean: "우주복", english: "spacesuit" },
    { korean: "우주정거장", english: "space station" },
    { korean: "행성계", english: "planetary system" },
    { korean: "운석떨어짐", english: "meteor shower" },
  ],
};
const technology = {
  title: "Technology",
  type: "transcribe",
  items: [
    { korean: "컴퓨터", english: "computer" },
    { korean: "인터넷", english: "internet" },
    { korean: "핸드폰", english: "mobile phone" },
    { korean: "카메라", english: "camera" },
    { korean: "마우스", english: "mouse" },
    { korean: "키보드", english: "keyboard" },
    { korean: "모니터", english: "monitor" },
    { korean: "프린터", english: "printer" },
    { korean: "스마트폰", english: "smartphone" },
    { korean: "노트북", english: "laptop" },
    { korean: "스크린", english: "screen" },
    { korean: "앱", english: "app" },
    { korean: "소프트웨어", english: "software" },
    { korean: "하드웨어", english: "hardware" },
    { korean: "데이터", english: "data" },
    { korean: "바이러스", english: "virus" },
    { korean: "프로그램", english: "program" },
    { korean: "클라우드", english: "cloud" },
    { korean: "서버", english: "server" },
    { korean: "네트워크", english: "network" },
    { korean: "디지털", english: "digital" },
    { korean: "웹사이트", english: "website" },
    { korean: "인공지능", english: "artificial intelligence" },
    { korean: "코딩", english: "coding" },
    { korean: "백업", english: "backup" },
    { korean: "보안", english: "security" },
  ],
};
const sports = {
  title: "Sports",
  type: "transcribe",
  items: [
    { korean: "축구", english: "soccer" },
    { korean: "농구", english: "basketball" },
    { korean: "테니스", english: "tennis" },
    { korean: "야구", english: "baseball" },
    { korean: "배구", english: "volleyball" },
    { korean: "수영", english: "swimming" },
    { korean: "골프", english: "golf" },
    { korean: "럭비", english: "rugby" },
    { korean: "크리켓", english: "cricket" },
    { korean: "육상", english: "athletics" },
    { korean: "복싱", english: "boxing" },
    { korean: "자전거", english: "cycling" },
    { korean: "체조", english: "gymnastics" },
    { korean: "레슬링", english: "wrestling" },
    { korean: "하키", english: "hockey" },
    { korean: "배드민턴", english: "badminton" },
    { korean: "탁구", english: "table tennis" },
    { korean: "무술", english: "martial arts" },
    { korean: "서핑", english: "surfing" },
    { korean: "스키", english: "skiing" },
    { korean: "스노보드", english: "snowboarding" },
    { korean: "스케이트보드", english: "skateboarding" },
    { korean: "육상 경기", english: "track and field" },
    { korean: "양궁", english: "archery" },
    { korean: "펜싱", english: "fencing" },
  ],
};

const objectMarkers = {
  title: "The Object Marker 을/를",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "저는 매일 김밥__ 먹어요",
      english: "I eat kimbab every day",
      blankAnswer: "을",
      fullAnswer: "저는 매일 김밥을 먹어요",
    },
    {
      sentenceWithBlank: "그는 사과__ 먹었어요",
      english: "He ate an apple",
      blankAnswer: "를",
      fullAnswer: "그는 사과를 먹었어요",
    },
    {
      sentenceWithBlank: "나는 책__ 읽어요",
      english: "I read a book",
      blankAnswer: "을",
      fullAnswer: "나는 책을 읽어요",
    },
    {
      sentenceWithBlank: "우리는 노래__ 부르겠어요",
      english: "We will sing a song",
      blankAnswer: "를",
      fullAnswer: "우리는 노래를 부르겠어요",
    },
    {
      sentenceWithBlank: "그녀는 커피__ 마셨어요",
      english: "She drank coffee",
      blankAnswer: "를",
      fullAnswer: "그녀는 커피를 마셨어요",
    },
    {
      sentenceWithBlank: "나는 수학__ 공부해요",
      english: "I study mathematics",
      blankAnswer: "을",
      fullAnswer: "나는 수학을 공부해요",
    },
    {
      sentenceWithBlank: "그는 자전거__ 탔어요",
      english: "He rode a bicycle",
      blankAnswer: "를",
      fullAnswer: "그는 자전거를 탔어요",
    },
    {
      sentenceWithBlank: "우리는 영화__ 봤어요",
      english: "We watched a movie",
      blankAnswer: "를",
      fullAnswer: "우리는 영화를 봤어요",
    },
    {
      sentenceWithBlank: "너는 음식__ 만들었어요",
      english: "You cooked food",
      blankAnswer: "을",
      fullAnswer: "너는 음식을 만들었어요",
    },
    {
      sentenceWithBlank: "그들은 공원__ 산책했어요",
      english: "They took a walk in the park",
      blankAnswer: "을",
      fullAnswer: "그들은 공원을 산책했어요",
    },
    {
      sentenceWithBlank: "나는 친구__ 만났어요",
      english: "I met a friend",
      blankAnswer: "를",
      fullAnswer: "나는 친구를 만났어요",
    },
    {
      sentenceWithBlank: "그녀는 음악__ 들었어요",
      english: "She listened to music",
      blankAnswer: "을",
      fullAnswer: "그녀는 음악을 들었어요",
    },
    {
      sentenceWithBlank: "나는 한국어__ 배워요",
      english: "I learn Korean",
      blankAnswer: "를",
      fullAnswer: "나는 한국어를 배워요",
    },
    {
      sentenceWithBlank: "우리는 사진__ 찍었어요",
      english: "We took a photo",
      blankAnswer: "을",
      fullAnswer: "우리는 사진을 찍었어요",
    },
    {
      sentenceWithBlank: "그는 강아지__ 키웠어요",
      english: "He raised a dog",
      blankAnswer: "를",
      fullAnswer: "그는 강아지를 키웠어요",
    },
    {
      sentenceWithBlank: "저는 과일__ 먹었어요",
      english: "I ate fruit",
      blankAnswer: "을",
      fullAnswer: "저는 과일을 먹었어요",
    },
    {
      sentenceWithBlank: "그는 책__ 읽었어요",
      english: "He read a book",
      blankAnswer: "을",
      fullAnswer: "그는 책을 읽었어요",
    },
    {
      sentenceWithBlank: "나는 영화__ 보았어요",
      english: "I watched a movie",
      blankAnswer: "를",
      fullAnswer: "나는 영화를 보았어요",
    },
    {
      sentenceWithBlank: "우리는 음식__ 먹었어요",
      english: "We ate food",
      blankAnswer: "을",
      fullAnswer: "우리는 음식을 먹었어요",
    },
    {
      sentenceWithBlank: "그녀는 도서관__ 봤어요",
      english: "She saw the library",
      blankAnswer: "을",
      fullAnswer: "그녀는 도서관을 봤어요",
    },
    {
      sentenceWithBlank: "나는 공원__ 찾았어요",
      english: "I looked for the park",
      blankAnswer: "을",
      fullAnswer: "나는 공원을 찾았어요",
    },
    {
      sentenceWithBlank: "우리는 축구__ 했어요",
      english: "We played soccer",
      blankAnswer: "를",
      fullAnswer: "우리는 축구를 했어요",
    },
    {
      sentenceWithBlank: "너는 음악__ 들었어요",
      english: "You listened to music",
      blankAnswer: "을",
      fullAnswer: "너는 음악을 들었어요",
    },
    {
      sentenceWithBlank: "그는 쇼핑__ 갔어요",
      english: "He went shopping",
      blankAnswer: "을",
      fullAnswer: "그는 쇼핑을 갔어요",
    },
    {
      sentenceWithBlank: "나는 산__ 올라갔어요",
      english: "I climbed a mountain",
      blankAnswer: "을",
      fullAnswer: "나는 산을 올라갔어요",
    },
    {
      sentenceWithBlank: "우리는 여행__ 갔어요",
      english: "We went on a trip",
      blankAnswer: "을",
      fullAnswer: "우리는 여행을 갔어요",
    },
    {
      sentenceWithBlank: "그녀는 사진__ 찍었어요",
      english: "She took a photo",
      blankAnswer: "을",
      fullAnswer: "그녀는 사진을 찍었어요",
    },
    {
      sentenceWithBlank: "나는 건물__ 들어갔어요",
      english: "I entered a building",
      blankAnswer: "을",
      fullAnswer: "나는 건물을 들어갔어요",
    },
    {
      sentenceWithBlank: "우리는 동물원__ 가요",
      english: "We go to the zoo",
      blankAnswer: "을",
      fullAnswer: "우리는 동물원을 가요",
    },
  ],
};

const simplePresentConjugation = {
  title: "Simple Present 아요/어요 Conjugation",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "김선생님은 학생들에게 ___. (가르치다)",
      english: "Mr. Kim teaches students.",
      blankAnswer: "가르쳐요",
      fullAnswer: "김선생님은 학생들에게 가르쳐요.",
    },
    {
      sentenceWithBlank: "당신은 언제 학교에 ___. (가다)",
      english: "When do you go to school?",
      blankAnswer: "가요",
      fullAnswer: "당신은 언제 학교에 가요?",
    },
    {
      sentenceWithBlank: "우리는 주말에 영화를 ___. (보다)",
      english: "We watch movies on the weekend.",
      blankAnswer: "봐요",
      fullAnswer: "우리는 주말에 영화를 봐요.",
    },
    {
      sentenceWithBlank: "주원씨는 아침에 일찍 ___. (일어나다)",
      english: "Juwon gets up early in the morning.",
      blankAnswer: "일어나요",
      fullAnswer: "주원씨는 아침에 일찍 일어나요.",
    },
    {
      sentenceWithBlank: "저는 일요일에 교회에 ___. (가다)",
      english: "I go to church on Sundays.",
      blankAnswer: "가요",
      fullAnswer: "저는 일요일에 교회에 가요.",
    },
    {
      sentenceWithBlank: "그 사람은 매일 저녁에 산책을 ___. (하다)",
      english: "That person takes a walk every evening.",
      blankAnswer: "해요",
      fullAnswer: "그 사람은 매일 저녁에 산책을 해요.",
    },
    {
      sentenceWithBlank: "우리는 친구들과 함께 축구를 ___. (하다)",
      english: "We play soccer with friends.",
      blankAnswer: "해요",
      fullAnswer: "우리는 친구들과 함께 축구를 해요.",
    },
    {
      sentenceWithBlank: "당신은 언제 샤워를 ___. (하다)",
      english: "When do you take a shower?",
      blankAnswer: "해요",
      fullAnswer: "당신은 언제 샤워를 해요?",
    },
    {
      sentenceWithBlank: "그 사람은 언제 일을 ___. (시작하다)",
      english: "When does that person start work?",
      blankAnswer: "시작해요",
      fullAnswer: "그 사람은 언제 일을 시작해요?",
    },
    {
      sentenceWithBlank: "당신의 친구는 언제 학교를 ___. (끝내다)",
      english: "When does your friend finish school?",
      blankAnswer: "끝내요",
      fullAnswer: "당신의 친구는 언제 학교를 끝내요?",
    },
    {
      sentenceWithBlank: "주원씨는 언제 공부를 ___. (하다)",
      english: "When does Juwon study?",
      blankAnswer: "해요",
      fullAnswer: "주원씨는 언제 공부를 해요?",
    },
    {
      sentenceWithBlank: "김선생님은 언제 점심을 ___. (먹다)",
      english: "When does Mr. Kim eat lunch?",
      blankAnswer: "먹어요",
      fullAnswer: "김선생님은 언제 점심을 먹어요?",
    },
    {
      sentenceWithBlank: "우리는 매일 저녁에 식사를 ___. (하다)",
      english: "We have dinner every evening.",
      blankAnswer: "해요",
      fullAnswer: "우리는 매일 저녁에 식사를 해요.",
    },
    {
      sentenceWithBlank: "그 사람은 언제 자리에 ___. (앉다)",
      english: "When does that person sit down?",
      blankAnswer: "앉아요",
      fullAnswer: "그 사람은 언제 자리에 앉아요?",
    },
    {
      sentenceWithBlank: "저는 매일 운동을 ___. (하다)",
      english: "I exercise every day.",
      blankAnswer: "해요",
      fullAnswer: "저는 매일 운동을 해요.",
    },
    {
      sentenceWithBlank: "당신은 언제 친구를 ___. (만나다)",
      english: "When do you meet friends?",
      blankAnswer: "만나요",
      fullAnswer: "당신은 언제 친구를 만나요?",
    },
    {
      sentenceWithBlank: "김선생님은 언제 퇴근을 ___. (하다)",
      english: "When does Mr. Kim get off work?",
      blankAnswer: "해요",
      fullAnswer: "김선생님은 언제 퇴근을 해요?",
    },
    {
      sentenceWithBlank: "우리는 매일 아침에 아침식사를 ___. (먹다)",
      english: "We eat breakfast every morning.",
      blankAnswer: "먹어요",
      fullAnswer: "우리는 매일 아침에 아침식사를 먹어요.",
    },
    {
      sentenceWithBlank: "주원씨는 언제 숙제를 ___. (하다)",
      english: "When does Juwon do homework?",
      blankAnswer: "해요",
      fullAnswer: "주원씨는 언제 숙제를 해요?",
    },
    {
      sentenceWithBlank: "당신은 언제 일어나서 학교에 ___. (가다)",
      english: "When do you get up and go to school?",
      blankAnswer: "가요",
      fullAnswer: "당신은 언제 일어나서 학교에 가요?",
    },
    {
      sentenceWithBlank: "저는 언제 침대에 ___. (눕다)",
      english: "When do I lie down on the bed?",
      blankAnswer: "누워요",
      fullAnswer: "저는 언제 침대에 누워요?",
    },
    {
      sentenceWithBlank: "우리는 언제 휴식을 ___. (취하다)",
      english: "When do we take a break?",
      blankAnswer: "취해요",
      fullAnswer: "우리는 언제 휴식을 취해요?",
    },
    {
      sentenceWithBlank: "김선생님은 언제 책을 ___. (읽다)",
      english: "When does Mr. Kim read a book?",
      blankAnswer: "읽어요",
      fullAnswer: "김선생님은 언제 책을 읽어요?",
    },
    {
      sentenceWithBlank: "주원씨는 언제 연필을 ___. (깎다)",
      english: "When does Juwon sharpen a pencil?",
      blankAnswer: "깎아요",
      fullAnswer: "주원씨는 언제 연필을 깎아요?",
    },
    {
      sentenceWithBlank: "저는 언제 배를 ___. (타다)",
      english: "When do I ride a boat?",
      blankAnswer: "타요",
      fullAnswer: "저는 언제 배를 타요?",
    },
  ],
};

const simplePastConjugations = {
  title: "Simple Past Tense 아요/어요",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "나은씨는 언제 일어___? (나다)",
      english: "When did Naeun get up?",
      blankAnswer: "났어요",
      fullAnswer: "나은씨는 언제 일어났어요?",
    },
    {
      sentenceWithBlank: "저는 언제 점심을 ___. (먹다)",
      english: "When did I eat lunch?",
      blankAnswer: "먹었어요",
      fullAnswer: "저는 언제 점심을 먹었어요?",
    },
    {
      sentenceWithBlank: "우리는 언제 축구를 ___. (하다)",
      english: "When did we play soccer?",
      blankAnswer: "했어요",
      fullAnswer: "우리는 언제 축구를 했어요?",
    },
    {
      sentenceWithBlank: "그 사람은 언제 카페에 ___. (가다)",
      english: "When did that person go to the cafe?",
      blankAnswer: "갔어요",
      fullAnswer: "그 사람은 언제 카페에 갔어요?",
    },
    {
      sentenceWithBlank: "대진씨는 언제 공부를 ___. (하다)",
      english: "When did Daejin study?",
      blankAnswer: "했어요",
      fullAnswer: "대진씨는 언제 공부를 했어요?",
    },
    {
      sentenceWithBlank: "우리는 언제 노래를 ___. (부르다)",
      english: "When did we sing a song?",
      blankAnswer: "불렀어요",
      fullAnswer: "우리는 언제 노래를 불렀어요?",
    },
    {
      sentenceWithBlank: "당신은 언제 운동을 ___. (하다)",
      english: "When did you exercise?",
      blankAnswer: "했어요",
      fullAnswer: "당신은 언제 운동을 했어요?",
    },
    {
      sentenceWithBlank: "지현씨는 언제 집에 ___. (돌아오다)",
      english: "When did Jihyun come back home?",
      blankAnswer: "돌아왔어요",
      fullAnswer: "지현씨는 언제 집에 돌아왔어요?",
    },
    {
      sentenceWithBlank: "저는 언제 책을 ___. (읽다)",
      english: "When did I read a book?",
      blankAnswer: "읽었어요",
      fullAnswer: "저는 언제 책을 읽었어요?",
    },
    {
      sentenceWithBlank: "수진씨는 언제 수영을 ___. (하다)",
      english: "When did Soojin swim?",
      blankAnswer: "했어요",
      fullAnswer: "수진씨는 언제 수영을 했어요?",
    },
    {
      sentenceWithBlank: "당신은 언제 여행을 ___. (가다)",
      english: "When did you go on a trip?",
      blankAnswer: "갔어요",
      fullAnswer: "당신은 언제 여행을 갔어요?",
    },
    {
      sentenceWithBlank: "우리는 언제 영화를 ___. (보다)",
      english: "When did we watch a movie?",
      blankAnswer: "봤어요",
      fullAnswer: "우리는 언제 영화를 봤어요?",
    },
    {
      sentenceWithBlank: "민수씨는 언제 자전거를 ___. (타다)",
      english: "When did Minsu ride a bicycle?",
      blankAnswer: "탔어요",
      fullAnswer: "민수씨는 언제 자전거를 탔어요?",
    },
    {
      sentenceWithBlank: "저는 언제 스케치를 ___. (그리다)",
      english: "When did I draw a sketch?",
      blankAnswer: "그렸어요",
      fullAnswer: "저는 언제 스케치를 그렸어요?",
    },
    {
      sentenceWithBlank: "그 사람은 언제 이사를 ___. (가다)",
      english: "When did that person move?",
      blankAnswer: "갔어요",
      fullAnswer: "그 사람은 언제 이사를 갔어요?",
    },
    {
      sentenceWithBlank: "당신은 언제 학교를 ___. (끝내다)",
      english: "When did you finish school?",
      blankAnswer: "끝냈어요",
      fullAnswer: "당신은 언제 학교를 끝냈어요?",
    },
    {
      sentenceWithBlank: "지은씨는 언제 잠을 ___. (자다)",
      english: "When did Jieun sleep?",
      blankAnswer: "잤어요",
      fullAnswer: "지은씨는 언제 잠을 잤어요?",
    },
    {
      sentenceWithBlank: "저는 언제 집에 ___. (가다)",
      english: "When did I go home?",
      blankAnswer: "갔어요",
      fullAnswer: "저는 언제 집에 갔어요?",
    },
    {
      sentenceWithBlank: "우리는 언제 공원에 ___. (놀다)",
      english: "When did we play in the park?",
      blankAnswer: "놀았어요",
      fullAnswer: "우리는 언제 공원에 놀았어요?",
    },
  ],
};

const placeMarkers = {
  title: "blah",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "오늘 저는 공원__ 갔어요",
      english: "Today, I went to the park",
      blankAnswer: "에",
      fullAnswer: "오늘 저는 공원에 갔어요",
    },
    {
      sentenceWithBlank: "친구__ 전화했어요",
      english: "I called a friend",
      blankAnswer: "에",
      fullAnswer: "친구에 전화했어요",
    },
    {
      sentenceWithBlank: "집__ 가요",
      english: "I'm going home",
      blankAnswer: "에",
      fullAnswer: "집에 가요",
    },
    {
      sentenceWithBlank: "학교__ 있어요",
      english: "I am at school",
      blankAnswer: "에",
      fullAnswer: "학교에 있어요",
    },
    {
      sentenceWithBlank: "서점__ 가요",
      english: "I'm going to the bookstore",
      blankAnswer: "에",
      fullAnswer: "서점에 가요",
    },
    {
      sentenceWithBlank: "산__ 가고 싶어요",
      english: "I want to go to the mountains",
      blankAnswer: "에",
      fullAnswer: "산에 가고 싶어요",
    },
    {
      sentenceWithBlank: "김선생님은 사무실__ 계세요",
      english: "Mr. Kim is in the office",
      blankAnswer: "에",
      fullAnswer: "김선생님은 사무실에 계세요",
    },
    {
      sentenceWithBlank: "당신의 친구는 서울__ 살아요",
      english: "Your friend lives in Seoul",
      blankAnswer: "에",
      fullAnswer: "당신의 친구는 서울에 살아요",
    },
    {
      sentenceWithBlank: "우리는 도서관__ 공부하러 갔어요",
      english: "We went to the library to study",
      blankAnswer: "에",
      fullAnswer: "우리는 도서관에 공부하러 갔어요",
    },
    {
      sentenceWithBlank: "그 사람은 식당__ 있어요",
      english: "That person is at the restaurant",
      blankAnswer: "에",
      fullAnswer: "그 사람은 식당에 있어요",
    },
    {
      sentenceWithBlank: "주원씨는 학교__ 도착했어요",
      english: "Juwon arrived at school",
      blankAnswer: "에",
      fullAnswer: "주원씨는 학교에 도착했어요",
    },
    {
      sentenceWithBlank: "저는 영화관__ 영화를 봤어요",
      english: "I watched a movie at the movie theater",
      blankAnswer: "에",
      fullAnswer: "저는 영화관에 영화를 봤어요",
    },
    {
      sentenceWithBlank: "당신은 음악방__ 있어요",
      english: "You are in the music room",
      blankAnswer: "에",
      fullAnswer: "당신은 음악방에 있어요",
    },
    {
      sentenceWithBlank: "우리는 슈퍼마켓__ 장을 봤어요",
      english: "We went shopping at the supermarket",
      blankAnswer: "에",
      fullAnswer: "우리는 슈퍼마켓에 장을 봤어요",
    },
    {
      sentenceWithBlank: "그 사람은 버스 정류장__ 기다려요",
      english: "That person is waiting at the bus stop",
      blankAnswer: "에",
      fullAnswer: "그 사람은 버스 정류장에 기다려요",
    },
    {
      sentenceWithBlank: "저는 카페__ 책을 읽었어요",
      english: "I read a book at the cafe",
      blankAnswer: "에서",
      fullAnswer: "저는 카페에서 책을 읽었어요",
    },
    {
      sentenceWithBlank: "김선생님은 학교__ 가르치세요",
      english: "Mr. Kim teaches at school",
      blankAnswer: "에서",
      fullAnswer: "김선생님은 학교에서 가르치세요",
    },
    {
      sentenceWithBlank: "당신의 친구는 집__ 작업하고 있어요",
      english: "Your friend is working at home",
      blankAnswer: "에서",
      fullAnswer: "당신의 친구는 집에서 작업하고 있어요",
    },
    {
      sentenceWithBlank: "우리는 파티__ 노래를 불렀어요",
      english: "We sang songs at the party",
      blankAnswer: "에서",
      fullAnswer: "우리는 파티에서 노래를 불렀어요",
    },
    {
      sentenceWithBlank: "그 사람은 공항__ 비행기를 탔어요",
      english: "That person boarded the plane at the airport",
      blankAnswer: "에서",
      fullAnswer: "그 사람은 공항에서 비행기를 탔어요",
    },
    {
      sentenceWithBlank: "주원씨는 레스토랑__ 점심을 먹었어요",
      english: "Juwon ate lunch at the restaurant",
      blankAnswer: "에서",
      fullAnswer: "주원씨는 레스토랑에서 점심을 먹었어요",
    },
    {
      sentenceWithBlank: "저는 스튜디오__ 춤을 춰요",
      english: "I dance at the studio",
      blankAnswer: "에서",
      fullAnswer: "저는 스튜디오에서 춤을 춰요",
    },
    {
      sentenceWithBlank: "당신은 회사__ 일하고 있어요",
      english: "You are working at the company",
      blankAnswer: "에서",
      fullAnswer: "당신은 회사에서 일하고 있어요",
    },
    {
      sentenceWithBlank: "우리는 정원__ 피크닉을 즐겼어요",
      english: "We enjoyed a picnic in the garden",
      blankAnswer: "에서",
      fullAnswer: "우리는 정원에서 피크닉을 즐겼어요",
    },
    {
      sentenceWithBlank: "그 사람은 도서관__ 공부하고 있어요",
      english: "That person is studying at the library",
      blankAnswer: "에서",
      fullAnswer: "그 사람은 도서관에서 공부하고 있어요",
    },
  ],
};

const exerciseTypeInstructions = {
  transcribe: [
    "Transcription",
    "You will be shown a prompt in Korean. Simply copy the Korean exactly as it is shown.",
  ],
  fillblank: [
    "Fill-in-the-blank",
    "You will be presented with a prompt and asked to type the missing word(s) that complete the sentence correctly. You have the option to modify the settings below, allowing you to either provide the missing word(s) or type out the entire sentence based on your preference.",
  ],
  typingtest: [
    "Typing Test",
    "You will be shown a text in Korean. Type the text exactly as shown. Your typing speed will be calculated at the end of the exercise.",
  ],
  grammar: [
    "Grammar Practice",
    "You will be shown a word and asked to modify the word following the instructions",
  ],
  jumble: [
    "Mixed Up Sentences",
    "You will be shown a sentence where the words are completely out of order. Rewrite the sentence in the correct word order.",
  ],
};

// const grammarExercises = {
//   title: "Grammar Exercises",
//   type: "grammar",
//   items: [],
// }

// const jumbleExercises = {
//   title: "Mixed Up Sentences",
//   type: "jumble",
//   items: [],
// }

// const wordChoiceExercises = {
//   title: "Word Choice",
//   type: "fillblank",
//   items: [],
// }

const basicVocabCategories = {
  title: "Basic Vocabulary",
  type: "transcribe",
  items: [],
};
basicVocabCategories.items.push(countries);
basicVocabCategories.items.push(foodItems);
basicVocabCategories.items.push(natureTerms);
basicVocabCategories.items.push(animals);
basicVocabCategories.items.push(colors);
basicVocabCategories.items.push(greetings);
basicVocabCategories.items.push(sea);
basicVocabCategories.items.push(space);
basicVocabCategories.items.push(technology);
basicVocabCategories.items.push(sports);

class ExerciseCategory {
  constructor(title) {
    this.title = title;
    // maybe I will add a field for explanation later
    this.items = [];
  }
}

const grammarExercises = new ExerciseCategory("Grammar Exercises");
const jumbleExercises = new ExerciseCategory("Mixed Up Sentences");
const wordChoiceExercises = new ExerciseCategory("Word Choice Exercises");
const basicTypingExercises = new ExerciseCategory("Basic Typing Exercises");

basicTypingExercises.items.push(countries);
basicTypingExercises.items.push(foodItems);
basicTypingExercises.items.push(natureTerms);
basicTypingExercises.items.push(animals);
basicTypingExercises.items.push(colors);
basicTypingExercises.items.push(greetings);
basicTypingExercises.items.push(sea);
basicTypingExercises.items.push(space);
basicTypingExercises.items.push(technology);
basicTypingExercises.items.push(sports);

// Make six basic categories
// Basic typing exercises
// Word Choice
// Grammar
// Mixed up sentences
//

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
