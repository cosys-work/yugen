import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


const LandingPage = lazy(() => import("./Pages/LandingPage"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./Pages/RefundPolicy"));
const TermsCondition = lazy(() => import("./Pages/TermsCondition"));
const TrendingPage = lazy(() => import("./Pages/TrendingPage"));
const ThankYou = lazy(() => import("./components/ThankYou"));

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Alert1 = lazy(() => import("./components/Alert1"));
const Alert2 = lazy(() => import("./components/Alert2"));
const AllRightsReserved = lazy(() => import("./components/AllRightsReserved"));


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Alert1 />
        <Alert2 />
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/refund' element={<RefundPolicy />} />
          <Route path='/terms' element={<TermsCondition />} />
          <Route path='/trending' element={<TrendingPage />} />
          <Route path="/thankYou" element={<ThankYou />} />
        </Routes>
        <Footer />
        <AllRightsReserved />
      </Suspense>
    </>
  )
}
export default App
