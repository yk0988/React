import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';  // react-router-dom에서 Routes와 Route 임포트
import './App.css';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/new';

function App() {
  return (
    <div className="App">
      <Router>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} /> 
          <Route path="/edit" element={<Edit />} />  
        </Routes>
        <div>
          <Link to={"/"}>HOME</Link>
          <Link to={"/new"}>NEW</Link>
          <Link to={"/diary/2"}>DIARY</Link>
          <Link to={"/edit"}>EDIT</Link>
        </div>
      </Router> 
      
    </div>

  );
}

export default App;
