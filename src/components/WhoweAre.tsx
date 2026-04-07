import { Heading } from './Heading'
import styled from 'styled-components'
import { TiTick } from "react-icons/ti";
import homeContent from "@/content/home.json"

const Div = styled.div`
margin-top:clamp(1%,2vw,3%);
display:flex;
flex-direction:column;
align-items:center;
color:#694c5c;
background-color: #fdf5e6;
padding: 2rem 0;
`

const P = styled.p`
max-width:80%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);`

const SubHeading = styled.h3`
padding:3% 0 1%;
color:#FD8F8F;
text-transform:uppercase;
font-size:clamp(1.5rem, 1.6vw,2rem);
`
const Ul = styled.ul`
list-style-type:none;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
`

interface WhoweAreProps {
  heading?: string;
}

const WhoweAre = ({ heading }: WhoweAreProps) => {
    const { whoWeAre } = homeContent;

    return (
        <Div>
            <Heading heading={heading || whoWeAre.heading} />
            <P>{whoWeAre.intro}</P>
            <SubHeading>{whoWeAre.subHeading}</SubHeading>
            <Ul>
                {whoWeAre.stats.map((stat, index) => (
                    <Li key={index}><TiTick style={{ color: "#FD8F8F" }} />{stat}</Li>
                ))}
            </Ul>
            <P>{whoWeAre.outro}</P>
        </Div>
    )
}

export default WhoweAre