import { Wrapper, Title, Description } from "./TitleDescCard.styles";

const TitleDescCard = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TitleDescCard;
