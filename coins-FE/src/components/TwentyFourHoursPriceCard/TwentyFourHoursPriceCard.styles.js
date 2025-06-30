import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #1c2534;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 12px;
`;

export const Title = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #9ea6b3;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.type === "high" ? "#4be283" : "rgba(245, 93, 93, 0.85)"};
`;
