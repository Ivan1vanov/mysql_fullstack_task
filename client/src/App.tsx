import React from 'react';
import MainPage from './Pages/MainPage/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PostPage from './Pages/PostPage/PostPage';
import NavPanel from './Components/Navbar/Navbar';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavPanel/>
      <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/auth' element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
