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

const familyWordChoice = {
  title: "Family",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "우리 ___는 맛있는 음식을 만들어요.",
      english: "Our mother makes delicious food.",
      blankAnswer: "엄마",
      fullAnswer: "우리 엄마는 맛있는 음식을 만들어요.",
    },
    {
      sentenceWithBlank: "민준씨의 ___는 교사예요.",
      english: "Minjun's father is a teacher.",
      blankAnswer: "아빠",
      fullAnswer: "민준씨의 아빠는 교사예요.",
    },
    {
      sentenceWithBlank: "제 ___은 사진을 찍는 것을 좋아해요.",
      english: "My older brother likes taking photos.",
      blankAnswer: "형",
      fullAnswer: "제 형은 사진을 찍는 것을 좋아해요.",
    },
    {
      sentenceWithBlank: "지은씨의 ___은 항상 웃어요.",
      english: "Jieun's younger sister always smiles.",
      blankAnswer: "동생",
      fullAnswer: "지은씨의 동생은 항상 웃어요.",
    },
    {
      sentenceWithBlank: "우리 ___는 항상 저를 도와줘요.",
      english: "Our grandmother always helps me.",
      blankAnswer: "할머니",
      fullAnswer: "우리 할머니는 항상 저를 도와줘요.",
    },
    {
      sentenceWithBlank: "철수씨의 ___은 학생이에요.",
      english: "Chulsoo's son is a student.",
      blankAnswer: "아들",
      fullAnswer: "철수씨의 아들은 학생이에요.",
    },
    {
      sentenceWithBlank: "영희씨는 ___과 함께 살아요.",
      english: "Younghee lives with her husband.",
      blankAnswer: "남편",
      fullAnswer: "영희씨는 남편과 함께 살아요.",
    },
    {
      sentenceWithBlank: "현우씨는 ___가 이뻐요.",
      english: "Hyunwoo's wife is beautiful.",
      blankAnswer: "아내",
      fullAnswer: "현우씨는 아내가 이뻐요.",
    },
    {
      sentenceWithBlank: "제 ___은 항상 공부하고 있어요.",
      english: "My cousin is always studying.",
      blankAnswer: "사촌",
      fullAnswer: "제 사촌은 항상 공부하고 있어요.",
    },
    {
      sentenceWithBlank: "민지씨의 ___는 그림을 그리는 것을 좋아해요.",
      english: "Minji's aunt likes drawing pictures.",
      blankAnswer: "이모",
      fullAnswer: "민지씨의 이모는 그림을 그리는 것을 좋아해요.",
    },
    {
      sentenceWithBlank: "유진씨의 ___은 미국에 살아요.",
      english: "Yujin's uncle lives in America.",
      blankAnswer: "삼촌",
      fullAnswer: "유진씨의 삼촌은 미국에 살아요.",
    },
    {
      sentenceWithBlank: "은지씨는 ___와 많이 닮았어요.",
      english: "Eunji looks a lot like her older sister.",
      blankAnswer: "언니",
      fullAnswer: "은지씨는 언니와 많이 닮았어요.",
    },
    {
      sentenceWithBlank: "저희 ___는 친절해요.",
      english: "Our aunt (from father's side) is kind.",
      blankAnswer: "고모",
      fullAnswer: "저희 고모는 친절해요.",
    },
    {
      sentenceWithBlank: "지민씨의 ___는 서울에 살아요.",
      english: "Jimin's nephew lives in Seoul.",
      blankAnswer: "조카",
      fullAnswer: "지민씨의 조카는 서울에 살아요.",
    },
    {
      sentenceWithBlank: "우리 ___은 많이 똑똑해요.",
      english: "Our younger brother is very smart.",
      blankAnswer: "동생",
      fullAnswer: "우리 동생은 많이 똑똑해요.",
    },
    {
      sentenceWithBlank: "나의 ___는 요리사예요.",
      english: "My father-in-law is a chef.",
      blankAnswer: "시아버지",
      fullAnswer: "나의 시아버지는 요리사예요.",
    },
    {
      sentenceWithBlank: "태민씨의 ___는 한국에서 왔어요.",
      english: "Taemin's maternal grandfather came from Korea.",
      blankAnswer: "외할아버지",
      fullAnswer: "태민씨의 외할아버지는 한국에서 왔어요.",
    },
    {
      sentenceWithBlank: "나의 ___는 공항에 있어요.",
      english: "My wife is at the airport.",
      blankAnswer: "아내",
      fullAnswer: "나의 아내는 공항에 있어요.",
    },
    {
      sentenceWithBlank: "제 ___은 피아노를 칠 수 있어요.",
      english: "My daughter can play the piano.",
      blankAnswer: "딸",
      fullAnswer: "제 딸은 피아노를 칠 수 있어요.",
    },
    {
      sentenceWithBlank: "현수씨의 ___는 축구를 좋아해요.",
      english: "Hyunsoo's son-in-law likes soccer.",
      blankAnswer: "사위",
      fullAnswer: "현수씨의 사위는 축구를 좋아해요.",
    },
  ],
};

