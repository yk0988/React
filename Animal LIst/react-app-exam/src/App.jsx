import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  const [mode, setMode] = useState('READ');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    { id: 1, title: 'Cat', body: '고양이' },
    { id: 2, title: 'Dog', body: '개' },
    { id: 3, title: 'chipmunk', body: '줄무늬다람쥐' }
  ]);

  let content = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome to the farm 🌾🐄" body="Hello nice to meet you! 👩‍🌾🐑🐔" />;
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />;
    contextControl = (
      <>
        <li className="update">
          <a href={`/update/${id}`} onClick={(event) => { event.preventDefault(); setMode('UPDATE'); }}>Update</a>
        </li>
        <li className="delete">
          <input type="button" value="Delete" onClick={() => {
            const newTopics = topics.filter(topic => topic.id !== id);
            setTopics(newTopics);
            setMode('WELCOME');
          }} />
        </li>
      </>
    );
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setMode('READ');
          setId(nextId);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === 'UPDATE') {
    let title, body = null;
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
          const updatedTopics = topics.map((t) =>
            t.id === id ? { ...t, title: newTitle, body: newBody } : t
          );
          setTopics(updatedTopics);
          setMode('READ');
        }}
      />
    );
  }

  return (
    <div>
      <Header
        title="🦊animal🦁"
        onChangMode={() => { setMode('WELCOME'); }}
      />
      <Nav
        topics={topics}
        onChangMode={(_id) => { setMode('READ'); setId(_id); }}
      />
      {content}
      <ul className="control-buttons">
        <li>
          <a
            href="/create"
            onClick={(event) => { event.preventDefault(); setMode('CREATE'); }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
