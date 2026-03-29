import { Container } from "react-bootstrap";
import styled from "styled-components";
import { SubHeading } from "./SubHeading";
import { TourCard } from "./TourCard";
import homeContent from "@/content/home.json";

const ContainerIs = styled(Container)`
  min-width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;

  @media (max-width: 660px) {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  width: 30%;

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 576px) {
    width: 48%;
  }
`;

interface CharDhamAtGlanceProps {
  subHeading: string;
}

export function CharDhamAtGlance({ subHeading }: CharDhamAtGlanceProps) {
  const cards = homeContent.atGlance.cards;

  return (
    <div>
      <SubHeading subHeading={subHeading} />
      <ContainerIs>
        {cards.map((card, index) => (
          <TourCard key={index} title={card.title} text={card.text} />
        ))}
      </ContainerIs>
    </div>
  );
}
