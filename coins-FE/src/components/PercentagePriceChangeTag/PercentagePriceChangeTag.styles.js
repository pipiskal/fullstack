import styled from "styled-components";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const PERCENTAGE_COLORS_BACKGROUND = {
  positive: "#1B4739",
  negative: "#f23939",
  neutral: "rgba(255, 255, 255, 0.1)",
};

const PERCENTAGE_COLORS_TEXT = {
  positive: "#49dc7f",
  negative: "#f8f8f8",
  neutral: "#f8f8f8",
};

export const Wrapper = styled.div`
  min-width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $percentageChange }) =>
    PERCENTAGE_COLORS_BACKGROUND[$percentageChange]};
  border-radius: 20px;
  padding: 2px 8px;
`;

export const PercentageWrapper = styled.span`
  color: ${({ $percentageChange }) =>
    PERCENTAGE_COLORS_TEXT[$percentageChange]};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.7px;
`;

export const TrendArrowUp = styled(FaArrowTrendUp)`
  color: #49dc7f;
  font-size: 12px;
  margin-right: 4px;
`;

export const TrendArrowDown = styled(FaArrowTrendDown)`
  color: white;
  font-size: 12px;
  margin-right: 4px;
`;
