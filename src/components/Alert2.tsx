import styled from "styled-components";
import homeContent from "@/content/home.json";

const Div = styled.div`
  text-align: center;
  overflow-x: hidden;
  background-color: #a3a333;
  padding: 0.7rem;
`;

const H2 = styled.h2`
  font-size: clamp(1.2rem, 1.6vw, 2rem);
  text-transform: capitalize;
  color: #4a2c2a;
`;

export function Alert2() {
  return (
    <Div>
      <H2>{homeContent.alerts.alert2}</H2>
    </Div>
  );
}
