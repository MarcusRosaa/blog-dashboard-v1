import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'react-quill/dist/quill.snow.css';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Panel from './Pages/Panel';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>

      <Route path='/' exact element={<Home />} />
      <Route path='/home' element={<Home />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin' element={<Panel />} />

      <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;