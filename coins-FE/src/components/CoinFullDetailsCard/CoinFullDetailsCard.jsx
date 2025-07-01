import {
  Wrapper,
  PriceDetailsWrapper,
  FlexRow,
  Price,
  Header,
  PriceChangesWrapper,
  PriceChangesRow,
} from "./CoinFullDetailsCard.styles";

import { IoClose } from "react-icons/io5";

import CoinAvatar from "../CoinAvatar/CoinAvatar";
import PercentagePriceChangeTag from "../PercentagePriceChangeTag/PercentagePriceChangeTag";
import TwentyFourHoursPriceCard from "../TwentyFourHoursPriceCard/TwentyFourHoursPriceCard";

const CoinFullDetailsCard = ({
  currentPrice,
  currencySymbol,
  twentyFourPriceChangePercentage,
  onClose,
  image,
  high24h,
  low24h,
}) => {
  return (
    <Wrapper>
      <Header>
        <CoinAvatar image={image} shortName={"btc"} name={"takis"} />

        {/* <CloseButton onClick={onClose}> */}
        <IoClose size={24} onClick={onClose} />
        {/* </CloseButton> */}
      </Header>

      <PriceDetailsWrapper>
        <span>Current Price</span>

        <FlexRow>
          <Price>{`${currencySymbol}${currentPrice}`}</Price>

          <PercentagePriceChangeTag
            percentage={twentyFourPriceChangePercentage}
          />
        </FlexRow>

        <FlexRow>
          <TwentyFourHoursPriceCard
            type={"high"}
            currencySymbol={currencySymbol}
            price={high24h}
          />

          <TwentyFourHoursPriceCard
            type={"low"}
            currencySymbol={currencySymbol}
            price={low24h}
          />
        </FlexRow>
      </PriceDetailsWrapper>

      {/* Diagram will be here */}

      <PriceChangesWrapper>
        <p>Icon Price Changes</p>

        {/* This will be a map */}
        <PriceChangesRow>
          <span>24H</span>

          <span>+2.45%</span>
        </PriceChangesRow>

        <PriceChangesRow>
          <span>24H</span>

          <span>+2.45%</span>
        </PriceChangesRow>

        <PriceChangesRow>
          <span>24H</span>

          <span>+2.45%</span>
        </PriceChangesRow>

        <PriceChangesRow>
          <span>24H</span>

          <span>+2.45%</span>
        </PriceChangesRow>

        <PriceChangesRow>
          <span>24H</span>

          <span>+2.45%</span>
        </PriceChangesRow>
      </PriceChangesWrapper>
    </Wrapper>
  );
};

export default CoinFullDetailsCard;
