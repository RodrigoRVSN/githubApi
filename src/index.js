import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './components/GlobalStyle/styles';

import { AuthProvider } from './providers/auth';
import { RouthProvider } from './providers/route';

ReactDOM.render(

  <React.StrictMode>
    <AuthProvider>
      <RouthProvider>
        <GlobalStyle />
        <App />
      </RouthProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

