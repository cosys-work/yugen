import styled from "styled-components";
import headerImg from "@/assets-webp/Char Dham Yatra Family Package (1).webp";
import mobileImage from "@/assets-webp/Header/Header_Mobile-new.webp";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 660px) {
    height: auto;

    img {
      height: auto;
      object-fit: contain;
    }
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <picture>
        <source srcSet={mobileImage.src} media="(max-width:660px)" />
        <img
          src={mobileImage.src}
          alt="Char Dham Yatra Family Package"
          width="100%"
          height="100vh"
          loading="eager"
          decoding="async"
        />
      </picture>
    </HeaderWrapper>
  );
}
