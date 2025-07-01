import styled from "styled-components";

const SimpleSkeleton = styled.div`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "20px"};
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 8px;

  background-image: linear-gradient(
    90deg,
    #171f2c 0%,
    #1e2a3a 50%,
    #171f2c 100%
  );
  background-size: 200% 100%;
  animation: shimmer 3s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default SimpleSkeleton;
