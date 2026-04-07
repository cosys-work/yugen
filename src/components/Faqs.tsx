"use client";

import styled from "styled-components"
import { Accordion } from "react-bootstrap"
import { Heading } from "./Heading"
import faqsContent from "@/content/faqs.json"

const Container = styled.div`
  background-color: #fdf5e6;
  padding: 2rem 0;
`

const AccordionContainer = styled(Accordion)`
&& {
 background-color:transparent;
 color:yellow;
 margin:auto;
}
 && .accordion-item{
 background-color:transparent;
padding:clamp(1rem,2vw, 1.3rem);
 }
&& .accordion-button,
&& .accordion-button:not(.collapsed),
&& .accordion-button:focus,
&& .accordion-button:active {
background-color:transparent !important;
 color:#44233B;
 font-size:clamp(1.3rem, 1.6vw, 1.8rem);
 font-family: "Lora", serif;
 font-weight:600;
}

.accordion-body{
text-align:left;
color:#694C5C;
font-size:clamp(1.1rem,1.6vw,1.5rem);
}
`

const Faqs = () => {
    const { heading, items } = faqsContent;

    return (
        <Container>
            <Heading heading={heading} />
            <AccordionContainer>
                {items.map((item) => (
                    <Accordion.Item key={item.id} eventKey={item.id}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                            {item.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </AccordionContainer>
        </Container>
    )
}

export default Faqs