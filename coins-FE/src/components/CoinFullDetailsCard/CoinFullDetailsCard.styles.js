import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #171f2c;
  border-radius: 10px;
  border: 1px solid #2e3948;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #2e3948;
`;

export const PriceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 16px;
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
