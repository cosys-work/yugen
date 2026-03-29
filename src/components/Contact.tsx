import styled from "styled-components";

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

export function Contact() {
  return (
    <div>
      <Title>Yugen India Travel</Title>
      <P>
        Location: HEAD OFFICE :- 118,VATS MARKET MADHUBAN CHOWK NEAR PITAMPURA
        METRO DELHI 110034
      </P>
      <P>
        CORPRATE OFFICE - SLR COMPLEX,1ST FLOOR, INDRA GANDHI ROAD, MEDCHAL,
        HYDERABAD 501401
      </P>
      <P>Email:enq.yugenindiatravel@gmail.com</P>
      <P>
        <a href="tel:+918770872054">Phone : +918770872054</a>
      </P>
    </div>
  );
}
