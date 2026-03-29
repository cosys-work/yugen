import styled from "styled-components";
import { CSSProperties } from "react";

const Div = styled.div`
  margin: 5% auto 2%;
`;

const H1 = styled.h1`
  font-size: clamp(2rem, 2.3vw, 2.8rem);
  font-family: "Lora", serif;
  font-weight: 700;
  text-transform: capitalize;
  color: #44233b;
`;

interface SubHeadingProps {
  subHeading: string;
  style?: CSSProperties;
}

export function SubHeading({ subHeading, style }: SubHeadingProps) {
  return (
    <Div>
      <H1 style={style}>{subHeading}</H1>
    </Div>
  );
}
