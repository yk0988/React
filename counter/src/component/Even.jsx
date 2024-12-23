import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 컴포넌트가 마운트된 후 실행되는 코드

    // 클린업 함수
    return () => {
      console.log("Even 컴포넌트 언마운트");
    };
  }, []);  

  return <div>현재 카운트는 짝수입니다</div>;
};

export default Even;
