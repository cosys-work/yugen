import styled from "styled-components"
import Alert1 from "../components/Alert1"
import Alert2 from "../components/Alert2"
import Header from "../components/Header"
import { CardComponent } from "../components/CardComponent"
import { Heading } from "../components/Heading"
import WhoweAre from "../components/WhoweAre"
import CharDhamAtGlance from "../components/CharDhamAtGlance"
import PackageDetails from "../components/PackageDetails"
import CharDhamReg from "../components/CharDhamReg"
import Faqs from "../components/Faqs"
// import CardComponentCarousel from "../components/CardComponentCarousel"
import Footer from "../components/Footer"
import AllDhamCollection from "../components/AllDhamCollection"
import AllRightsReserved from "../components/AllRightsReserved"
import { FormPopup } from "../components/FormPopup"
import FormForDetails from "../components/FormForDetails"
import CustomizeReg from "../components/CustomizeReg"
import WhatsTrending from "../components/WhatsTrending"
import ReviewsComp from "../components/Reviews"

const Div = styled.div`
text-align:center;
overflow-x:hidden;
`
const LandingPage = () => {
    return (
        <Div>
            {/* <Alert1 />
            <Alert2 />
            <Header /> */}

            <WhatsTrending />
            <FormForDetails />
            {/* <FormPopup show={showForm} onClose={() => setShowForm(true)} /> */}
            <CharDhamAtGlance subHeading={"Char Dham Yatra at a Glance"} />
            <CardComponent />
            <AllDhamCollection />
            <PackageDetails />
            <CharDhamReg />
            <Faqs />
            <WhoweAre heading={"Who we are"} />
            <ReviewsComp />
            <CustomizeReg />
            {/* <Footer />
            <AllRightsReserved /> */}
        </Div>
    )
}
export default LandingPage