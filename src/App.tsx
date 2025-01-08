import React from 'react';
import ToDo from 'pages/ToDo';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <>
      <GlobalStyle />

      <ToDo />
    </>
  );
}

export default App;
