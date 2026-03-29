import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardIs = styled(Card)`
  width: clamp(14rem, 40vw, 19rem);
  min-height: 11rem;
  padding: clamp(0.5rem, 2vw, 1rem);
  background: transparent;
  box-shadow: 0.2rem 0.2rem 0.7rem #423e0bff;
  border: none;
  margin: clamp(0.3rem, 2vw, 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: clamp(1.4rem, 2vw, 1.7rem);
  text-transform: capitalize;
  color: #db4242;
`;

const Text = styled.div`
  font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  color: #44233b;
  font-weight: 400;
  text-transform: capitalize;
`;

interface TourCardProps {
  title: string;
  text: string;
}

export function TourCard({ title, text }: TourCardProps) {
  return (
    <div>
      <CardIs>
        <div style={{ padding: "1rem" }}>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </div>
      </CardIs>
    </div>
  );
}
