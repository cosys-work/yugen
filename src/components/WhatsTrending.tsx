import { Card } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import { SubHeading } from "./SubHeading";
import homeContent from "@/content/home.json";

const Container = styled.div`
  padding: 2rem;
  background-color: #fdf5e6;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const CardContainer = styled(Card)`
  background-color: transparent;
  padding: 0.7rem;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h5`
  text-transform: capitalize;
  font-size: clamp(2rem, 1.6vw, 2rem);
  font-weight: 400;
  font-family: "Lora", serif;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h6`
  max-width: clamp(70%, 45vw, 100%);
  padding-top: clamp(1rem, 1.6vw, 2rem);
  font-weight: 400;
  color: #cc3366;
  text-transform: capitalize;
  font-size: clamp(1.3rem, 1.6vw, 2rem);
  padding-bottom: clamp(2rem, 1.6vw, 2.5rem);
`;

const CardText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
`;

const LinkIs = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1.3rem;
  background-color: #7e4555;
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: transparent;
    border: 1px solid #7e4555;
    color: #7e4555;
  }
`;

export function WhatsTrending() {
  const content = homeContent.whatsTrending;

  return (
    <Container>
      <SubHeading subHeading={content.subHeading} />
      <Div>
        <CardContainer style={{ width: "32rem" }}>
          <CardBody>
            <Title>{content.title}</Title>
            <Subtitle className="mb-2">{content.subtitle}</Subtitle>
            <CardText>{content.description}</CardText>
            <LinkIs href={content.ctaLink}>{content.cta}</LinkIs>
          </CardBody>
        </CardContainer>
      </Div>
    </Container>
  );
}
