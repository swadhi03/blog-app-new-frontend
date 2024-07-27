import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
