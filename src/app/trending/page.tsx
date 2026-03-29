import styled from "styled-components";
import itineraryContent from "@/content/itinerary.json";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";

const MainContainer = styled.div`
  max-width: clamp(100vw, 45vw, 90vw);
  margin: 2%;
`;

const HeadTitle = styled.h2`
  padding-top: clamp(1.3rem, 1.6vw, 2.3rem);
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.7rem, 1.6vw, 1.9rem);
  color: #4a2c2a;
`;

const Title = styled.h2`
  padding-top: clamp(1.3rem, 1.6vw, 2.3rem);
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.3rem, 1.6vw, 1.9rem);
  color: #4a2c2a;
`;

const P = styled.div`
  max-width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  color: #7e4555;
`;

const Ul = styled.ul`
  color: #4a2c2a;
  list-style-type: disc;
  text-align: left;
`;

const Li = styled.li`
  font-size: clamp(1.3rem, 2vw, 1.6rem);
`;

export default function TrendingPage() {
  const content = itineraryContent;

  return (
    <MainContainer>
      <Heading heading={content.heading} />
      <br />
      <P>{content.intro}</P>

      <SubHeading subHeading={content.overview.subHeading} />
      <P>{content.overview.content}</P>

      <HeadTitle>{content.highlights.title}</HeadTitle>
      <Ul>
        {content.highlights.items.map((item, i) => (
          <Li key={i}>{item}</Li>
        ))}
      </Ul>

      <SubHeading subHeading="Char Dham Yatra Itinerary – Day Wise Plan" />

      {content.days.map((day, index) => (
        <div key={index}>
          <Title>{day.title}</Title>
          <P>{day.content}</P>
          <hr />
        </div>
      ))}
    </MainContainer>
  );
}
