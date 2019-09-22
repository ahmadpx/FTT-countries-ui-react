import React from 'react';
import earth from './../loading.gif';
import styled from 'styled-components';
const FullPage = styled.section`

  display:flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  width:100vw;
  height:100vh;
  background:#fff;
  z-index:100;
  top:0;
  left:0;
 
  
`
export default () => <FullPage ><img src={earth} /></FullPage>