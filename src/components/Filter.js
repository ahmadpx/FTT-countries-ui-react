import React from 'react';
import styled from 'styled-components'
import CheckBox from './CheckBox'
const FilterWraper = styled.div`
  display:flex;
  align-items:center;
  padding: 0 14px;
  & + & {
    border-top:1px solid rgba(0,0,0,0.03);
  }
  &:hover{
    background:rgba(0,0,0,0.03);
  }
`

const Label = styled.label`
  display:flex;
  align-items:center;
  flex-grow:1;
  font-size:14px;
  height:40px;
  cursor:pointer;
`
const Value = styled.span`
  flex-grow:1;
  font-weight:bold;
`
const Count = styled.span`
  font-size:12px;
`
const Filter = ({ filter, toggleFilter, isSelectedFilter }) => (<FilterWraper key={filter.value}>

  <CheckBox
    id={filter.value}
    type="checkbox"
    checked={isSelectedFilter(filter)}
    onChange={() => toggleFilter(filter)}
  />

  <Label htmlFor={filter.value}>
    <Value>{filter.value}</Value>
    <Count>({filter.count})</Count>
  </Label>
</FilterWraper>)

export default Filter