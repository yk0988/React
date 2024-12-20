import React, { useState } from 'react';

function Body() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  // name에 대한 변화 처리
  const handleOnChange = (e) => {
    console.log("현재 수정 대상:", e.target.name);
    console.log("수정값:", e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,  
    });
  };



  return (
    <div>
      <div>
        <input
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>

      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option value="">성별</option>
          <option value="남성">남</option>
          <option value="여성">여</option>
        </select>
      </div>

      <div>
        <input
          name="birth"
          type="date"
          value={state.birth}
          onChange={handleOnChange}
        />
      </div>
      <div>
      <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default Body;
