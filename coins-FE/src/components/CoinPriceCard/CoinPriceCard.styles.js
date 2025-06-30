import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px;
  border-radius: 14px;
  border: 1px solid #2e3948;
  background-color: #171f2c;
`;

export const TitleAndPriceChangePercentage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 4px;
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #929aa6;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: #f8f8f8;
`;

export const TwentyFourHourHighAndLowPrices = styled.div`
  display: flex;
  gap: 24px;
`;
