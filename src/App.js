import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import "./assets/css/tailwind.css";
import "./assets/css/icons.css";

import Index from "./pages/index";
import IndicesFutures from "./pages/markets/indices/futures";
import MajorIndices from "./pages/markets/indices/major";
import RealTimeIndices from "./pages/markets/indices/realtime";
import WorldIndices from "./pages/markets/indices/world";
import GlobalIndices from "./pages/markets/indices/global";
import DowJonesFutures from "./pages/markets/indices/dowjones";
import SPFutures from "./pages/markets/indices/sp";
import NasdaqFutures from "./pages/markets/indices/nasdaq";
import StockSreen from "./pages/markets/stocks/screen";
import StockTrending from "./pages/markets/stocks/trending";
import StockAI from "./pages/markets/stocks/ai";
import BondsTreasury from "./pages/markets/bonds/treasury";
import BondsGovernment from "./pages/markets/bonds/government";
import BondsFinancial from "./pages/markets/bonds/financial";
import BondsSpreads from "./pages/markets/bonds/spreads";
import BondsBond from "./pages/markets/bonds/bond";
import BondsForward from "./pages/markets/bonds/forward";
import BondsCredit from "./pages/markets/bonds/credit";

import AIFundsManager from "./pages/aifunds";
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

function AppContent() {
  const location = useLocation();
  const authRoutes = ["/auth-login", "/auth-signup", "/auth-reset-password"];

  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {isAuthPage ? (
        <Routes>
          <Route path="/auth-login" element={<Login />} />
          <Route path="/auth-signup" element={<Signup />} />
          <Route path="/auth-reset-password" element={<ResetPassword />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/indices-futures" element={<IndicesFutures />} />
            <Route path="/indices-major" element={<MajorIndices />} />
            <Route path="/indices-realtime" element={<RealTimeIndices />} />
            <Route path="/indices-world" element={<WorldIndices />} />
            <Route path="/indices-global" element={<GlobalIndices />} />
            <Route path="/dowjones-future" element={<DowJonesFutures />} />
            <Route path="/spf-future" element={<SPFutures />} />
            <Route path="/nasdaq-future" element={<NasdaqFutures />} />
            <Route path="/stock-screen" element={<StockSreen />} />
            <Route path="/stock-trending" element={<StockTrending />} />
            <Route path="/stock-ai" element={<StockAI />} />
            <Route path="/bonds-treasury" element={<BondsTreasury />} />
            <Route path="/bonds-government" element={<BondsGovernment />} />
            <Route path="/bonds-financial" element={<BondsFinancial />} />
            <Route path="/bonds-spreads" element={<BondsSpreads />} />
            <Route path="/bonds-bond" element={<BondsBond />} />
            <Route path="/bonds-forward" element={<BondsForward />} />
            <Route path="/bonds-credit" element={<BondsCredit />} />
            <Route path="/ai-funds-manager" element={<AIFundsManager />} />
            <Route path="/my-watchlist" element={<WatchList />} />
            <Route path="/news" element={<News />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/commission" element={<Commission />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
