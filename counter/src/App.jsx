import { useEffect, useState, useRef } from 'react';  // useRef 추가
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';  // 대소문자 주의
import Even from './component/Even';


// 텍스트 입력 필드에 값을 입력하면 text 상태가 업데이트
// Controller에서 카운트를 증가시키거나 감소시키면 count가 변경
// 카운트가 짝수이면 Even 컴포넌트가 표시
// 1초마다 "깜빡" 메시지가 콘솔 출력, 컴포넌트가 언마운트될 때 "클린업" 메시지가 출력.

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 카운트 값 변경 (함수형 업데이트 사용)
  const handleSetCount = (value) => {
    setCount((prevCount) => prevCount + value);  // 이전 상태(prevCount) 기반으로 업데이트
  };

  // 텍스트 값 변경
  const handleChangeText = (e) => {
    setText(e.target.value); 
  };

  // 컴포넌트가 처음 마운트될 때만 실행되도록 하는 useRef
  const didMountRef = useRef(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
    console.log("깜빡");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    } ;
  });

  return (
    <div className="App">
      <h3>Simple Counter</h3>
   
      <section>
        <p>
          <input 
            value={text} 
            onChange={handleChangeText}  
          />
        </p>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
