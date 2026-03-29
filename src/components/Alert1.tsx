import styled from "styled-components";
import homeContent from "@/content/home.json";

const Div = styled.div`
  text-align: center;
  overflow-x: hidden;
  background-color: #f5e2d3;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  color: #4a2c2a;
`;

const Span = styled.span`
  color: #cc3366;
`;

export function Alert1() {
  return (
    <Div>
      <H1>{homeContent.alerts.alert1}</H1>
    </Div>
  );
}
