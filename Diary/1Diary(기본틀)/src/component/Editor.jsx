import React, { useState } from "react";  
import "./Editor.css";
import { getFormattedDate } from "../util"; 
import Button from "./Button";  
import { useNavigate } from "react-router-dom";  

const Editor = ({ initData, onSubmit }) => { 
  const navigate = useNavigate();  // navigate 훅을 사용하여 페이지 이동

  const [state, setState] = useState({
    data: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });

  const handleChangeDate = (e) => {
    setState({
      ...state,
      data: e.target.value,
    });
  };

  const handleChangeContent = (e) => {  // content를 변경하는 함수 추가
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleBack = () => {
    navigate(-1);  // 이전 페이지로 돌아가기
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>오늘날짜</h4>
        <div className="input_wrapper">
          <input
            type="date" 
            value={state.data}
            onChange={handleChangeDate}
          />
        </div>
      </div>
      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘감정</h4>
        {/* 감정 선택 부분 추가 */}
      </div>
      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘 기분은?" 
            value={state.content}
            onChange={handleChangeContent}  // 수정된 부분
          />
        </div>
      </div>
      <div className="editor_section button_section">
        <Button text={"취소"} onClick={handleBack} />  {/* 취소 버튼 클릭 시 이전 페이지로 이동 */}
        <Button text={"완료"} type={"positive"} onClick={handleSubmit} />  {/* 완료 버튼 클릭 시 작성 완료 */}
      </div>    
    </div>
  );
};

export default Editor;