const sportsWordChoice = {
  title: "Sports and Fitness",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "윤지씨는 ___를 매일 연습해요.",
      english: "Yoonji practices tennis every day.",
      blankAnswer: "테니스",
      fullAnswer: "윤지씨는 테니스을 매일 연습해요.",
    },
    {
      sentenceWithBlank: "준호씨는 ___를 좋아해요.",
      english: "Junho likes basketball.",
      blankAnswer: "농구",
      fullAnswer: "준호씨는 농구를 좋아해요.",
    },
    {
      sentenceWithBlank: "민선씨는 ___을 배우고 있어요.",
      english: "Minseon is learning swimming.",
      blankAnswer: "수영",
      fullAnswer: "민선씨는 수영을 배우고 있어요.",
    },
    {
      sentenceWithBlank: "우리 언니는 ___ 선수예요.",
      english: "Our older sister is a volleyball player.",
      blankAnswer: "배구",
      fullAnswer: "우리 언니는 배구 선수예요.",
    },
    {
      sentenceWithBlank: "재현씨는 ___을 자주 뛰어요.",
      english: "Jaehyun often runs marathons.",
      blankAnswer: "마라톤",
      fullAnswer: "재현씨는 마라톤을 자주 뛰어요.",
    },
    {
      sentenceWithBlank: "호진씨는 ___가 힘들어요.",
      english: "Hojin finds weightlifting difficult.",
      blankAnswer: "역도",
      fullAnswer: "호진씨는 역도가 힘들어요.",
    },
    {
      sentenceWithBlank: "지훈씨는 ___를 가르쳐요.",
      english: "Jihoon teaches yoga.",
      blankAnswer: "요가",
      fullAnswer: "지훈씨는 요가를 가르쳐요.",
    },
    {
      sentenceWithBlank: "소영씨는 ___를 잘 타요.",
      english: "Soyoung is good at riding a bicycle.",
      blankAnswer: "자전거",
      fullAnswer: "소영씨는 자전거를 잘 타요.",
    },
    {
      sentenceWithBlank: "준영씨는 ___을 원해요.",
      english: "Junyoung wants a treadmill.",
      blankAnswer: "트레드밀",
      fullAnswer: "준영씨는 트레드밀을 원해요.",
    },
    {
      sentenceWithBlank: "우리 팀은 ___에서 우승했어요.",
      english: "Our team won in soccer.",
      blankAnswer: "축구",
      fullAnswer: "우리 팀은 축구에서 우승했어요.",
    },
    {
      sentenceWithBlank: "선미씨는 ___을 배워요.",
      english: "Sunmi learns aerobics.",
      blankAnswer: "에어로빅",
      fullAnswer: "선미씨는 에어로빅을 배워요.",
    },
    {
      sentenceWithBlank: "민수씨는 ___을 시청해요.",
      english: "Minsu watches boxing.",
      blankAnswer: "복싱",
      fullAnswer: "민수씨는 복싱을 시청해요.",
    },
    {
      sentenceWithBlank: "예진씨는 ___을 싫어해요.",
      english: "Yejin dislikes wrestling.",
      blankAnswer: "레슬링",
      fullAnswer: "예진씨는 레슬링을 싫어해요.",
    },
    {
      sentenceWithBlank: "우리 동네에는 ___장이 있어요.",
      english: "There is a golf course in our neighborhood.",
      blankAnswer: "골프",
      fullAnswer: "우리 동네에는 골프장이 있어요.",
    },

    {
      sentenceWithBlank: "민철씨는 ___을 배우고 싶어요.",
      english: "Mincheol wants to learn fencing.",
      blankAnswer: "펜싱",
      fullAnswer: "민철씨는 펜싱을 배우고 싶어요.",
    },
    {
      sentenceWithBlank: "하늘씨는 ___를 가르치지 않아요.",
      english: "Haneul does not teach skiing.",
      blankAnswer: "스키",
      fullAnswer: "하늘씨는 스키를 가르치지 않아요.",
    },
    {
      sentenceWithBlank: "은주씨는 ___가 쉽지 않아요.",
      english: "Eunju does not find gymnastics easy.",
      blankAnswer: "체조",
      fullAnswer: "은주씨는 체조가 쉽지 않아요.",
    },
    {
      sentenceWithBlank: "진영씨는 ___을 잘하고 싶어요.",
      english: "Jinyoung wants to be good at archery.",
      blankAnswer: "양궁",
      fullAnswer: "진영씨는 양궁을 잘하고 싶어요.",
    },
    {
      sentenceWithBlank: "우리 친구들은 ___를 보러 가요.",
      english: "Our friends go to watch baseball.",
      blankAnswer: "야구",
      fullAnswer: "우리 친구들은 야구를 보러 가요.",
    },
  ],
};

const jobsWordChoice = {
  title: "Jobs and Professions",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "김선생님은 의학을 전공해서 ___입니다.",
      english: "Teacher Kim majored in medicine, so he is a doctor.",
      blankAnswer: "의사",
      fullAnswer: "김선생님은 의학을 전공해서 의사입니다.",
    },
    {
      sentenceWithBlank: "영희씨는 ___에서 고객을 돕는 일을 해요.",
      english: "Younghee helps customers at a bank.",
      blankAnswer: "은행",
      fullAnswer: "영희씨는 은행에서 고객을 돕는 일을 해요.",
    },
    {
      sentenceWithBlank: "우리 아빠는 건물을 짓는 ___예요.",
      english: "Our father is an engineer who builds buildings.",
      blankAnswer: "공학자",
      fullAnswer: "우리 아빠는 건물을 짓는 공학자예요.",
    },
    {
      sentenceWithBlank: "미영씨는 병원에서 환자를 돌보는 ___예요.",
      english: "Miyoung is a nurse who takes care of patients at the hospital.",
      blankAnswer: "간호사",
      fullAnswer: "미영씨는 병원에서 환자를 돌보는 간호사예요.",
    },
    {
      sentenceWithBlank: "혜진씨는 ___에서 일해요.",
      english: "Hyejin works in a company.",
      blankAnswer: "회사",
      fullAnswer: "혜진씨는 회사에서 일해요.",
    },

    {
      sentenceWithBlank: "지훈씨는 ___예요.",
      english: "Jihoon is a pilot.",
      blankAnswer: "조종사",
      fullAnswer: "지훈씨는 조종사예요.",
    },
    {
      sentenceWithBlank: "민수씨는 ___에서 일해요.",
      english: "Minsu works at a restaurant.",
      blankAnswer: "식당",
      fullAnswer: "민수씨는 식당에서 일해요.",
    },

    {
      sentenceWithBlank: "유나씨는 ___예요.",
      english: "Yuna is a journalist.",
      blankAnswer: "기자",
      fullAnswer: "유나씨는 기자예요.",
    },
    {
      sentenceWithBlank: "서연씨는 ___에서 일해요.",
      english: "Seoyeon works at a school.",
      blankAnswer: "학교",
      fullAnswer: "서연씨는 학교에서 일해요.",
    },
    {
      sentenceWithBlank: "진우씨는 ___이에요.",
      english: "Jinwoo is a firefighter.",
      blankAnswer: "소방관",
      fullAnswer: "진우씨는 소방관이에요.",
    },
    {
      sentenceWithBlank: "하늘씨는 ___에서 일해요.",
      english: "Haneul works at a library.",
      blankAnswer: "도서관",
      fullAnswer: "하늘씨는 도서관에서 일해요.",
    },
    {
      sentenceWithBlank: "지민씨는 ___이에요.",
      english: "Jimin is a policeman.",
      blankAnswer: "경찰관",
      fullAnswer: "지민씨는 경찰관이에요.",
    },
    {
      sentenceWithBlank: "석진씨는 ___에서 일해요.",
      english: "Seokjin works at a bakery.",
      blankAnswer: "빵집",
      fullAnswer: "석진씨는 빵집에서 일해요.",
    },
    {
      sentenceWithBlank: "나래씨는 ___예요.",
      english: "Narae is a chef.",
      blankAnswer: "요리사",
      fullAnswer: "나래씨는 요리사예요.",
    },
    {
      sentenceWithBlank: "도윤씨는 ___에서 일해요.",
      english: "Doyun works at a post office.",
      blankAnswer: "우체국",
      fullAnswer: "도윤씨는 우체국에서 일해요.",
    },
    {
      sentenceWithBlank: "하은씨는 ___예요.",
      english: "Haeun is an architect.",
      blankAnswer: "건축가",
      fullAnswer: "하은씨는 건축가예요.",
    },
    {
      sentenceWithBlank: "소희씨는 ___에서 일해요.",
      english: "Sohee works at a movie theater.",
      blankAnswer: "영화관",
      fullAnswer: "소희씨는 영화관에서 일해요.",
    },

    {
      sentenceWithBlank: "철수씨는 ___가 되고 싶어요.",
      english: "Chulsoo wants to become a lawyer.",
      blankAnswer: "변호사",
      fullAnswer: "철수씨는 변호사가 되고 싶어요.",
    },
    {
      sentenceWithBlank: "대진씨는 ___의 일을 좋아해요.",
      english: "Daejin likes the work of a pharmacist.",
      blankAnswer: "약사",
      fullAnswer: "대진씨는 약사의 일을 좋아해요.",
    },
    {
      sentenceWithBlank: "태현씨는 ___의 공부가 재미있어요.",
      english: "Taehyun finds the study of science interesting.",
      blankAnswer: "과학",
      fullAnswer: "태현씨는 과학의 공부가 재미있어요.",
    },
  ],
};

