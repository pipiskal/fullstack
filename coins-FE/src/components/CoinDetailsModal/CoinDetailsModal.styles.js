import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${({ $isVisible }) => $isVisible && fadeIn} 300ms ease-out;
  animation-fill-mode: forwards;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: ${({ $isVisible }) => $isVisible && scaleIn} 300ms ease-out;
  animation-fill-mode: forwards;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 8px;
  transition: color 200ms ease;

  &:hover {
    color: #333;
  }
`;
