import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("정말 삭제할까요?(삭제 시 복구불가)")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", { replace: true });
    }
  };

  if (!data) {
    return <div>불러오는 중...</div>;
  } else {
    return (
      <div>
        <Header
          title={"수정하기"}
          leftChild={<Button text={"< 뒤로"} onClick={goBack} />}
          rightChild={
            <Button
              type={"negative"}
              text={"삭제하기"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};
export default Edit;