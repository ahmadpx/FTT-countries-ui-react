import React from 'react';
import styled from 'styled-components';
const CheckBoxWraper = styled.span`

  position: relative;
  flex-basis: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  input{
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      z-index: 1;
      cursor: pointer;
      margin:0;
  }
  span{
      background:white;
      border:2px solid rgba(0,0,0,0.1);
      width:100%;
      height:100%;
      border-radius: 50%;
      display: block;
      &:after{
          transition:0.2s;
          content:"";
          display: block;
          height:9px;
          width: 4px;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          transition:0.2s;
          transform:rotate(45deg) scale(0);
          opacity: 0;
          position: absolute;
          top:2px;
          bottom:0;
          margin:auto;
          left:3px;
          right:0;
      }
  }
 
  input:checked + span{

      background:#333;
      border-color:#333;
  }
  input:checked + span:after{
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(45deg) scale(1);
      opacity: 1;
      
  }
  
`

export default props => (<CheckBoxWraper>
  <input type="checkbox" {...props} />
  <span />
</CheckBoxWraper>)
