import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 수정된 import 경로
import Button from "./Button";
import "./DiaryList.css";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const DiaryList = ({ data }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);  // 빈 배열로 초기화

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  // useEffect 내에서 compare 함수의 오타 수정, 배열 복사 및 정렬
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    // 배열을 복사하고 정렬하여 상태 업데이트
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>

        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
      {/* sortedData를 사용하여 일기 목록 렌더링 */}
      {sortedData.map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default DiaryList;
