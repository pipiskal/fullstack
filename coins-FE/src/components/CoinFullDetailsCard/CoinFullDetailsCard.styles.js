import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  min-height: 500px;
  max-height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #171f2c;
  border: 1px solid #2e3948;
  border-radius: 10px;
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 100px 0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(51, 58, 86);
    border-radius: 10px;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: #171f2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #2e3948;
  margin-bottom: 24px;
`;

export const CloseButton = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  cursor: pointer;
`;

export const PriceDetailsWrapper = styled.div`
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  align-self: center;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const CurrentPriceLabel = styled.span`
  font-size: 12px;
  color: #e0e0e0;
  margin-bottom: 4px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: #f8f8f8;
`;

export const PriceChangesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const PriceChangesRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: ${(props) => (props.$isLast ? "none" : "1px solid #2e3948")};
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const PriceChangesLabel = styled.span`
  font-size: 16px;
  padding: 16px;
  color: #e0e0e0;
`;

export const TimelineIndicator = styled.span`
  font-size: 12px;
  color: #e0e0e0;
`;

export const TimelineValue = styled.span`
  font-size: 12px;
  color: #e0e0e0;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  gap: 8px;
`;

export const Description = styled.p`
  padding: 24px;
  font-size: 14px;
  color: #e0e0e0;
`;
