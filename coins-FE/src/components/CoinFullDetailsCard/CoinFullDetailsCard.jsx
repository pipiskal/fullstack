import {
  Wrapper,
  PriceDetailsWrapper,
  FlexRow,
  Price,
  Header,
  PriceChangesWrapper,
  PriceChangesRow,
  CloseButton,
  CurrentPriceLabel,
  SimpleText,
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
  name,
  shortName,
  isLoading,
}) => {
  return (
    <Wrapper>
      <Header>
        <CoinAvatar image={image} shortName={shortName} name={name} />

        <CloseButton>
          <IoClose size={28} onClick={onClose} />
        </CloseButton>
      </Header>

      <PriceDetailsWrapper>
        <CurrentPriceLabel>Current Price</CurrentPriceLabel>

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
            align="center"
          />

          <TwentyFourHoursPriceCard
            type={"low"}
            currencySymbol={currencySymbol}
            price={low24h}
            align="center"
          />
        </FlexRow>
      </PriceDetailsWrapper>

      {/* Diagram will be here */}

      {isLoading ? (
        <SimpleText>Loading...</SimpleText>
      ) : (
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
      )}
    </Wrapper>
  );
};

export default CoinFullDetailsCard;
