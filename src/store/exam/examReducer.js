let questions = [
    {
      questionText:
        "What’s the shortcut for the “copy” function on most computers?",
      answerOptions: [
        { answerText: "ctrl a", isCorrect: false },
        { answerText: "ctrl z", isCorrect: false },
        { answerText: "ctrl c", isCorrect: true },
        { answerText: "ctrl v", isCorrect: false },
      ],
    },
    {
      questionText: "Who is often called the father of the computer?",
      answerOptions: [
        { answerText: "Charles Babbage", isCorrect: true },
        { answerText: "Elon Musk", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many soccer players should each team have on the field at the start of each match?",
      answerOptions: [
        { answerText: "7", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "11", isCorrect: true },
        { answerText: "6", isCorrect: false },
      ],
    },
    {
      questionText: "What country won the very first FIFA World Cup in 1930?",
      answerOptions: [
        { answerText: "Egypt", isCorrect: false },
        { answerText: "Uruguay", isCorrect: true },
        { answerText: "Brazil", isCorrect: false },
        { answerText: "Germany", isCorrect: false },
      ],
    },
    {
      questionText: "How many times does the heartbeat per day?",
      answerOptions: [
        { answerText: "50000", isCorrect: false },
        { answerText: "79000", isCorrect: false },
        { answerText: "100000", isCorrect: true },
        { answerText: "5000", isCorrect: false },
      ],
    },
    {
      questionText: "Which continent is the largest?",
      answerOptions: [
        { answerText: "Asia", isCorrect: true },
        { answerText: "Africa", isCorrect: false },
        { answerText: "Australia", isCorrect: false },
        { answerText: "Europ", isCorrect: false },
      ],
    },
    {
      questionText: "How many Pyramids of Giza were made?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "3", isCorrect: true },
      ],
    },
  ]

const randomlyArrange = (arr) => {
  let currentIndex = arr.length
  let temporaryValue
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const initState = {
  questions: randomlyArrange(questions),
  result: 0,
  currentQuestion: 0,
  showScore: false,
};

const examReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case "SET_COUNT_CORRECT_ANSWER":
      return {
        ...state,
        result: action.payload,
      };
    case "SET_SHOW_SCORE":
      return {
        ...state,
        showScore: action.payload,
      };
    default:
      return state;
  }
};

export default examReducer;
