import { IoClose } from "react-icons/io5";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./CoinDetailsModal.styles";

const CoinDetailsModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay $isVisible={isOpen}>
      <ModalContent $isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoClose size={24} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CoinDetailsModal;
