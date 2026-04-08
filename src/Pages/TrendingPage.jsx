import React from 'react'
import WhatsTrendingPage from '../components/Itinerary'
import Reasons from '../components/Reasons'
import Faqs from '../components/Faqs'
import TrustCred from '../components/TrustCred'
import Book from '../components/Book'
import styled from 'styled-components'
import HealthAndSafety from './HealthAndSafety'
import Itinerary from '../components/Itinerary'
import HealthTips from '../components/HealthTips'
import ImportantNotes from '../components/ImportantNotes'
import OnlyBg from '../components/OnlyBg'

// to manage the container 
const Div = styled.div`
margin:2%;
`
const TrendingPage = () => {
    return (
        <Div>
            <Itinerary />
            {/* <OnlyBg /> */}
            <Reasons />
            <TrustCred />
            <HealthAndSafety />
            <Book />
            <HealthTips />
            <Faqs />
            <ImportantNotes />
        </Div>
    )
}

export default TrendingPage