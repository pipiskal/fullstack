import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin: 32px 0;
  padding: 0 64px;
  transition: all 0.3s ease;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 32px;
  }

  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;

export const SimpleText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const LoadMoreButton = styled.button`
  width: 400px;
  font-size: 16px;
  padding: 24px;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #2e3948;
  background-color: #1e2735;
  transition: all 0.3s ease;
  align-self: center;
  cursor: pointer;
`;
