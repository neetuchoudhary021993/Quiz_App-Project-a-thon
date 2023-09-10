
import React, {useState} from 'react'
import './App.css';
import ReviewSubmission from './components/ReviewSubmission';


const questionsArr = [
  {
    id: 0,
    question: 'Which one is the smallest ocean in the World?',
    options: ['Indian', 'Pacific', 'Atlantic', 'Arctic'],
    correctAnswer: 'Arctic',
  },
  {
    id: 1,
    question: 'Which country gifted the ‘Statue of Liberty’ to USA in 1886?',
    options: ['France', 'Canada', 'Brazil', 'England'],
    correctAnswer: 'France',
  },
  {
    id:2,
    question: 'Which country is known as the ‘playground of Europe’?',
    options: ['Austria', 'Holland', 'Switzerland', ' Italy'],
    correctAnswer: 'Switzerland',
  },
  {
    id:3,
    question: 'Which continent has the highest number of countries?',
    options: ['Asia', 'Europe', 'North America', 'Africa'],
    correctAnswer: 'Africa',
  }
];

function App() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState(questionsArr);


 
  const handleClick = (option) => {
    if (option === questionsArr[question].correctAnswer) {
      setScore(score + 1);
    }
    const isCorrect = option === questionsArr[question].correctAnswer;
  setUserAnswers((prevUserAnswers) => {
    const newUserAnswers = [...prevUserAnswers];
    newUserAnswers[question] = isCorrect ? 'Correct' : 'Wrong';
    return newUserAnswers;
    });

    if (question + 1 < questionsArr.length) {
      setQuestion(question + 1);
    
    } else {
      setShowScore(true);
    }
  };
  

  const playAgainQuiz = () => {
    setQuestion(0);
    setScore(0);
    setShowScore(false);
  };


  return (
    <div className='App'>
      {
        showScore ? (
          <div className='score'>
            Your Score is {score}/{questionsArr.length}!
            <button className='reset' onClick={playAgainQuiz}>Play Again</button>
            <ReviewSubmission questions={questionsArr} userAnswers={userAnswers} />
          </div>
        ) : (
          <div className="question">
          <div className="question-length">
            <span>Question {question + 1}</span> / {questionsArr.length}
          </div>
          <div className="question-heading">{questionsArr[question].question}</div>
          <div className="answer">
            {questionsArr[question].options.map((option) => (
              <button key={option} onClick={() => handleClick(option)}>
                {option}
              </button>
            ))}
          </div>
      
        </div>
      )}
       
    </div>
  )
}

export default App