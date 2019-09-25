import styled, { createGlobalStyle } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding-top: 40px;
`;
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  body{
    font-family: 'Ubuntu', sans-serif;
    background:rgba(0,0,0,0.02);
  }
`;
export const FrameworkPadge = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: 30px;
  left: 30px;
  img {
    max-width: 90%;
  }
`;
