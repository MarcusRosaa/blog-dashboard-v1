import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'react-quill/dist/quill.snow.css';

import Home from '@src/Pages/Home';
import Login from '@src/Pages/Login';
import Register from '@src/Pages/Register';
import Panel from '@src/Pages/Panel';
import PageNotFound from '@src/Pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>

      <Route path='/' exact element={<Panel />} />
      <Route path='/home' element={<Panel />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/admin' element={<Panel />} />

      <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;