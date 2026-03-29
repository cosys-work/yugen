import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import bgImage2 from "@/assets-webp/Background-color/bg1.webp";
import logo from "@/assets-webp/Logo/YugenIndiaLogo.webp";
import logo2 from "@/assets-webp/Logo/skyLinkLogo.webp";

const Div = styled.div`
  margin-top: clamp(3rem, 2vw, 5rem);
  padding-bottom: clamp(3rem, 2vw, 5rem);
  width: 100%;
  max-height: 100vh;
  background-image: linear-gradient(
      rgba(68, 35, 59, 0.8),
      rgba(68, 35, 59, 0.5)
    ),
    url(${bgImage2.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (min-width: 660px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledImage = styled(Image)`
  position: inline;
  padding: 0;
  margin-top: clamp(-4rem, 2vw, -8rem);
  height: clamp(13rem, 35vw, 30rem);
  width: clamp(13rem, 35vw, 30rem);
`;

const P = styled.p`
  max-width: 90%;
  margin-left: 3.1rem;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1.4rem, 1.6vw, 1.8rem);
  text-transform: capitalize;
  color: white;
`;

const LinkIs = styled(Link)`
  margin-left: clamp(10%, 1.6vw, 6%);
  display: block;
  width: 100%;
  text-align: left;
  color: white;
  text-decoration: none;
  padding: 0.4rem;
  font-size: clamp(1.4rem, 1.6vw, 1.8rem);
  text-transform: capitalize;
`;

export function Footer() {
  return (
    <Div>
      <Link href="/">
        <StyledImage src={logo} alt="Yugen India Travel" />
      </Link>

      <LinkIs href="/privacy">Privacy Policy</LinkIs>
      <LinkIs href="/refund">Refund Policy</LinkIs>
      <LinkIs href="/terms">Terms and Conditions</LinkIs>

      <P>
        powered by:{" "}
        <Link href="/">
          <StyledImage src={logo2} alt="SkyLink" />
        </Link>
      </P>
    </Div>
  );
}
