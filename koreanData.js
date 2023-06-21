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
      sentenceWithBlank: "예진씨는 __를 좋아해요",
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
      sentenceWithBlank: "저는 __를 그리는 것을 사랑해요",
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
      sentenceWithBlank: "민호씨는 __를 찍는 것을 사랑해요",
      english: "Minho loves photography",
      blankAnswer: "사진",
      fullAnswer: "이민호씨는 사진을 찍는 것을 사랑해요",
    },
    {
      sentenceWithBlank: "저의 취미는 __를 보는 것입니다",
      english: "Watching movies is my hobby",
      blankAnswer: "영화",
      fullAnswer: "저의 취미는 영화를 보는 것입니다",
    },
    {
      sentenceWithBlank: "저는 __를 치는 것을 좋아합니다",
      english: "I like playing the piano",
      blankAnswer: "피아노",
      fullAnswer: "저는 피아노를 치는 것을 좋아합니다",
    },
    {
      sentenceWithBlank: "제가 좋아하는 것은 __를 수집하는 것입니다",
      english: "What I like is collecting stamps",
      blankAnswer: "우표",
      fullAnswer: "제가 좋아하는 것은 우표를 수집하는 것입니다",
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
      correctSentence: "우리는 친구입니다.",
      jumbleSentence: "친구 . 우리는 입니다",
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
    title: "Mixed Up Sentences",
    instructions:
      "You will be shown sentences where the words are out of order. Rewrite the sentence using the correct word order.",
    answerType: "correctSentence",
    altAnswerType: null,
    promptType: "jumbleSentence",
    promptLabel: "Rewrite the following sentence in the correct order",
  },
};

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

jumbleExercises.items.push(hobbiesJumble);
jumbleExercises.items.push(newPeopleJumble);
jumbleExercises.items.push(transportationJumble);

wordChoiceExercises.items.push(hobbiesWordChoice);
wordChoiceExercises.items.push(transportationWordChoice);

const rootCategoryContainer = {
  title: "Exercise Categories",
  items: [],
};

rootCategoryContainer.items.push(grammarExercises);
rootCategoryContainer.items.push(jumbleExercises);
rootCategoryContainer.items.push(wordChoiceExercises);
rootCategoryContainer.items.push(basicTypingExercises);

// Make six basic categories
// Basic typing exercises
// Word Choice
// Grammar
// Mixed up sentences
//
