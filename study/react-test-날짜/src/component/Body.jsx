import { useState } from 'react';

function Body() {
  const [date, setDate] = useState("");  // 날짜 값 초기화는 빈 문자열로 시작

  const handleOnChange = (e) => {
    console.log("변경된 값:", e.target.value); // 날짜 값 출력
    setDate(e.target.value);  // 날짜 값 변경
  };

  return (
    <div>
      <input 
        type="date" 
        value={date} 
        onChange={handleOnChange} 
        // 날짜 값을 'yyyy-mm-dd' 형식으로 처리하기 위해 필요할 수 있음
      /> 
      <div>{date}</div>
    </div>
  );
}

export default Body;