const languageLearningWordChoice = {
  title: "Language Learning",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "한국말의 ___은 어려워요.",
      english: "Korean grammar is difficult.",
      blankAnswer: "문법",
      fullAnswer: "한국말의 문법은 어려워요.",
    },
    {
      sentenceWithBlank: "저는 매일 ___를 해요.",
      english: "I study every day.",
      blankAnswer: "공부",
      fullAnswer: "저는 매일 공부를 해요.",
    },
    {
      sentenceWithBlank: "박선생님은 ___를 가르쳐요.",
      english: "Teacher Park teaches Korean.",
      blankAnswer: "한국어",
      fullAnswer: "박선생님은 한국어를 가르쳐요.",
    },
    {
      sentenceWithBlank: "이민수씨는 ___를 많이 씁니다.",
      english: "Minsoo Lee writes a lot of words.",
      blankAnswer: "단어",
      fullAnswer: "이민수씨는 단어를 많이 씁니다.",
    },
    {
      sentenceWithBlank: "우리는 ___를 연습해야 돼요.",
      english: "We need to practice pronunciation.",
      blankAnswer: "발음",
      fullAnswer: "우리는 발음을 연습해야 돼요.",
    },
    {
      sentenceWithBlank: "김삼순씨는 ___를 읽어요.",
      english: "Samsun Kim reads the textbook.",
      blankAnswer: "교과서",
      fullAnswer: "김삼순씨는 교과서를 읽어요.",
    },
    {
      sentenceWithBlank: "저는 ___을 배워요.",
      english: "I learn linguistics.",
      blankAnswer: "언어학",
      fullAnswer: "저는 언어학을 배워요.",
    },
    {
      sentenceWithBlank: "대진씨는 ___을 고쳐요.",
      english: "Daejin corrects the sentence.",
      blankAnswer: "문장",
      fullAnswer: "대진씨는 문장을 고쳐요.",
    },
    {
      sentenceWithBlank: "우리는 ___를 들어요.",
      english: "We listen to the listening practice.",
      blankAnswer: "듣기",
      fullAnswer: "우리는 듣기를 들어요.",
    },
    {
      sentenceWithBlank: "김선영씨는 ___를 공부해요.",
      english: "Sunyoung Kim studies conversation.",
      blankAnswer: "회화",
      fullAnswer: "김선영씨는 회화를 공부해요.",
    },
    {
      sentenceWithBlank: "이민지씨는 ___를 가르칩니다.",
      english: "Minji Lee teaches vocabulary.",
      blankAnswer: "어휘",
      fullAnswer: "이민지씨는 어휘를 가르칩니다.",
    },
    {
      sentenceWithBlank: "저는 ___을 좋아해요.",
      english: "I like phrases.",
      blankAnswer: "구문",
      fullAnswer: "저는 구문을 좋아해요.",
    },
    {
      sentenceWithBlank: "이수지씨는 ___를 많이 사용해요.",
      english: "Sooji Lee uses a lot of idioms.",
      blankAnswer: "관용구",
      fullAnswer: "이수지씨는 관용구를 많이 사용해요.",
    },
    {
      sentenceWithBlank: "우리는 ___을 읽어요.",
      english: "We read the script.",
      blankAnswer: "대본",
      fullAnswer: "우리는 대본을 읽어요.",
    },
    {
      sentenceWithBlank: "조영희씨는 ___를 듣는 걸 좋아해요.",
      english: "Younghee Cho likes listening to the dialogue.",
      blankAnswer: "대화",
      fullAnswer: "조영희씨는 대화를 듣는 걸 좋아해요.",
    },
    {
      sentenceWithBlank: "저는 ___를 연습해요.",
      english: "I practice writing.",
      blankAnswer: "쓰기",
      fullAnswer: "저는 쓰기를 연습해요.",
    },
    {
      sentenceWithBlank: "우리는 ___를 고쳐요.",
      english: "We correct the errors.",
      blankAnswer: "오류",
      fullAnswer: "우리는 오류를 고쳐요.",
    },
    {
      sentenceWithBlank: "김민준씨는 ___를 사용해요.",
      english: "Minjoon Kim uses the translator.",
      blankAnswer: "번역기",
      fullAnswer: "김민준씨는 번역기를 사용해요.",
    },
    {
      sentenceWithBlank: "저는 ___을 읽어요.",
      english: "I read the subtitles.",
      blankAnswer: "자막",
      fullAnswer: "저는 자막을 읽어요.",
    },
    {
      sentenceWithBlank: "우리는 ___을 배워요.",
      english: "We learn the alphabet.",
      blankAnswer: "알파벳",
      fullAnswer: "우리는 알파벳을 배워요.",
    },
  ],
};

const transportationWordChoice = {
  title: "Transportation",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "저는 __로 출근해요",
      english: "I commute by subway",
      blankAnswer: "지하철",
      fullAnswer: "저는 지하철로 출근해요",
    },

    {
      sentenceWithBlank: "우리는 __를 타고 학교에 갑니다",
      english: "We go to school by bus",
      blankAnswer: "버스",
      fullAnswer: "우리는 버스를 타고 학교에 갑니다",
    },
    {
      sentenceWithBlank: "저는 __를 타는 것을 좋아해요",
      english: "I like riding a bicycle",
      blankAnswer: "자전거",
      fullAnswer: "저는 자전거를 타는 것을 좋아해요",
    },
    {
      sentenceWithBlank: "__를 확인하세요",
      english: "Check the time table",
      blankAnswer: "시간표",
      fullAnswer: "__를 시간표를 확인하세요",
    },
    {
      sentenceWithBlank: "제가 __를 잃어버렸어요",
      english: "I lost my ticket",
      blankAnswer: "표",
      fullAnswer: "제가 표를 잃어버렸어요",
    },

    {
      sentenceWithBlank: "__가 지연되었습니다",
      english: "The flight has been delayed",
      blankAnswer: "비행기",
      fullAnswer: "__가 비행기가 지연되었습니다",
    },
    {
      sentenceWithBlank: "저는 __를 타고 서울에 왔어요",
      english: "I came to Seoul by boat",
      blankAnswer: "배",
      fullAnswer: "저는 배를 타고 서울에 왔어요",
    },
    {
      sentenceWithBlank: "__가 바빠요",
      english: "The station is busy",
      blankAnswer: "역",
      fullAnswer: "__가 역이 바빠요",
    },
    {
      sentenceWithBlank: "저는 __를 타고 갈 거예요",
      english: "I will go by taxi",
      blankAnswer: "택시",
      fullAnswer: "저는 택시를 타고 갈 거예요",
    },

    {
      sentenceWithBlank: "빠르게 갈려면 __를 타세요",
      english: "If you want to go fast, take the high-speed train",
      blankAnswer: "고속열차",
      fullAnswer: "빠르게 갈려면 고속열차를 타세요",
    },

    {
      sentenceWithBlank: "__를 찾을 수 없어요",
      english: "I can't find the map",
      blankAnswer: "지도",
      fullAnswer: "__를 지도를 찾을 수 없어요",
    },
    {
      sentenceWithBlank: "저는 __를 타는 것을 두려워해요",
      english: "I am afraid of riding a motorcycle",
      blankAnswer: "오토바이",
      fullAnswer: "저는 오토바이를 타는 것을 두려워해요",
    },
    {
      sentenceWithBlank: "__가 필요합니다",
      english: "I need a passport",
      blankAnswer: "여권",
      fullAnswer: "__가 여권이 필요합니다",
    },
    {
      sentenceWithBlank: "저는 __를 사고 싶어요",
      english: "I want to buy a scooter",
      blankAnswer: "스쿠터",
      fullAnswer: "저는 스쿠터를 사고 싶어요",
    },
    {
      sentenceWithBlank: "제가 __를 좋아합니다",
      english: "I like hot air balloons",
      blankAnswer: "열기구",
      fullAnswer: "제가 열기구를 좋아합니다",
    },
    {
      sentenceWithBlank: "__를 타고 갈 준비가 되었어요",
      english: "I am ready to go by tram",
      blankAnswer: "트램",
      fullAnswer: "__를 트램을 타고 갈 준비가 되었어요",
    },
    {
      sentenceWithBlank: "저는 여행할 때 보통 __를 이용해요",
      english: "I usually use a train when traveling",
      blankAnswer: "기차",
      fullAnswer: "저는 여행할 때 보통 기차를 이용해요",
    },
    {
      sentenceWithBlank: "저는 __ 운전하는 것을 좋아해요",
      english: "I like driving a car",
      blankAnswer: "차",
      fullAnswer: "저는 차를 운전하는 것을 좋아해요",
    },
  ],
};

