import { useNavigate } from "react-router-dom";
import "./hi.css";

function HI() {
  const navigate = useNavigate(); // ✅ สำหรับเปลี่ยนหน้า

  const handleYesClick = () => {
    navigate("/hi"); // ✅ กลับไปหน้า App.jsx
  };

  return (
    <>
      <h1>KNOCK KNOCK !!</h1>
      <h2>Ready?</h2>
      <div className="card">
        <button onClick={handleYesClick}>Yes</button>
      </div>
    </>
  );
}

export default HI;
