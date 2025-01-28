import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./assets/css/tailwind.css";
import "./assets/css/icons.css";

import Index from "./pages/index";

// Market -> Indices
import IndicesFutures from "./pages/markets/indices/futures";
import MajorIndices from "./pages/markets/indices/major";
import RealTimeIndices from "./pages/markets/indices/realtime";
import WorldIndices from "./pages/markets/indices/world";
import GlobalIndices from "./pages/markets/indices/global";
import DowJonesFutures from "./pages/markets/indices/dowjones";
import SPFutures from "./pages/markets/indices/sp";
import NasdaqFutures from "./pages/markets/indices/nasdaq";
// Market -> Stocks
import StockSreen from "./pages/markets/stocks/screen";
import StockTrending from "./pages/markets/stocks/trending";
import StockAI from "./pages/markets/stocks/ai";
// Market -> Bonds
import BondsTreasury from "./pages/markets/bonds/treasury";
import BondsGovernment from "./pages/markets/bonds/government";
import BondsFinancial from "./pages/markets/bonds/financial";
import BondsSpreads from "./pages/markets/bonds/spreads";
import BondsBond from "./pages/markets/bonds/bond";
import BondsForward from "./pages/markets/bonds/forward";
import BondsCredit from "./pages/markets/bonds/credit";

import WatchList from "./pages/watchlist";
import News from "./pages/news";
import Analysis from "./pages/analysis";
import Charts from "./pages/charts";
import Commission from "./pages/commission";

import Aboutus from "./pages/aboutus";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ResetPassword from "./pages/auth/reset-password";
import Page404 from "./pages/404";

import ScrollToTop from "./component/Scroll-top";
import Layout from "./component/Layout";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        {/* Markets -> Indices */}
        <Route
          path="/indices-futures"
          element={
            <Layout>
              <IndicesFutures />
            </Layout>
          }
        />
        <Route
          path="/indices-major"
          element={
            <Layout>
              <MajorIndices />
            </Layout>
          }
        />
        <Route
          path="/indices-realtime"
          element={
            <Layout>
              <RealTimeIndices />
            </Layout>
          }
        />
        <Route
          path="/indices-world"
          element={
            <Layout>
              <WorldIndices />
            </Layout>
          }
        />
        <Route
          path="/indices-global"
          element={
            <Layout>
              <GlobalIndices />
            </Layout>
          }
        />
        <Route
          path="/dowjones-future"
          element={
            <Layout>
              <DowJonesFutures />
            </Layout>
          }
        />
        <Route
          path="/spf-future"
          element={
            <Layout>
              <SPFutures />
            </Layout>
          }
        />
        <Route
          path="/nasdaq-future"
          element={
            <Layout>
              <NasdaqFutures />
            </Layout>
          }
        />
        {/* Markets -> Stocks */}
        <Route
          path="/stock-screen"
          element={
            <Layout>
              <StockSreen />
            </Layout>
          }
        />
        <Route
          path="/stock-trending"
          element={
            <Layout>
              <StockTrending />
            </Layout>
          }
        />
        <Route
          path="/stock-ai"
          element={
            <Layout>
              <StockAI />
            </Layout>
          }
        />
        {/* Markets -> Bonds */}
        <Route
          path="/bonds-treasury"
          element={
            <Layout>
              <BondsTreasury />
            </Layout>
          }
        />
        <Route
          path="/bonds-government"
          element={
            <Layout>
              <BondsGovernment />
            </Layout>
          }
        />
        <Route
          path="/bonds-financial"
          element={
            <Layout>
              <BondsFinancial />
            </Layout>
          }
        />
        <Route
          path="/bonds-spreads"
          element={
            <Layout>
              <BondsSpreads />
            </Layout>
          }
        />
        <Route
          path="/bonds-bond"
          element={
            <Layout>
              <BondsBond />
            </Layout>
          }
        />
        <Route
          path="/bonds-forward"
          element={
            <Layout>
              <BondsForward />
            </Layout>
          }
        />
        <Route
          path="/bonds-credit"
          element={
            <Layout>
              <BondsCredit />
            </Layout>
          }
        />
        {/* My WatchList */}
        <Route
          path="/my-watchlist"
          element={
            <Layout>
              <WatchList />
            </Layout>
          }
        />
        {/* News */}
        <Route
          path="/news"
          element={
            <Layout>
              <News />
            </Layout>
          }
        />
        {/* Analysis */}
        <Route
          path="/analysis"
          element={
            <Layout>
              <Analysis />
            </Layout>
          }
        />
        {/* Charts */}
        <Route
          path="/charts"
          element={
            <Layout>
              <Charts />
            </Layout>
          }
        />
        {/* Commission */}
        <Route
          path="/commission"
          element={
            <Layout>
              <Commission />
            </Layout>
          }
        />
        {/* Footer Pages */}
        <Route
          path="/aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              <Features />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path="/auth-login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/auth-signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/auth-reset-password"
          element={
            <Layout>
              <ResetPassword />
            </Layout>
          }
        />
        <Route
          path="/404"
          element={
            <Layout>
              <Page404 />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
