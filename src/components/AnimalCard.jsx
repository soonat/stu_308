import { useState } from "react";
import "./AnimalCard.css";

function AnimalCard({ data }) {
    // 1. 마우스가 카드 위에 있는지 기억하는 상태 (기본값: false)
    const [isHovered, setIsHovered] = useState(false);
    
    // 2. 카드를 클릭해서 결과를 보여줄지 기억하는 상태 (기본값: false)
    const [showResult, setShowResult] = useState(false);

    return (
        <div 
            className="animal-card"
            // 마우스가 올라가면 isHovered를 true로 바꿈
            onMouseEnter={() => setIsHovered(true)} 
            // 마우스가 벗어나면 isHovered를 false로 바꿈
            onMouseLeave={() => setIsHovered(false)}
            // 클릭하면 showResult를 true로 바꿈
            onClick={() => setShowResult(true)}
        >
            {/* 자바스크립트의 삼항 연산자(조건 ? 참일때 : 거짓일때)를 사용합니다! */}
            {showResult ? (
                // ✅ 클릭했을 때 보여줄 결과 화면
                <div className="result-content">
                    <h3>{data.resultTitle}</h3>
                    <p>{data.resultDesc}</p>
                </div>
            ) : (
                // ✅ 클릭하기 전 보여줄 이미지 화면
                <div className="image-content">
                    {/* isHovered가 true면 hover 이미지, false면 기본 이미지 */}
                    <img 
                        src={isHovered ? data.imgHover : data.imgNormal} 
                        alt={data.name} 
                    />
                    <h3 className="animal-name">{data.name}</h3>
                </div>
            )}
        </div>
    );
}

export default AnimalCard;