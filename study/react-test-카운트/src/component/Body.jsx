import { useState } from 'react';  // useState 훅을 임포트해야 합니다
import './Body.css'; // CSS 파일 임포트

function Body() {
  const [count, setCount] = useState(0);  // useState로 상태를 정의
  
  const onIncrease = () => {
    setCount(count + 1);  // 'count'로 수정
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button> 
    </div>
  );
}

export default Body;
