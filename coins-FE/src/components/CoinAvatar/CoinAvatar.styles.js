import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CoinImage = styled.img`
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #f8f8f8;
`;

export const ShortName = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #929aa6;
`;
