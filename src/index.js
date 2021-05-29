import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import colors from './colors.json';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from './providers/auth';
import { RouthContext, RouthProvider } from './providers/route';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body{
    z-index: 0;
    background-color: ${colors.light_black};
    width: 100vw;
    height: 100%;
    font-family: Helvetica, sans-serif;
    overflow: hidden;
  }

  a{
    text-decoration: none;
    color: ${colors.white};
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
      <RouthProvider>
        <GlobalStyle />
        <App />
      </RouthProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

