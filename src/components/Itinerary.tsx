import { Heading } from './Heading'
import { SubHeading } from './SubHeading'
import styled from 'styled-components'
import itineraryContent from '@/content/itinerary.json'

const MainContainer = styled.div`
max-width:clamp(100vw,45vw, 90vw);
// margin-left:clamp(2rem,1.6vw,3rem);
`
const HeadTitle = styled.h2`
padding-top:clamp(1.3rem,1.6vw,2.3rem);
font-weight:500;
font-family: "Poppins", sans-serif;
font-size:clamp(1.7rem,1.6vw,1.9rem);
color:#4A2C2A;`

const Title = styled.h2`
padding-top:clamp(1.3rem,1.6vw,2.3rem);
font-weight:600;
font-family: "Poppins", sans-serif;
font-size:clamp(1.3rem,1.6vw,1.9rem);
color:#4A2C2A;`

const P = styled.div`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
color:#7E4555`

const Ul = styled.ul`
color:#4A2C2A;
list-style-type:disc;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
`
const Itinerary = () => {
    const { heading, intro, overview, highlights, days } = itineraryContent;

    return (
        <MainContainer>

            <Heading heading={heading} />
            <br /><P dangerouslySetInnerHTML={{ __html: intro }} />
            <SubHeading subHeading={overview.subHeading} />
            <P dangerouslySetInnerHTML={{ __html: overview.content }} />
            <HeadTitle>{highlights.title}</HeadTitle>
            <Ul>
                {highlights.items.map((item, index) => (
                    <Li key={index}>{item}</Li>
                ))}
            </Ul>
            <SubHeading subHeading="Char Dham Yatra Itinerary – Day Wise Plan" />

            {days.map((day) => (
                <div key={day.day}>
                    <Title>{day.title}</Title>
                    <P dangerouslySetInnerHTML={{ __html: day.content }} />
                    <hr />
                </div>
            ))}
        </MainContainer >
    )
}

export default Itinerary