const hobbiesWordChoice = {
  title: "Hobbies",
  type: "fillblank",
  items: [
    {
      sentenceWithBlank: "김선생님의 취미는 __예요",
      english: "Teacher Kim's hobby is reading",
      blankAnswer: "독서",
      fullAnswer: "김선생님의 취미는 독서예요",
    },
    {
      sentenceWithBlank: "우리 아빠는 __을 좋아해요",
      english: "Our dad likes music",
      blankAnswer: "음악",
      fullAnswer: "우리 아빠는 음악을 좋아해요",
    },
    {
      sentenceWithBlank: "주원씨는 __를 즐겨요",
      english: "Juwon enjoys soccer",
      blankAnswer: "축구",
      fullAnswer: "주원씨는 축구를 즐겨요",
    },
    {
      sentenceWithBlank: "__은 제 취미 중 하나예요",
      english: "Swimming is one of my hobbies",
      blankAnswer: "수영",
      fullAnswer: "수영은 제 취미 중 하나예요",
    },
    {
      sentenceWithBlank: "저는 __를 좋아해요",
      english: "I like cooking",
      blankAnswer: "요리",
      fullAnswer: "저는 요리를 좋아해요",
    },
    {
      sentenceWithBlank: "이소영씨는 __을 즐깁니다",
      english: "Ms. Lee Soyoung enjoys hiking",
      blankAnswer: "등산",
      fullAnswer: "이소영씨는 등산을 즐깁니다",
    },
    {
      sentenceWithBlank: "저는 __를 잘해요",
      english: "I'm good at fishing",
      blankAnswer: "낚시",
      fullAnswer: "저는 낚시를 잘해요",
    },
    {
      sentenceWithBlank: "저의 취미는 __예요",
      english: "My hobby is gardening",
      blankAnswer: "원예",
      fullAnswer: "저의 취미는 원예예요",
    },
    {
      sentenceWithBlank: "대진씨는 __를 좋아해요",
      english: "Daejin likes jogging",
      blankAnswer: "조깅",
      fullAnswer: "대진씨는 조깅을 좋아해요",
    },
    {
      sentenceWithBlank: "__는 제 취미예요",
      english: "Traveling is my hobby",
      blankAnswer: "여행",
      fullAnswer: "__는 여행이 제 취미예요",
    },
    {
      sentenceWithBlank: "저는 __에 관심이 많아요",
      english: "I am very interested in yoga",
      blankAnswer: "요가",
      fullAnswer: "저는 요가에 관심이 많아요",
    },
    {
      sentenceWithBlank: "예진씨는 __을 좋아해요",
      english: "Ye Jin likes knitting",
      blankAnswer: "뜨개질",
      fullAnswer: "예진씨는 뜨개질을 좋아해요",
    },
    {
      sentenceWithBlank: "__는 제 취미 중 하나예요",
      english: "Cycling is one of my hobbies",
      blankAnswer: "자전거 타기",
      fullAnswer: "자전거 타기가는 제 취미 중 하나예요",
    },
    {
      sentenceWithBlank: "저는 __을 그리는 것을 사랑해요",
      english: "I love painting",
      blankAnswer: "그림",
      fullAnswer: "저는 그림을 그리는 것을 사랑해요",
    },
    {
      sentenceWithBlank: "우리 엄마는 __를 부르는 것이 취미예요",
      english: "My mom's hobby is singing",
      blankAnswer: "노래",
      fullAnswer: "우리 엄마는 노래를 부르는 것이 취미예요",
    },
    {
      sentenceWithBlank: "박선생님은 __를 하는 것을 좋아해요",
      english: "Teacher Park likes dancing",
      blankAnswer: "댄스",
      fullAnswer: "박선생님은 댄스를 하는 것을 좋아해요",
    },
    {
      sentenceWithBlank: "민호씨는 __을 찍는 것을 사랑해요",
      english: "Minho loves photography",
      blankAnswer: "사진",
      fullAnswer: "이민호씨는 사진을 찍는 것을 사랑해요",
    },
    {
      sentenceWithBlank: "저의 취미는 __를 보는 것예요",
      english: "Watching movies is my hobby",
      blankAnswer: "영화",
      fullAnswer: "저의 취미는 영화를 보는 것예요",
    },
    {
      sentenceWithBlank: "저는 __를 치는 것을 좋아합니다",
      english: "I like playing the piano",
      blankAnswer: "피아노",
      fullAnswer: "저는 피아노를 치는 것을 좋아합니다",
    },
    {
      sentenceWithBlank: "제가 좋아하는 것은 __를 수집하는 것예요",
      english: "What I like is collecting stamps",
      blankAnswer: "우표",
      fullAnswer: "제가 좋아하는 것은 우표를 수집하는 것예요",
    },
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

const futureConjugation = {
  title: "Future (으)ㄹ 거예요 Conjugation",
  type: "grammar",
  promptLabel: "Change the verb shown to its future (으)ㄹ 거예요 form.",
  items: [
    {
      sentenceWithBlank: "우리는 피아노를 ___. (치다)",
      english: "We will play the piano.",
      blankAnswer: "칠 거예요",
      fullAnswer: "우리는 피아노를 칠 거예요.",
    },
    {
      sentenceWithBlank: "민수씨는 커피를 ___. (마시다)",
      english: "Minsoo will drink coffee.",
      blankAnswer: "마실 거예요",
      fullAnswer: "민수씨는 커피를 마실 거예요.",
    },
    {
      sentenceWithBlank: "삼순씨는 텔레비전을 ___. (보다)",
      english: "Samsun will watch television.",
      blankAnswer: "볼 거예요",
      fullAnswer: "삼순씨는 텔레비전을 볼 거예요.",
    },
    {
      sentenceWithBlank: "박선생님은 아침에 운동을 ___. (하다)",
      english: "Teacher Park will exercise in the morning.",
      blankAnswer: "할 거예요",
      fullAnswer: "박선생님은 아침에 운동을 할 거예요.",
    },
    {
      sentenceWithBlank: "우리는 축구를 ___. (하다)",
      english: "We will play soccer.",
      blankAnswer: "할 거예요",
      fullAnswer: "우리는 축구를 할 거예요.",
    },
    {
      sentenceWithBlank: "영희씨는 양파를 ___. (먹다)",
      english: "Younghee will eat onions.",
      blankAnswer: "먹을 거예요",
      fullAnswer: "영희씨는 양파를 먹을 거예요.",
    },
    {
      sentenceWithBlank: "석진씨는 영어를 ___. (공부하다)",
      english: "Seokjin will study English.",
      blankAnswer: "공부할 거예요",
      fullAnswer: "석진씨는 영어를 공부할 거예요.",
    },
    {
      sentenceWithBlank: "우리는 매일 저녁에 산책을 ___. (하다)",
      english: "We will take a walk every evening.",
      blankAnswer: "할 거예요",
      fullAnswer: "우리는 매일 저녁에 산책을 할 거예요.",
    },
    {
      sentenceWithBlank: "현우씨는 돼지고기를 ___. (먹다)",
      english: "Hyunwoo will eat pork.",
      blankAnswer: "먹을 거예요",
      fullAnswer: "현우씨는 돼지고기를 먹을 거예요.",
    },
    {
      sentenceWithBlank: "지민씨는 집에 ___. (가다)",
      english: "Jimin will go home.",
      blankAnswer: "갈 거예요",
      fullAnswer: "지민씨는 집에 갈 거예요.",
    },
    {
      sentenceWithBlank: "우리는 학교에 ___. (가다)",
      english: "We will go to school.",
      blankAnswer: "갈 거예요",
      fullAnswer: "우리는 학교에 갈 거예요.",
    },
    {
      sentenceWithBlank: "태형씨는 차를 ___. (운전하다)",
      english: "Taehyung will drive a car.",
      blankAnswer: "운전할 거예요",
      fullAnswer: "태형씨는 차를 운전할 거예요.",
    },
    {
      sentenceWithBlank: "우리는 음악을 ___. (듣다)",
      english: "We will listen to music.",
      blankAnswer: "들을 거예요",
      fullAnswer: "우리는 음악을 들을 거예요.",
    },
    {
      sentenceWithBlank: "이민수씨는 공을 ___. (차다)",
      english: "Minsoo Lee will kick the ball.",
      blankAnswer: "찰 거예요",
      fullAnswer: "이민수씨는 공을 찰 거예요.",
    },
    {
      sentenceWithBlank: "우리는 여름에 여행을 ___. (하다)",
      english: "We will travel in the summer.",
      blankAnswer: "할 거예요",
      fullAnswer: "우리는 여름에 여행을 할 거예요.",
    },
    {
      sentenceWithBlank: "선영씨는 책을 ___. (읽다)",
      english: "Sunyoung will read a book.",
      blankAnswer: "읽을 거예요",
      fullAnswer: "선영씨는 책을 읽을 거예요.",
    },
    {
      sentenceWithBlank: "대진씨는 사진을 ___. (찍다)",
      english: "Daejin will take a photo.",
      blankAnswer: "찍을 거예요",
      fullAnswer: "대진씨는 사진을 찍을 거예요.",
    },
    {
      sentenceWithBlank: "우리는 영화를 ___. (보다)",
      english: "We will watch a movie.",
      blankAnswer: "볼 거예요",
      fullAnswer: "우리는 영화를 볼 거예요.",
    },
    {
      sentenceWithBlank: "영수씨는 수영을 ___. (하다)",
      english: "Youngsoo will swim.",
      blankAnswer: "할 거예요",
      fullAnswer: "영수씨는 수영을 할 거예요.",
    },
    {
      sentenceWithBlank: "우리는 저녁을 ___. (먹다)",
      english: "We will eat dinner.",
      blankAnswer: "먹을 거예요",
      fullAnswer: "우리는 저녁을 먹을 거예요.",
    },
  ],
};

const simplePresentConjugation = {
  title: "Simple Present 아요/어요 Conjugation",
  type: "grammar",
  promptLabel: "Change the verb shown to its 아요/어요 present tense form.",
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
      sentenceWithBlank: "우리는 매일 아침에 아침식사를 ___. (먹다)",
      english: "We eat breakfast every morning.",
      blankAnswer: "먹어요",
      fullAnswer: "우리는 매일 아침에 아침식사를 먹어요.",
    },
    {
      sentenceWithBlank: "오늘 저녁 친구와 함께 음악을 ___. (듣다)",
      english: "I'm listening to music with a friend tonight.",
      blankAnswer: "듣어요",
      fullAnswer: "오늘 저녁 친구와 함께 음악을 듣어요.",
    },
    {
      sentenceWithBlank: "매일 아침 운동을 ___. (하다)",
      english: "I exercise every morning.",
      blankAnswer: "해요",
      fullAnswer: "매일 아침 운동을 해요.",
    },
    {
      sentenceWithBlank: "형은 어제 영화를 ___. (보다)",
      english: "My older brother watched a movie yesterday.",
      blankAnswer: "봤어요",
      fullAnswer: "형은 어제 영화를 봤어요.",
    },
    {
      sentenceWithBlank: "우리 언니는 항상 책을 ___. (읽다)",
      english: "My older sister always reads books.",
      blankAnswer: "읽어요",
      fullAnswer: "우리 언니는 항상 책을 읽어요.",
    },
    {
      sentenceWithBlank: "주말에 무엇을 ___. (하다)",
      english: "What are you doing on the weekend?",
      blankAnswer: "해요",
      fullAnswer: "주말에 무엇을 해요?",
    },
    {
      sentenceWithBlank: "지금 무슨 노래를 ___. (듣다)",
      english: "What song are you listening to now?",
      blankAnswer: "듣고 있어요",
      fullAnswer: "지금 무슨 노래를 듣고 있어요?",
    },
    {
      sentenceWithBlank: "당신의 친구가 언제 한국에 ___. (오다)",
      english: "When is your friend coming to Korea?",
      blankAnswer: "와요",
      fullAnswer: "당신의 친구가 언제 한국에 와요?",
    },
    {
      sentenceWithBlank: "나는 어제 저녁에 새로운 책을 ___. (사다)",
      english: "I bought a new book last night.",
      blankAnswer: "샀어요",
      fullAnswer: "나는 어제 저녁에 새로운 책을 샀어요.",
    },
    {
      sentenceWithBlank: "너의 가방에 무엇이 ___. (있다)",
      english: "What's in your bag?",
      blankAnswer: "있어요",
      fullAnswer: "너의 가방에 무엇이 있어요?",
    },
    {
      sentenceWithBlank: "아버지는 매일 저녁 신문을 ___. (읽다)",
      english: "My father reads the newspaper every evening.",
      blankAnswer: "읽어요",
      fullAnswer: "아버지는 매일 저녁 신문을 읽어요.",
    },
  ],
};

