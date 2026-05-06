import { useState } from "react";
import FlashCard from './components/FlashCard';
import './App.css';

function App() {
  const [score, setScore] = useState(0);

  // 1. O/X 정답과 상세 해설을 데이터에 추가합니다!
  const quizData = [
    { 
      id: 1, 
      question: "Q. 리액트에서 컴포넌트 이름은 소문자로 시작해도 된다?", 
      correctAnswer: "X",
      explanation: "리액트는 소문자로 시작하면 일반 HTML 태그로 인식하므로, 반드시 대문자로 시작해야 합니다!" 
    },
    { 
      id: 2, 
      question: "Q. 여러 태그를 반환하려면 하나의 부모 박스로 묶어야 한다?", 
      correctAnswer: "O",
      explanation: "화면을 그릴 때는 반드시 하나의 부모 태그나 빈 태그(<></>)로 전체를 감싸주어야 합니다." 
    },
    { 
      id: 3, 
      question: "Q. HTML의 class 속성은 리액트에서도 똑같이 class로 쓴다?", 
      correctAnswer: "X",
      explanation: "자바스크립트의 예약어와 겹치기 때문에 리액트에서는 className으로 적어야 합니다." 
    }
  ];

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className='app-wrap'>
      <h2>🧠 리액트 O/X 퀴즈 마스터</h2>
      
      <div className="scoreboard">
        현재 점수: <span>{score}</span> / {quizData.length} 점
      </div>
      
      <div className='card-grid'>
        {quizData.map((quiz) => (
          <FlashCard 
            key={quiz.id} 
            data={quiz} 
            onCorrect={increaseScore} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;