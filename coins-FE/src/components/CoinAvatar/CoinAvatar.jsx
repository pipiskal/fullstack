import {
  Wrapper,
  CoinImage,
  InformationWrapper,
  Name,
  ShortName,
} from "./CoinAvatar.styles";

const CoinAvatar = ({ image, name, shortName }) => {
  return (
    <Wrapper>
      <CoinImage src={image} alt={`bitcoin image ${shortName}`} />

      <InformationWrapper>
        <Name>{name}</Name>

        <ShortName>{shortName}</ShortName>
      </InformationWrapper>
    </Wrapper>
  );
};

export default CoinAvatar;
