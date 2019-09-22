import React from 'react';
import styled from 'styled-components';

const CountryLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  background: white;
  margin-top: 40px;
  border-radius: 15px;
`;
const Flag = styled.span`
  width: 50px;
  height: 50px;
  background: #dfdfdf ${props => `url("${props.img}")`} no-repeat center;
  background-size: auto 80px;
  border-radius: 50%;
  display: inline-flex;
  margin-bottom: 10px;
  margin-top: -25px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
`;

const CountryName = styled.h4`
  font-weight: bolder;
  font-size: 24px;
  margin: 0 10px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 19ch;
`;
const Details = styled.div`
  background: white;
  width: 100%;
  padding: 10px 0;
  border-radius: 15px;
`;
const Detail = styled.div`
  padding: 10px 20px;
  width: calc(100% - 40px);
  color: #333;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  & > strong {
    display: inline-block;
    min-width: 100px;
  }
`;
const Label = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #dfdfdf;
  color: #333;
  font-size: 12px;
  margin: 2px;
  padding: 2px 3px;
  border-radius: 2px;
`;
export default ({ country }) => {
  return (
    <CountryLi>
      <Flag
        img={`https://www.countryflags.io/${country.code.toLowerCase()}/flat/64.png`}
      />
      <CountryName>{country.name}</CountryName>
      <Details>
        <Detail>
          <strong>population: </strong>
          {country.population}
        </Detail>

        <Detail>
          <strong>region: </strong>
          {country.region}
        </Detail>

        <Detail>
          <strong>capital: </strong>
          {country.capital}
        </Detail>

        <Detail>
          <strong>currencies: </strong>
          {country.currencies.map(currency => (
            <Label key={currency}>{currency}</Label>
          ))}
        </Detail>

        <Detail>
          <strong>languages: </strong>
          {country.languages.map(lang => (
            <Label key={lang}>{lang}</Label>
          ))}
        </Detail>
      </Details>
    </CountryLi>
  );
};
