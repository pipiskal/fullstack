import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CoinImage = styled.img`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

export const ShortName = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: white;
`;