const presentNegativeConjugation = {
  title: "Present Negative 아요/어요 Conjugation",
  type: "grammar",
  promptLabel: "Change the verb shown to its negative 아요/어요 form.",
  items: [
    {
      sentenceWithBlank: "저는 피아노를 ___. (치요)",
      english: "I don't play the piano.",
      blankAnswer: "치지 않아요",
      fullAnswer: "저는 피아노를 치지 않아요.",
    },
    {
      sentenceWithBlank: "민수씨는 커피를 ___. (마셔요)",
      english: "Minsoo doesn't drink coffee.",
      blankAnswer: "마시지 않아요",
      fullAnswer: "민수씨는 커피를 마시지 않아요.",
    },
    {
      sentenceWithBlank: "삼순씨는 텔레비전을 ___. (봐요)",
      english: "Samsun doesn't watch television.",
      blankAnswer: "보지 않아요",
      fullAnswer: "삼순씨는 텔레비전을 보지 않아요.",
    },
    {
      sentenceWithBlank: "박선생님은 아침에 운동을 ___. (해요)",
      english: "Teacher Park doesn't exercise in the morning.",
      blankAnswer: "하지 않아요",
      fullAnswer: "박선생님은 아침에 운동을 하지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 축구를 ___. (해요)",
      english: "We don't play soccer.",
      blankAnswer: "하지 않아요",
      fullAnswer: "우리는 축구를 하지 않아요.",
    },
    {
      sentenceWithBlank: "영희씨는 양파를 ___. (먹어요)",
      english: "Younghee doesn't eat onions.",
      blankAnswer: "먹지 않아요",
      fullAnswer: "영희씨는 양파를 먹지 않아요.",
    },
    {
      sentenceWithBlank: "석진씨는 영어를 ___. (공부해요)",
      english: "Seokjin doesn't study English.",
      blankAnswer: "공부하지 않아요",
      fullAnswer: "석진씨는 영어를 공부하지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 매일 저녁에 산책을 ___. (해요)",
      english: "We don't take a walk every evening.",
      blankAnswer: "하지 않아요",
      fullAnswer: "우리는 매일 저녁에 산책을 하지 않아요.",
    },
    {
      sentenceWithBlank: "현우씨는 돼지고기를 ___. (먹어요)",
      english: "Hyunwoo doesn't eat pork.",
      blankAnswer: "먹지 않아요",
      fullAnswer: "현우씨는 돼지고기를 먹지 않아요.",
    },
    {
      sentenceWithBlank: "민희씨는 기타를 ___. (치요)",
      english: "Minhee doesn't play the guitar.",
      blankAnswer: "치지 않아요",
      fullAnswer: "민희씨는 기타를 치지 않아요.",
    },
    {
      sentenceWithBlank: "지현씨는 고양이를 ___. (데려와요)",
      english: "Jihyun doesn't have a cat.",
      blankAnswer: "데리지 않아요",
      fullAnswer: "지현씨는 고양이를 데리지 않아요.",
    },
    {
      sentenceWithBlank: "선영씨는 자전거를 ___. (타요)",
      english: "Sunyoung doesn't ride a bike.",
      blankAnswer: "타지 않아요",
      fullAnswer: "선영씨는 자전거를 타지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 이야기를 ___. (해요)",
      english: "We don't talk.",
      blankAnswer: "하지 않아요",
      fullAnswer: "우리는 이야기를 하지 않아요.",
    },
    {
      sentenceWithBlank: "지민씨는 컴퓨터 게임을 ___. (해요)",
      english: "Jimin doesn't play computer games.",
      blankAnswer: "하지 않아요",
      fullAnswer: "지민씨는 컴퓨터 게임을 하지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 주말에 영화를 ___. (봐요)",
      english: "We don't watch movies on the weekend.",
      blankAnswer: "보지 않아요",
      fullAnswer: "우리는 주말에 영화를 보지 않아요.",
    },
    {
      sentenceWithBlank: "혜진씨는 수학을 ___. (공부해요)",
      english: "Hyejin doesn't study math.",
      blankAnswer: "공부하지 않아요",
      fullAnswer: "혜진씨는 수학을 공부하지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 계단을 ___. (올라가요)",
      english: "We don't go up the stairs.",
      blankAnswer: "올라가지 않아요",
      fullAnswer: "우리는 계단을 올라가지 않아요.",
    },
    {
      sentenceWithBlank: "민석씨는 일찍 ___. (일어나요)",
      english: "Minseok doesn't get up early.",
      blankAnswer: "일어나지 않아요",
      fullAnswer: "민석씨는 일찍 일어나지 않아요.",
    },
    {
      sentenceWithBlank: "우리는 늦게 ___. (자요)",
      english: "We don't sleep late.",
      blankAnswer: "자지 않아요",
      fullAnswer: "우리는 늦게 자지 않아요.",
    },
    {
      sentenceWithBlank: "선미씨는 과일을 ___. (먹어요)",
      english: "Sunmi doesn't eat fruit.",
      blankAnswer: "먹지 않아요",
      fullAnswer: "선미씨는 과일을 먹지 않아요.",
    },
  ],
};

