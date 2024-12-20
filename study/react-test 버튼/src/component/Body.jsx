import React from 'react';  // React를 임포트해야 합니다
import './Body.css'; // CSS 파일 임포트

function Body() {
  function handleOnClick(e) {
   console.log(e.target.name)
  } 
  
  return (
    <div className="body">
      <button name = "A버튼" onClick={handleOnClick}>
      A button
      </button>
      <button name = "B버튼" onClick={handleOnClick}>
      B button
      </button>
    </div>
  );
}

export default Body;
