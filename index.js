let room;
let affil;
let math;
let select = {};
const lables = [..."abcdef"];

const header = [
  "3-1 이정민",
  "3-2 임현영",
  "3-3 노영진",
  "3-4 이동석",
  "3-5 배소정",
  "3-6 김소민",
  "3-7 문민구",
  "3-8 전성욱",
  "3-9 표학렬",
  "3-10 김정훈",
];

const fixed = [
  //1
  {
    mon: [
      { name: "독서B", teacher: "김상욱" },
      "a",
      { name: "영어A", teacher: "노영진" },
      "f",
      "d",
      "math",
    ],
    tue: [
      { name: "독서A", teacher: "전여경" },
      "e",
      "a",
      { name: "창체A", teacher: "정남숙" },
      "b",
      "c",
      { name: "영어A", teacher: "노영진" },
    ],
    wed: [
      { name: "독서A", teacher: "전여경" },
      "e",
      { name: "창체B", teacher: "이경식" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "독서A", teacher: "전여경" },
      "math",
      "d",
      { name: "영어B", teacher: "박진철" },
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "영어A", teacher: "노영진" },
      "b",
      "math",
      "f",
      "d",
      { name: "체육", teacher: "김정구" },
    ],
  },
  //2
  {
    mon: [
      { name: "창체B", teacher: "박지현" },
      "a",
      { name: "독서B", teacher: "김상욱" },
      "f",
      "d",
      "math",
    ],
    tue: [
      { name: "영어A", teacher: "노영진" },
      "e",
      "a",
      { name: "독서A", teacher: "전여경" },
      "b",
      "c",
      { name: "체육", teacher: "김정구" },
    ],
    wed: [
      { name: "창체A", teacher: "정남숙" },
      "e",
      { name: "독서A", teacher: "전여경" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "영어A", teacher: "노영진" },
      "math",
      "d",
      { name: "영어B", teacher: "노영진" },
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "독서A", teacher: "전여경" },
      "b",
      "math",
      "f",
      "d",
      { name: "영어A", teacher: "노영진" },
    ],
  },
  //3
  {
    mon: [
      { name: "영어B", teacher: "노영진" },
      "a",
      { name: "체육", teacher: "안병선" },
      "f",
      "d",
      { name: "창체B", teacher: "정승혜" },
    ],
    tue: [
      { name: "독서A", teacher: "배소정" },
      "e",
      "a",
      { name: "영어A", teacher: "노영진" },
      "b",
      "c",
      "math",
    ],
    wed: [
      "math",
      "e",
      { name: "영어A", teacher: "노영진" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "독서A", teacher: "배소정" },
      { name: "영어A", teacher: "노영진" },
      "d",
      "math",
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "독서A", teacher: "배소정" },
      "b",
      { name: "창체A", teacher: "한경숙" },
      "f",
      "d",
      { name: "독서B", teacher: "김상욱" },
    ],
  },
  //4
  {
    mon: [
      { name: "창체A", teacher: "한경숙" },
      "a",
      { name: "독서A", teacher: "배소정" },
      "f",
      "d",
      { name: "영어A", teacher: "이경식" },
    ],
    tue: [
      { name: "영어B", teacher: "이경식" },
      "e",
      "a",
      { name: "독서A", teacher: "배소정" },
      "b",
      "c",
      "math",
    ],
    wed: [
      "math",
      "e",
      { name: "독서B", teacher: "김상욱" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "창체B", teacher: "황현정" },
      { name: "영어A", teacher: "이경식" },
      "d",
      "math",
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "체육", teacher: "안병선" },
      "b",
      { name: "영어A", teacher: "이경식" },
      "f",
      "d",
      { name: "독서A", teacher: "배소정" },
    ],
  },
  //5
  {
    mon: [
      { name: "영어B", teacher: "이경식" },
      "a",
      "math",
      "f",
      "d",
      { name: "창체B", teacher: "지중호" },
    ],
    tue: [
      { name: "영어A", teacher: "박지현" },
      "e",
      "a",
      { name: "창체A", teacher: "박정숙" },
      "b",
      "c",
      { name: "독서A", teacher: "배소정" },
    ],
    wed: [
      { name: "독서A", teacher: "배소정" },
      "e",
      { name: "영어A", teacher: "박지현" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      "math",
      { name: "체육", teacher: "정승혜" },
      "d",
      { name: "독서A", teacher: "배소정" },
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "영어a", teacher: "박지현" },
      "b",
      { name: "독서B", teacher: "김상욱" },
      "f",
      "d",
      "math",
    ],
  },
  //6
  {
    mon: [
      { name: "영어A", teacher: "김태용" },
      "a",
      "math",
      "f",
      "d",
      { name: "독서A", teacher: "배소정" },
    ],
    tue: [
      { name: "독서B", teacher: "김상욱" },
      "e",
      "a",
      { name: "영어B", teacher: "이경식" },
      "b",
      "c",
      { name: "창체A", teacher: "박정숙" },
    ],
    wed: [
      { name: "영어A", teacher: "김태용" },
      "e",
      { name: "독서A", teacher: "배소정" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      "math",
      { name: "독서A", teacher: "배소정" },
      "d",
      { name: "영어A", teacher: "김태용" },
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "체육", teacher: "이승용" },
      "b",
      { name: "창체B", teacher: "지중호" },
      "f",
      "d",
      "math",
    ],
  },
  //7
  {
    mon: [
      { name: "영어A", teacher: "이민호" },
      "a",
      { name: "체육", teacher: "이승용" },
      "f",
      "d",
      { name: "창체A", teacher: "김지희" },
    ],
    tue: [
      "math",
      "e",
      "a",
      { name: "독서A", teacher: "문민구" },
      "b",
      "c",
      { name: "영어A", teacher: "이민호" },
    ],
    wed: [
      "math",
      "e",
      { name: "독서A", teacher: "문민구" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "영어B", teacher: "이경식" },
      { name: "독서A", teacher: "문민구" },
      "d",
      { name: "독서B", teacher: "김상욱" },
      "f",
      "a",
    ],
    fri: [
      "c",
      "math",
      "b",
      { name: "창체B", teacher: "문병학" },
      "f",
      "d",
      { name: "영어A", teacher: "이민호" },
    ],
  },
  //8
  {
    mon: [
      { name: "체육", teacher: "정승혜" },
      "a",
      { name: "독서A", teacher: "문민구" },
      "f",
      "d",
      { name: "창체B", teacher: "문병학" },
    ],
    tue: [
      "math",
      "e",
      "a",
      { name: "독서B", teacher: "김상욱" },
      "b",
      "c",
      { name: "독서A", teacher: "문민구" },
    ],
    wed: [
      "math",
      "e",
      { name: "영어A", teacher: "김정훈" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "창체A", teacher: "김지희" },
      { name: "독서A", teacher: "문민구" },
      "d",
      { name: "영어A", teacher: "김정훈" },
      "f",
      "a",
    ],
    fri: [
      "c",
      "math",
      "b",
      { name: "영어A", teacher: "김정훈" },
      "f",
      "d",
      { name: "영어B", teacher: "이경식" },
    ],
  },
  //9
  {
    mon: [
      "math",
      "a",
      { name: "영어A", teacher: "김정훈" },
      "f",
      "d",
      { name: "독서A", teacher: "문민구" },
    ],
    tue: [
      { name: "체육", teacher: "이승용" },
      "e",
      "a",
      { name: "영어A", teacher: "김정훈" },
      "b",
      "c",
      "math",
    ],
    wed: [
      { name: "독서A", teacher: "문민구" },
      "e",
      { name: "창체A", teacher: "김지희" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "창체B", teacher: "최윤희" },
      { name: "영어A", teacher: "김정훈" },
      "d",
      "math",
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "독서B", teacher: "김상욱" },
      "b",
      { name: "독서A", teacher: "문민구" },
      "f",
      "d",
      { name: "영어B", teacher: "김정훈" },
    ],
  },
  //10
  {
    mon: [
      { name: "영어A", teacher: "김정훈" },
      "a",
      { name: "창체A", teacher: "김지희" },
      "f",
      "d",
      "math",
    ],
    tue: [
      { name: "독서A", teacher: "문민구" },
      "e",
      "a",
      "math",
      "b",
      "c",
      { name: "창체B", teacher: "최윤희" },
    ],
    wed: [
      { name: "영어A", teacher: "김정훈" },
      "e",
      { name: "체육", teacher: "이승용" },
      "c",
      "b",
      { name: "자치", teacher: "" },
      { name: "CA", teacher: "" },
    ],
    thu: [
      "e",
      { name: "영어A", teacher: "김정훈" },
      { name: "독서B", teacher: "김상옥" },
      "d",
      { name: "독서A", teacher: "문민구" },
      "f",
      "a",
    ],
    fri: [
      "c",
      { name: "영어B", teacher: "김정훈" },
      "b",
      "math",
      "f",
      "d",
      { name: "독서A", teacher: "문민구" },
    ],
  },
];

const gen = () => {};

const init = () => {
  console.log("Collecting data...");
  room = parseInt(document.getElementById("class").value);
  affil = document.getElementById("affil").value;
  math = document.getElementById("math").value;

  lables.forEach((l) => {
    select[l] = document.getElementById("select-" + l).value;
  });

  console.log(room, affil, math);
  console.dir(select);

  gen();
};

window.onload = () => {
  document.getElementById("button").onclick = init;
};
