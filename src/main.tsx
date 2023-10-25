import React from 'react';
import ReactDOM from 'react-dom';

import App from '@src/App';
import GlobalStyle from '@src/Globals/Styles/globalStyles';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
  )
}


