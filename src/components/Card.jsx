import { useState } from "react";
import "./Card.css";

function PhotoSlider() {
    const images = [
        "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?w=400", // 전복죽
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", // 고등어회
        "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=400"  // 한라봉
    ];
    const titles = ["따끈한 전복죽", "신선한 고등어회", "상큼한 한라봉"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const changePhoto = () => {
        let nextIndex = currentIndex + 1;

        if (nextIndex === images.length) {
            nextIndex = 0;
        }
        
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="slider-box" onClick={changePhoto}>
            <img 
                src={images[currentIndex]} 
                alt={titles[currentIndex]} 
                className="food-image" 
            />
            <h3>{titles[currentIndex]}</h3>
            <p>👆 클릭해서 다음 맛집 보기</p>
        </div>
    );
}

export default PhotoSlider;