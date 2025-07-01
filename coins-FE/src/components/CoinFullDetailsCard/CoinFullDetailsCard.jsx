import {
  Wrapper,
  PriceDetailsWrapper,
  FlexRow,
  Price,
  Header,
  PriceChangesWrapper,
  PriceChangesRow,
  CloseButton,
  TimelineIndicator,
  CurrentPriceLabel,
  PriceChangesLabel,
  TimelineValue,
  Description,
} from "./CoinFullDetailsCard.styles";

import { IoClose } from "react-icons/io5";

import CoinAvatar from "../CoinAvatar/CoinAvatar";
import PercentagePriceChangeTag from "../PercentagePriceChangeTag/PercentagePriceChangeTag";
import TwentyFourHoursPriceCard from "../TwentyFourHoursPriceCard/TwentyFourHoursPriceCard";
import SimpleSkeleton from "../SimpleSkeleton/SimpleSkeleton";

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
  prices_changes_percentage,
  description,
}) => {
  return (
    <Wrapper>
      <Header>
        <CoinAvatar image={image} shortName={shortName} name={name} />

        <CloseButton>
          <IoClose size={28} onClick={onClose} />
        </CloseButton>
      </Header>

      {isLoading ? (
        <SimpleSkeleton height={"580px"} width={"100%"} />
      ) : (
        <>
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

          {/* A Diagram could be here be here */}

          {prices_changes_percentage.length > 0 && (
            <PriceChangesWrapper>
              <PriceChangesLabel>Price Changes</PriceChangesLabel>

              {prices_changes_percentage.map((percentage, index) => (
                <PriceChangesRow
                  key={index}
                  $isLast={index === prices_changes_percentage.length - 1}
                >
                  <TimelineIndicator>{percentage.name}</TimelineIndicator>

                  <TimelineValue> {`${percentage.value} %`}</TimelineValue>
                </PriceChangesRow>
              ))}
            </PriceChangesWrapper>
          )}

          {description && <Description>{description}</Description>}
        </>
      )}
    </Wrapper>
  );
};

export default CoinFullDetailsCard;
