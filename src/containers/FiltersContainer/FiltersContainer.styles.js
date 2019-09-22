
import styled from 'styled-components';
export const Filters = styled.aside`
  min-width:250px;
  padding-right:0 30px 0 0 ;
  padding: 0 10px;

`
export const Logo = styled.div`
  display:block;
  text-align:center;
  width:100%;
  height:150px;
  background-image:${props => `url("${props.img}")`};
  background-position:center;
  background-repeat:no-repeat;
  background-size: auto 200px;
  
`
export const ResetBtn = styled.button`
  display:flex;
  height:40px;
  background:#333;
  color:white;
  justify-content:center;
  align-items:center;
  width:100%;
  margin-top:20px;
  font-size:16px;
  cursor:pointer;
`
