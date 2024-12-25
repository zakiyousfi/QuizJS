


let question= [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },

   {
     numb: 6,
     question: "what mentornations refer to:",
     answer: "leaders of us :)",
     options: [
       "Option 1:agency",
       "option 2: embecy workers",
       "option 3:programmers",
       "leaders of us :)"
     ]
   },
   {
    numb: 7,
    question: "what's the name of this quiz createur :",
    answer:"zakaria yousfi",

    options: [
      "zakaria yousfi",
      "mentornations",
      "steve",
      "Adam"
    ]
  },
  {
    numb: 8,
    question: "what's 2+2=",
    answer: "4",
    options: [
      "Option 1: 22",
      "option 2: 3",
      "4",
      "0"
    ]
  },
  {
    numb:9,
    question: "what's your faverite color :",
    answer:["my choice you will never know 😐"
    ],
    options: [
      "red",
      "bleu",
      "yellow",
      "my choice you will never know 😐"
    ]
  },
  {
    numb: 10,
    question: "HOW WAS MY QUIZ :",
    answer: "GREAT😎",
    options: [
      "bad",
      "good",
      "GREAT😎",
      "unranked"
    ]
  },
   
];

function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

let questions = shuffle(question);

for (var i = 0 ; i <= 9 ;i++)
{ 
  questions[i].numb = i+1;

}
