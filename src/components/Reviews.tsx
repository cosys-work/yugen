"use client";

import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Heading } from './Heading'
import reviewsContent from '@/content/reviews.json'

const Container = styled.div`
  background-color: #fdf5e6;
  padding: 2rem 0;
  width: 100%;
`

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CarouselContainer = styled(Carousel)`
  .carousel-caption{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2;
  }

  .carousel-indicators {
    z-index: 5;
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 5;
  }

  .carousel-indicators button {
    background-color: #fff;
  }

  .carousel-indicators .active {
    background-color: #ffcc00;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
  }

  .carousel-control-prev {
    left: -2rem;
  }

  .carousel-control-next {
    right: -2rem;
  }
`

const CardContainer = styled.div`
  width: 80%;
  min-height: 25vh;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`

const CardTitle = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: #CC3366;
  margin-bottom: 1rem;
  font-weight: 500;
`

const CardText = styled.div`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: #694C5C;
  line-height: 1.6;
`

const ReviewsComp = () => {
  const { items } = reviewsContent;

  return (
    <Container>
      <Heading heading={"Testimonials"} />
      <CarouselContainer>
        {items.map((review) =>
          <Carousel.Item key={review.id}>
            <CenterWrapper>
              <CardContainer>
                <div style={{padding: "1rem"}}>
                  <CardTitle>{review.name}</CardTitle>
                  <CardText>
                    {review.description}
                  </CardText>
                </div>
              </CardContainer>
            </CenterWrapper>
          </Carousel.Item>
        )}
      </CarouselContainer>
    </Container>
  )
}

export default ReviewsComp