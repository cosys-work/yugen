import { Header } from "@/components/Header";
import { Alert1 } from "@/components/Alert1";
import { Alert2 } from "@/components/Alert2";
import { WhatsTrending } from "@/components/WhatsTrending";
import { CharDhamAtGlance } from "@/components/CharDhamAtGlance";
import FormForDetails from "@/components/FormForDetails";
import CharDhamCarousel from "@/components/CharDhamCarousel";
import DoDhamCarousel from "@/components/DoDhamCarousel";
import KedarnathCarousel from "@/components/KedarnathCarousel";
import Included from "@/components/Included";
import Excluded from "@/components/Excluded";
import Reasons from "@/components/Reasons";
import TrustCred from "@/components/TrustCred";
import CharDhamReg from "@/components/CharDhamReg";
import Faqs from "@/components/Faqs";
import Reviews from "@/components/Reviews";
import WhoweAre from "@/components/WhoweAre";
import CustomizeReg from "@/components/CustomizeReg";
import bgImage from "@/assets-webp/Background-color/bg2.webp";
import { Footer } from "@/components/Footer";
import { AllRightsReserved } from "@/components/AllRightsReserved";
import styled from "styled-components";

const Main = styled.main`
  text-align: center;
  overflow-x: hidden;
  background-color: #fdf5e6;
`;

const IncludedExcludedWrapper = styled.div`
  background-image: linear-gradient(
      rgba(126, 69, 85, 0.95),
      rgba(68, 35, 59, 0.9)
    ),
    url(${bgImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;

const CreamSection = styled.div`
  background-color: #fdf5e6;
  width: 100%;
`;

export default function Home() {
  return (
    <Main>
      <Alert1 />
      <Alert2 />
      <Header />
      <WhatsTrending />
      <FormForDetails />
      <CreamSection>
        <CharDhamAtGlance subHeading="Char Dham Yatra at a Glance" />
        <CharDhamCarousel />
        <DoDhamCarousel />
        <KedarnathCarousel />
        <Reasons />
        <TrustCred />
      </CreamSection>
      <IncludedExcludedWrapper>
        <Included />
        <Excluded />
      </IncludedExcludedWrapper>
      <CreamSection>
        <CharDhamReg />
        <Faqs />
        <WhoweAre heading="Who We Are" />
        <Reviews />
        <CustomizeReg />
      </CreamSection>
      <Footer />
      <AllRightsReserved />
    </Main>
  );
}
