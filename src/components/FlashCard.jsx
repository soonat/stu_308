import { useState } from "react";
import "./FlashCard.css";

function FlashCard({ data, onCorrect }) {
    // 1. 현재 카드의 화면 상태 ('question', 'correct', 'incorrect', 'explanation')
    const [step, setStep] = useState('question');
    
    // 2. 이미 풀었던 문제인지 기억하는 상태 (꼼수 방지용!)
    const [isAttempted, setIsAttempted] = useState(false);

    // O 또는 X 버튼을 눌렀을 때 실행되는 함수
    const handleAnswer = (choice) => {
        // 정답을 맞췄을 때
        if (choice === data.correctAnswer) {
            // 처음 푼 문제일 때만 점수를 올립니다!
            if (!isAttempted) {
                onCorrect();
            }
            setIsAttempted(true);
            setStep('correct'); // 정답 화면으로 이동
        } 
        // 틀렸을 때
        else {
            setIsAttempted(true); // 틀려도 시도한 것으로 처리 (나중에 맞춰도 점수 안 올라감)
            setStep('incorrect'); // 오답 화면으로 이동
        }
    };

    return (
        <div className={`flash-card ${step !== 'question' ? 'flipped' : ''}`}>
            <div className="card-content">
                
                {/* 화면 1: 처음 문제 화면 */}
                {step === 'question' && (
                    <div className="front-wrap">
                        <p className="question-text">{data.question}</p>
                        <div className="ox-btn-group">
                            <button className="ox-btn o-btn" onClick={() => handleAnswer('O')}>O</button>
                            <button className="ox-btn x-btn" onClick={() => handleAnswer('X')}>X</button>
                        </div>
                    </div>
                )}

                {/* 화면 2: 정답을 맞췄을 때 */}
                {step === 'correct' && (
                    <div className="back-wrap correct">
                        <h2 className="success-text">🎉 정답입니다!</h2>
                        <p className="explanation-text">{data.explanation}</p>
                    </div>
                )}

                {/* 화면 3: 틀렸을 때 */}
                {step === 'incorrect' && (
                    <div className="back-wrap incorrect">
                        <h2 className="fail-text">💦 아쉽게도 틀렸습니다.</h2>
                        <div className="action-btn-group">
                            <button className="action-btn" onClick={() => setStep('question')}>다시 풀기</button>
                            <button className="action-btn check-btn" onClick={() => setStep('explanation')}>정답 확인</button>
                        </div>
                    </div>
                )}

                {/* 화면 4: 정답 확인(해설) 화면 */}
                {step === 'explanation' && (
                    <div className="back-wrap correct">
                        <h2 className="success-text">💡 정답은 '{data.correctAnswer}' 입니다.</h2>
                        <p className="explanation-text">{data.explanation}</p>
                    </div>
                )}

            </div>
        </div>
    );
}

export default FlashCard;