import logo from './logo.svg';
import './App.css';
import LikeComponent from './components/LikeComponent';
import { Route, Routes } from 'react-router-dom';
import Page2 from './components/Page2';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LikeComponent/>} />
        <Route path='/page2' element={<Page2/>} />
      </Routes>
    </div>
  );
}

export default App;
