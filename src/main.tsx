import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './Globals/Styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
