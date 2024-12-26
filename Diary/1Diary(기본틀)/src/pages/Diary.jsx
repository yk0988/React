import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div>
      <div>{id}번 Diary</div>
      <div>Diary pages</div>
    </div>
  );
};

export default Diary;
