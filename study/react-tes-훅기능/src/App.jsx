import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

// 객체에서 콤마를 추가합니다.
// const BodyProps = {
//   name: "KBM",
//   location: "컴퓨터 학원",
//   favorList: ["복순이", "콩순이", "쉬순이"],
// };

function ChildComp() {
  return <div>Child Component</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body props>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
