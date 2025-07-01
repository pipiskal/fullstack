import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 32px;
  border-radius: 14px;
  border: 1px solid #2e3948;
  background-color: ${(props) => (props.$isDisabled ? "#1e2735" : "#171f2c")};
  pointer-events: ${(props) => (props.$isDisabled ? "none" : "auto")};
  opacity: ${(props) => (props.$isDisabled ? 0.7 : 1)};
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #3e4b5a;
    background-color: #1e2735;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    top: -2px;
  }
`;

export const TitleAndPriceChangePercentage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CurrentPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
