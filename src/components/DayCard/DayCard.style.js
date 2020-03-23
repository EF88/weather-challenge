import styled from 'styled-components';

export const DayCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 400px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  :hover {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const Divider = styled.hr`
  width: 80%;
`;

export const ConditionsSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const ConditionLabel = styled.div`
  font-size: 12px;
  text-align: center;
`;