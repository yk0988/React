import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const Home = () => {
    return (
        <div>
          <Editor 
          onSubmit={() => {
            alert("작성완료 버튼클릭")
        }}
          
        />
        </div>    
    );
};

export default Home;
