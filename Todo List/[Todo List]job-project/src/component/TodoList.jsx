import { useMemo, useReducer, useCallback, useRef, useState, useContext } from "react"; // 하나의 import로 합침
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { TodoDispatchContext, TodoStateContext } from "../App";

const TodoList = () => {
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const todo = useContext(TodoStateContext);  // TodoContext에서 데이터 가져오기
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // 검색 결과를 useMemo로 최적화
    const getSearchResult = useMemo(() => {
        return search === ""
            ? todo
            : todo.filter((it) => it.content.includes(search));
    }, [search, todo]);

    // 분석 함수 (완료된 항목 및 미완료 항목 수 계산)
    const analyzeTodo = useMemo(() => {
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return { totalCount, doneCount, notDoneCount };
    }, [todo]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요" />

            <div className="stats">
                <div>총 개수: {totalCount}</div>
                <div>완료: {doneCount}</div>
                <div>미완료: {notDoneCount}</div>
                <div className="underline"></div>
                <br />
            </div>

            <div className="list_wrapper">
                {getSearchResult.map((it) => (
                    <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
