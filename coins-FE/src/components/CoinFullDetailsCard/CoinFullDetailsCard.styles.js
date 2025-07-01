import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #171f2c;
  border: 1px solid #2e3948;
  border-radius: 10px;
  user-select: none;
`;

export const Header = styled.div`
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
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  gap: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;
`;

export const SimpleText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;
