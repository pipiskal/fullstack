import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => (props.type === "red" ? "red" : "blue")};
  border: 1px solid ${(props) => (props.type === "red" ? "red" : "blue")};
`;
