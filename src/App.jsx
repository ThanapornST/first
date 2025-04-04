import { useRef, useState } from "react";
import "./App.css";
import myImage from "./assets/image.png";
import confetti from "canvas-confetti";

function App() {
  const noBtnRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const moveNoButton = () => {
    const button = noBtnRef.current;
    const card = button.parentElement;

    const maxX = card.clientWidth - button.clientWidth;
    const maxY = card.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  const handleYesClick = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
    setShowPopup(true);
  };

  return (
    <>
      <div>
        <img src={myImage} className="logo" alt="My image" />
      </div>
      <h1>Wanna be my bae?</h1>
      <div className="card">
        <button onClick={handleYesClick}>Yes</button>
        <button id="no-button" ref={noBtnRef} onMouseEnter={moveNoButton}>
          No
        </button>
      </div>

      {/* ✅ Popup Flip Card */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-card flip-container">
            <div
              className={`flip-card-inner ${flipped ? "flipped" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(!flipped);
              }}
            >
              {/* Front */}
              <div className="flip-card-front">
                <div className="popup-content">
                  <span className="emoji">❤️</span>
                  <p className="text-arc">Yayyy! We're boyfriend and girlfriend now!</p>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <div className="popup-content">
                  <h3>05/04/2568</h3>
                  <p>
                    เป็นแฟนกันแย้วนะไออ้วงง จริงๆก็เป็นนานแล้วอิอิขอโทษที่ทำตัวไม่ดีบ่อยๆ
                    ตอนนี้เค้าเป็นเด็กดีของอ้วงน้าาา รักอ้วนนะงับ ต้องอ่อนโยนกับเค้าเพิ่มด้วยยยย ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
