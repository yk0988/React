import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  // 상태 관리: 모드, 선택된 아이디, 다음 ID 값, 주제 목록
  const [mode, setMode] = useState('READ');  // 초기 모드는 'READ'
  const [id, setId] = useState(null);  // 선택된 주제의 ID
  const [nextId, setNextId] = useState(4);  // 새로 추가될 주제의 ID
  const [topics, setTopics] = useState([  // 초기 주제 목록
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  let content = null;  // 콘텐츠 렌더링을 위한 변수
  let contextControl = null;  // 'READ' 모드에서 추가적인 컨트롤 버튼 (Update, Delete)

  // 모드가 'WELCOME'일 때 콘텐츠 설정
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello Web" />;
  } 
  // 모드가 'READ'일 때 콘텐츠 설정
  else if (mode === 'READ') {
    let title, body = null;
    // 선택된 ID에 맞는 주제를 찾아서 내용을 설정
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (
      <>
        {/* Update 링크 */}
        <li><a href={`/update/${id}`}
          onClick={(event) => {
            event.preventDefault();  // 링크의 기본 동작 방지
            setMode('UPDATE');  // 모드를 'UPDATE'로 변경
          }}>Update</a></li>
        {/* Delete 버튼 */}
        <li><input type="button" value="Delete" onClick={() => {
            const newTopics = [];  // 새로운 배열을 생성하여 삭제할 항목을 제외
            for (let i = 0; i < topics.length; i++) {
              if (topics[i].id !== id) {
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);  // 새 배열로 상태 업데이트
            setMode('WELCOME');  // 'WELCOME' 모드로 변경
        }} /></li>
      </>
    );
  } 
  // 모드가 'CREATE'일 때 콘텐츠 설정
  else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          // 새로운 주제 생성
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];  // 기존 주제 목록 복사
          newTopics.push(newTopic);  // 새 주제를 추가
          setTopics(newTopics);  // 상태 업데이트
          setMode('READ');  // 'READ' 모드로 변경
          setId(nextId);  // 새로 생성된 주제의 ID로 변경
          setNextId(nextId + 1);  // 다음 ID 값을 하나 증가
        }}
      />
    );
  } 
  // 모드가 'UPDATE'일 때 콘텐츠 설정
  else if (mode === 'UPDATE') {
    let title, body = null;
    // 선택된 ID에 맞는 주제를 찾아서 내용 설정
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(newTitle, newBody) => {
          // 주제를 수정하는 함수
          const updatedTopics = topics.map((t) =>
            t.id === id ? { ...t, title: newTitle, body: newBody } : t
          );
          setTopics(updatedTopics);  // 수정된 주제 목록으로 상태 업데이트
          setMode('READ');  // 'READ' 모드로 변경
        }}
      />
    );
  }

  return (
    <div>
      {/* 헤더 컴포넌트 */}
      <Header
        title="WEB"
        onChangMode={() => {
          setMode('WELCOME');  // 헤더 클릭 시 'WELCOME' 모드로 전환
        }}
      />
      {/* 네비게이션 컴포넌트 */}
      <Nav
        topics={topics}
        onChangMode={(_id) => {
          setMode('READ');  // 선택된 주제의 ID로 'READ' 모드로 전환
          setId(_id);
        }}
      />
      {content}  {/* 콘텐츠 렌더링 */}
      <ul>
        {/* 'Create' 버튼 */}
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode('CREATE');  // 'CREATE' 모드로 전환
            }}
          >
            Create
          </a>
        </li>
        {contextControl}  {/* 'READ' 모드에서 나타날 추가 컨트롤 (Update, Delete) */}
      </ul>
    </div>
  );
}

export default App;
