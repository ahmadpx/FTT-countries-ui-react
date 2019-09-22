
import styled, { createGlobalStyle } from 'styled-components';

export const Layout = styled.div`
  display:flex;
  max-width:1200px;
  margin:auto;
  padding-top:40px;
`
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  body{
    font-family: 'Ubuntu', sans-serif;
    background:rgba(0,0,0,0.02);
  }
`
