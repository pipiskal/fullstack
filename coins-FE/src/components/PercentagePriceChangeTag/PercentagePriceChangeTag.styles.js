import styled from "styled-components";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.hasPriceIncreased ? "#1B4739" : "rgb(242, 57, 57)"};
  border-radius: 20px;
  padding: 2px 8px;
`;

export const PercentageWrapper = styled.span`
  color: ${(props) =>
    props.hasPriceIncreased ? "#49dc7f" : "rgb(255, 255, 255)"};
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
