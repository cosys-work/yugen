import styled from "styled-components";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { Contact } from "@/components/Contact";
import pagesContent from "@/content/pages.json";

const MainContainer = styled.div`
  width: clamp(100vw, 45vw, 90vw);
  margin: clamp(2rem, 1.6vw, 3rem);
`;

const Title = styled.h2`
  padding-top: clamp(1.3rem, 1.6vw, 2.3rem);
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.3rem, 1.6vw, 1.9rem);
  color: #4a2c2a;
`;

const P = styled.p`
  max-width: 90%;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  color: #7e4555;
`;

export default function TermsPage() {
  const content = pagesContent.terms;

  return (
    <MainContainer>
      <Heading heading={content.heading} />
      <div>
        {content.sections.map((section, index) => (
          <div key={index}>
            <Title>{section.title}</Title>
            <P>{section.content}</P>
          </div>
        ))}
        <SubHeading subHeading={content.contactSubheading} />
        <Contact />
      </div>
    </MainContainer>
  );
}