const simplePastConjugations = {
  title: "Simple Past Tense 아요/어요",
  type: "grammar",
  promptLabel: "Change the verb shown to its 아요/어요 past tense form.",
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
  title: "Particles 에 and 에서",
  type: "grammar",
  promptLabel: "Fill the blank with 에 or 에서!",
  specialInstructions:
    "You will be shown sentences with a blank indicating the missing particle. Fill in the blank with the appropriate particle 에 or 에서!",
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
      blankAnswer: "에서",
      fullAnswer: "저는 영화관에서 영화를 봤어요",
    },
    {
      sentenceWithBlank: "당신은 음악방__ 있어요",
      english: "You are in the music room",
      blankAnswer: "에",
      fullAnswer: "당신은 음악방에 있어요",
    },
    {
      sentenceWithBlank: "우리는 슈퍼마켓__ 장을 봤어요",
      english: "We shopped at the supermarket",
      blankAnswer: "에서",
      fullAnswer: "우리는 슈퍼마켓에서 장을 봤어요",
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

const transportationJumble = {
  title: "Transportation",
  type: "jumble",
  items: [
    {
      correctSentence: "버스로 학교에 갔어요.",
      jumbleSentence: "갔어요 학교에 버스로 .",
      english: "I went to school by bus.",
    },
    {
      correctSentence: "지하철이 언제 왔어요?",
      jumbleSentence: "왔어요 언제 지하철이 ?",
      english: "When did the subway arrive?",
    },
    {
      correctSentence: "현우씨는 어떻게 회사에 가세요?",
      jumbleSentence: "가세요 회사에 어떻게 현우씨는 ?",
      english: "How do you go to the office, Hyunwoo?",
    },
    {
      correctSentence: "우리는 도보로 공원에 갔어요.",
      jumbleSentence: "공원에 갔어요 도보로 우리는 .",
      english: "We went to the park on foot.",
    },
    {
      correctSentence: "저는 자전거를 타고 왔어요.",
      jumbleSentence: "왔어요 타고 자전거를 저는 .",
      english: "I came by bicycle.",
    },
    {
      correctSentence: "승민씨는 택시를 자주 이용해요?",
      jumbleSentence: "이용해요 자주 택시를 승민씨는 ?",
      english: "Does Seungmin often use a taxi?",
    },
    {
      correctSentence: "그 사람은 어떤 차를 운전해요?",
      jumbleSentence: "차를 어떤 운전해요 그 사람은 ?",
      english: "What car does that person drive?",
    },
    {
      correctSentence: "저는 버스 정류장에서 기다렸어요.",
      jumbleSentence: "정류장에서 기다렸어요 버스 저는 .",
      english: "I waited at the bus stop.",
    },
    {
      correctSentence: "지하철은 언제 출발해요?",
      jumbleSentence: "언제 출발해요 지하철은 ?",
      english: "When does the subway depart?",
    },
    {
      correctSentence: "지은씨는 어디서 하차하셨나요?",
      jumbleSentence: "어디서 하차하셨나요 지은씨는 ?",
      english: "Where did you get off, Jieun?",
    },
    {
      correctSentence: "우리는 배를 타고 여행을 갔어요.",
      jumbleSentence: " 여행을 타고 배를 우리는 갔어요 .",
      english: "We went on a trip by boat.",
    },
    {
      correctSentence: "저는 버스를 놓쳤어요.",
      jumbleSentence: "버스를 놓쳤어요 저는 .",
      english: "I missed the bus.",
    },
    {
      correctSentence: "승현씨는 어떤 비행기를 탔나요?",
      jumbleSentence: "비행기를 어떤 탔나요 승현씨는 ?",
      english: "What airplane did you take, Seunghyun?",
    },
    {
      correctSentence: "우리는 편리한 교통수단을 이용했어요.",
      jumbleSentence: " 교통수단을 편리한 이용했어요 우리는 .",
      english: "We used a convenient means of transportation.",
    },
    {
      correctSentence: "효정씨는 어디서 승차하셨나요?",
      jumbleSentence: "어디서 승차하셨나요 효정씨는 ?",
      english: "Where did you get on, Hyojung?",
    },
    {
      correctSentence: "당신은 몇 시에 출발하셨나요?",
      jumbleSentence: "시에 몇 출발하셨나요 당신은 ?",
      english: "What time did you depart?",
    },
    {
      correctSentence: "지훈씨는 어디로 가고 있어요?",
      jumbleSentence: "가고 어디로  있어요  지훈씨는 ?",
      english: "Where are you going, Jihoon?",
    },
    {
      correctSentence: "저는 도서관으로 걸어갔어요.",
      jumbleSentence: "걸어갔어요 저는 도서관으로  .",
      english: "I walked to the library.",
    },
    {
      correctSentence: "그 사람은 어디에서 대중교통을 이용하나요?",
      jumbleSentence: " 대중교통을 어디에서 그 이용하나요 사람은 ?",
      english: "Where does that person use public transportation?",
    },
    {
      correctSentence: "윤아씨는 자주 비행기를 타나요?",
      jumbleSentence: " 비행기를 자주 타나요 윤아씨는 ?",
      english: "Does Yoona often take a plane?",
    },
  ],
};

const hobbiesJumble = {
  title: "Hobbies",
  type: "jumble",
  items: [
    {
      correctSentence: "저는 음악 듣기를 좋아해요.",
      jumbleSentence: "음악 좋아해요 듣기를 저는 .",
      english: "I like listening to music.",
    },
    {
      correctSentence: "현우씨는 무슨 취미가 있어요?",
      jumbleSentence: "무슨 취미가 있어요 현우씨는 ?",
      english: "What are your hobbies, Hyunwoo?",
    },
    {
      correctSentence: "우리는 같이 축구를 봤어요.",
      jumbleSentence: "봤어요 같이 축구를 우리는 .",
      english: "We watched soccer together.",
    },
    {
      correctSentence: "수연씨는 요리하는 것을 좋아해요.",
      jumbleSentence: "것을 요리하는 좋아해요 수연씨는 .",
      english: "Sooyeon likes cooking.",
    },
    {
      correctSentence: "미숙씨는 어떤 책을 읽나요?",
      jumbleSentence: "읽나요 어떤 책을 미숙씨는 ?",
      english: "What book do you read, Misook?",
    },
    {
      correctSentence: "저는 그림 그리는 것이 재미있어요.",
      jumbleSentence: " 것이 저는 그림 그리는 재미있어요 .",
      english: "I find drawing fun.",
    },
    {
      correctSentence: "민수씨는 피아노를 치나요?",
      jumbleSentence: "치나요 민수씨는 피아노를 ?",
      english: "Do you play the piano, Minsoo?",
    },
    {
      correctSentence: "우리는 같이 책을 읽었어요.",
      jumbleSentence: "책을 같이  읽었어요우리는 .",
      english: "We read a book together.",
    },
    {
      correctSentence: "하늘씨는 어떤 음악을 듣나요?",
      jumbleSentence: "하늘씨는 어떤 듣나요 음악을 ?",
      english: "What kind of music do you listen to, Haneul?",
    },
    {
      correctSentence: "저는 주말에 영화를 봤어요.",
      jumbleSentence: "봤어요 영화를 주말에 저는 .",
      english: "I watched a movie on the weekend.",
    },
    {
      correctSentence: "경수씨는 사진 찍는 것을 좋아해요.",
      jumbleSentence: "것을 찍는 사진 경수씨는 좋아해요.",
      english: "Kyungsoo likes taking photos.",
    },
    {
      correctSentence: "그 사람은 어떤 스포츠를 좋아하나요?",
      jumbleSentence: "좋아하나요 스포츠를 어떤 그 사람은 ?",
      english: "What sports does that person like?",
    },
    {
      correctSentence: "지민씨는 자주 책을 읽나요?",
      jumbleSentence: "책을 자주 읽나요 지민씨는 ?",
      english: "Do you often read books, Jimin?",
    },
    {
      correctSentence: "저는 여행을 좋아해요.",
      jumbleSentence: "저는 좋아해요 여행을 .",
      english: "I like traveling.",
    },
    {
      correctSentence: "재현씨는 어떤 취미를 가지고 있어요?",
      jumbleSentence: "있어요 재현씨는 취미를 가지고 어떤 ?",
      english: "What hobbies do you have, Jaehyun?",
    },
    {
      correctSentence: "저는 주말에 산책을 했어요.",
      jumbleSentence: "산책을 주말에 했어요 저는 .",
      english: "I took a walk on the weekend.",
    },
    {
      correctSentence: "연주씨는 어떤 영화를 좋아해요?",
      jumbleSentence: "좋아해요 연주씨는 영화를 어떤 ?",
      english: "What movies do you like, Yeonju?",
    },
    {
      correctSentence: "우리는 같이 노래를 불렀어요.",
      jumbleSentence: "노래를 같이 우리는 불렀어요 .",
      english: "We sang together.",
    },
    {
      correctSentence: "지은씨는 어떤 게임을 좋아해요?",
      jumbleSentence: "게임을 좋아해요 어떤 지은씨는 ?",
      english: "What games do you like, Jieun?",
    },
    {
      correctSentence: "저는 피아노 연주하는 것을 좋아해요.",
      jumbleSentence: "좋아해요 것을 연주하는 피아노 저는 .",
      english: "I like playing the piano.",
    },
  ],
};

const newPeopleJumble = {
  title: "Getting Acquainted",
  type: "jumble",
  items: [
    {
      correctSentence: "희진씨는 어디서 왔어요?",
      jumbleSentence: "는 어디서 왔어요 희진씨 ?",
      english: "Where are you from, Heejin?",
    },
    {
      correctSentence: "저는 서울에서 왔어요.",
      jumbleSentence: "저는 왔어요 서울에서 .",
      english: "I am from Seoul.",
    },
    {
      correctSentence: "당신의 취미는 무엇인가요?",
      jumbleSentence: "무엇인가요 취미는 당신의 ?",
      english: "What is your hobby?",
    },
    {
      correctSentence: "우리는 같은 학교에 다녔어요.",
      jumbleSentence: "학교에 같은 다녔어요 우리는 .",
      english: "We attended the same school.",
    },
    {
      correctSentence: "민수씨는 친절해요.",
      jumbleSentence: "친절해요 민수씨는 .",
      english: "Minsoo is kind.",
    },
    {
      correctSentence: "수진씨는 무슨 일을 하세요?",
      jumbleSentence: " 무슨 일을 하세요 수진씨는 ?",
      english: "What do you do (for a living), Soojin?",
    },
    {
      correctSentence: "이민호씨는 연예인이에요.",
      jumbleSentence: "연예인이에요 이민호씨는 .",
      english: "Lee Min Ho is a celebrity.",
    },
    {
      correctSentence: "저는 학생이에요.",
      jumbleSentence: "는 이에요 학생 저 .",
      english: "I am a student.",
    },
    {
      correctSentence: "우리는 친구예요.",
      jumbleSentence: "친구 . 우리는 예요",
      english: "We are friends.",
    },
    {
      correctSentence: "당신은 어떤 음식을 좋아해요?",
      jumbleSentence: "좋아해요 어떤 음식을 당신은 ?",
      english: "What food do you like?",
    },
    {
      correctSentence: "저는 음악을 듣는 것을 좋아해요.",
      jumbleSentence: "듣는 것을 음악을 좋아해요 저는 .",
      english: "I like listening to music.",
    },
    {
      correctSentence: "그 사람은 어디에 살아요?",
      jumbleSentence: "은 어디에 그 살아요 사람 ?",
      english: "Where does that person live?",
    },
    {
      correctSentence: "서영씨는 한국어를 배우고 있어요.",
      jumbleSentence: "배우고 는. 한국어 있어요 를 서영씨",
      english: "Seoyoung is learning Korean.",
    },
    {
      correctSentence: "우리는 같이 영화를 봤어요.",
      jumbleSentence: "봤어요 영화를 같이 우리는 .",
      english: "We watched a movie together.",
    },
    {
      correctSentence: "지훈씨는 어디에 일하세요?",
      jumbleSentence: "어디에 일하세요 지훈씨는 ?",
      english: "Where do you work, Jihoon?",
    },
    {
      correctSentence: "당신은 어떤 음악을 듣나요?",
      jumbleSentence: "어떤 듣나요 당신은 음악을 ?",
      english: "What kind of music do you listen to?",
    },
    {
      correctSentence: "유리씨는 운동을 좋아해요.",
      jumbleSentence: "좋아해요 유리씨는 운동을 .",
      english: "Yuri likes to exercise.",
    },
    {
      correctSentence: "저는 현재 공부하고 있어요.",
      jumbleSentence: "현재 공부하고 저는 있어요.",
      english: "I am currently studying.",
    },
    {
      correctSentence: "그 사람은 어떤 사람인가요?",
      jumbleSentence: "사람 어떤 그 인가요 사람은 ?",
      english: "What kind of person is that?",
    },
    {
      correctSentence: "은비씨는 어떤 책을 읽고 있나요?",
      jumbleSentence: "읽고 어떤 책을 있나요 은비씨는 ?",
      english: "What book are you reading, Eunbi?",
    },
  ],
};

const exerciseTypeController = {
  transcribe: {
    title: "Transcription",
    instructions:
      "You will be shown a prompt in Korean. Simply copy the Korean text exactly as it is shown.",
    answerType: "korean",
    altAnswerType: null,
    promptType: "korean",
    promptLabel: "Type the Korean word(s) shown below",
  },
  fillblank: {
    title: "Fill-in-the-blank",
    instructions:
      "You will be presented with a prompt and asked to type the missing word(s) that complete the sentence correctly. You have the option to modify the settings below, allowing you to either provide the missing word(s) or type out the entire sentence based on your preference.",
    answerType: "blankAnswer",
    altAnswerType: "fullAnswer",
    promptType: "sentenceWithBlank",
    promptLabel: "Fill in the missing word(s)",
    altPromptLabel: "Write the sentence below, filling in the missing word",
  },
  grammar: {
    title: "Grammar",
    instructions:
      "You will be shown a word and asked to modify the word following the instructions. You have the option to modify the settings below, allowing you to either provide the missing word(s) or type out the entire sentence based on your preference.",
    answerType: "blankAnswer",
    altAnswerType: "fullAnswer",
    promptType: "sentenceWithBlank",
  },
  jumble: {
    title: "Mixed-up Sentences",
    instructions:
      "You will be shown sentences where the words are out of order. Rewrite the sentence using the correct word order.",
    answerType: "correctSentence",
    altAnswerType: null,
    promptType: "jumbleSentence",
    promptLabel: "Rewrite the following sentence in the correct order",
  },
};

class ExerciseCategory {
  constructor(title) {
    this.title = title;
    // maybe I will add a field for explanation later
    this.items = [];
  }
}

const grammarExercises = new ExerciseCategory("Grammar");
const jumbleExercises = new ExerciseCategory("Mixed Up Sentences");
const wordChoiceExercises = new ExerciseCategory("Word Choice");
const basicTypingExercises = new ExerciseCategory("Basic Typing");

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

grammarExercises.items.push(placeMarkers);
grammarExercises.items.push(simplePastConjugations);
grammarExercises.items.push(simplePresentConjugation);
grammarExercises.items.push(objectMarkers);
grammarExercises.items.push(presentNegativeConjugation);
grammarExercises.items.push(futureConjugation);

jumbleExercises.items.push(hobbiesJumble);
jumbleExercises.items.push(newPeopleJumble);
jumbleExercises.items.push(transportationJumble);

wordChoiceExercises.items.push(hobbiesWordChoice);
wordChoiceExercises.items.push(transportationWordChoice);
wordChoiceExercises.items.push(languageLearningWordChoice);
wordChoiceExercises.items.push(jobsWordChoice);
wordChoiceExercises.items.push(sportsWordChoice);
wordChoiceExercises.items.push(familyWordChoice);

const rootCategoryContainer = {
  title: "Exercise Categories",
  items: [],
};

rootCategoryContainer.items.push(grammarExercises);
rootCategoryContainer.items.push(jumbleExercises);
rootCategoryContainer.items.push(wordChoiceExercises);
rootCategoryContainer.items.push(basicTypingExercises);
