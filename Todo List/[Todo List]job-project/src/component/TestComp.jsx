import { useReducer } from "react";

// reducer 함수 정의
function reducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;            
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <b>{count}</b>  {/* <bold>가 아닌 <b>로 수정 */}
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-</button>
                <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
            </div>
        </div>
    );
};

export default TestComp;
