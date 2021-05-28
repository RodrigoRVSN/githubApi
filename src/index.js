import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './providers/auth';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  
  ::-webkit-scrollbar{
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #FFCE00;
    border-radius: 0.5rem;
  }
`

ReactDOM.render(

  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

