import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./hi.css";

function HI() {
  const noBtnRef = useRef(null);
  const navigate = useNavigate(); // ✅ สำหรับเปลี่ยนหน้า

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
    navigate("/hi"); // ✅ กลับไปหน้า App.jsx
  };

  return (
    <>
      <h1>KNOCK KNOCK !!</h1>
      <h2>Ready?</h2>
      <div className="card">
        <button onClick={handleYesClick}>Yes</button>
        <button id="no-button" ref={noBtnRef} onMouseEnter={moveNoButton}>
          No
        </button>
      </div>
    </>
  );
}

export default HI;
