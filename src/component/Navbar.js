import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoLight from "../assets/logos/menu-logo-light.png";
import LogoDark from "../assets/logos/menu-logo-dark.png";

import { FiUser } from "react-icons/fi";

export default function Navbar(props) {
  const { navClass, topnavClass, tagLine } = props;
  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const [manu, setManu] = useState("");
  const [subManu, setSubManu] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    let current = location.pathname;
    setManu(current);
    setSubManu(current);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <nav
        id="topnav"
        className={`defaultscroll is-sticky nav-sticky ${
          tagLine ? "tagline-height" : ""
        } ${topnavClass ? topnavClass : ""} 
            `}
      >
        <div
          className={`${
            topnavClass !== "" && topnavClass !== undefined
              ? "container-fluid md:px-8 px-3"
              : "container"
          }`}
        >
          {/* <!-- Logo container--> */}
          {navClass === "" || navClass === undefined ? (
            <Link className="logo" to="/">
              <img
                src={LogoDark}
                className="inline-block dark:hidden"
                width="100"
                alt=""
              />
              <img
                src={LogoLight}
                width="100"
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          ) : (
            <Link className="logo" to="/">
              <span className="inline-block dark:hidden">
                <img src={LogoDark} className="l-dark" width="100" alt="" />
                <img src={LogoLight} className="l-light" width="100" alt="" />
              </span>
              <img
                src={LogoLight}
                width="100"
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          )}
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                to="#"
                className={`${toggle ? "open" : ""} navbar-toggle`}
                id="isToggle"
                onClick={() => setToggle(!toggle)}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          {/* <!-- Commission & Loginbutton Start --> */}
          <div className="buy-button flex flex-row items-center justify-center gap-4">
            <li className="inline ps-1 mb-0">
              <Link
                to="/commission"
                className="px-3 text-sm btn bg-yellow-400 border-green-600 dark:border-green-600 rounded-2xl text-black"
              >
                Get 50% 0ff
              </Link>
            </li>
            <ul className="list-none mb-0">
              <li className="inline mb-0">
                <Link
                  to="/auth-login"
                  className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
                >
                  <FiUser className="size-4 stroke-[3]" />
                </Link>
              </li>
              <li className="sm:inline ps-1 mb-0 hidden">
                <Link
                  to="/auth-signup"
                  className="px-3 text-sm btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
          {/* <!--Commission & Login button End--> */}

          <div id="navigation" style={{ display: toggle ? "block" : "none" }}>
            {/* <!-- Navigation Menu--> */}
            <ul
              className={`navigation-menu  ${
                navClass === "" || navClass === undefined ? "" : "nav-light"
              }   ${
                topnavClass !== "" && topnavClass !== undefined
                  ? "justify-center"
                  : "justify-end"
              }`}
            >
              {/* Markets Menu */}
              <li
                className={`has-submenu parent-parent-menu-item ${
                  [
                    "/indices-futures",
                    "/indices-major",
                    "/indices-realtime",
                    "/indices-world",
                    "/indices-global",
                    "/dowjones-future",
                    "/spf-future",
                    "/nasdaq-future",
                    "/stock-screen",
                    "/stock-trending",
                    "/stock-ai",
                    "/bonds-treasury",
                    "/bonds-government",
                    "/bonds-financial",
                    "/bonds-spreads",
                    "/bonds-bond",
                    "/bonds-forward",
                    "/bonds-credit",
                  ].includes(manu)
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  to="#"
                  onClick={() => {
                    setSubManu(
                      subManu === "/markets-item" ? "" : "/markets-item"
                    );
                  }}
                  className="!pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                >
                  Markets
                </Link>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${
                    [
                      "/indices-futures",
                      "/indices-major",
                      "/indices-realtime",
                      "/indices-world",
                      "/indices-global",
                      "/dowjones-future",
                      "/spf-future",
                      "/nasdaq-future",
                      "/stock-screen",
                      "/stock-trending",
                      "/stock-ai",
                      "/bonds-treasury",
                      "/bonds-government",
                      "/bonds-financial",
                      "/bonds-spreads",
                      "/bonds-bond",
                      "/bonds-forward",
                      "/bonds-credit",
                      "/markets-item",
                      "/indices-item",
                      "/stock-item",
                      "/bond-item",
                    ].includes(subManu)
                      ? "open"
                      : ""
                  }`}
                >
                  <li
                    className={`has-submenu parent-menu-item ${
                      [
                        "/indices-futures",
                        "/indices-major",
                        "/indices-realtime",
                        "/indices-world",
                        "/indices-global",
                        "/dowjones-future",
                        "/spf-future",
                        "/nasdaq-future",
                      ].includes(manu)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => {
                        setSubManu(
                          subManu === "/indices-item" ? "" : "/indices-item"
                        );
                      }}
                    >
                      Indices
                    </Link>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${
                        [
                          "/indices-item",
                          "/indices-futures",
                          "/indices-major",
                          "/indices-realtime",
                          "/indices-world",
                          "/indices-global",
                          "/dowjones-future",
                          "/spf-future",
                          "/nasdaq-future",
                        ].includes(subManu)
                          ? "open"
                          : ""
                      }`}
                      onClick={() => setToggle(false)}
                    >
                      <li
                        className={manu === "/indices-futures" ? "active" : ""}
                      >
                        <Link to="/indices-futures" className="sub-menu-item">
                          Indices Fetures
                        </Link>
                      </li>
                      <li className={manu === "/indices-major" ? "active" : ""}>
                        <Link to="/indices-major" className="sub-menu-item">
                          Major Indices
                        </Link>
                      </li>
                      {/* <li
                        className={manu === "/indices-realtime" ? "active" : ""}
                      >
                        <Link to="/indices-realtime" className="sub-menu-item">
                          Indices Real-Time
                        </Link>
                      </li>
                      <li className={manu === "/indices-world" ? "active" : ""}>
                        <Link to="/indices-world" className="sub-menu-item">
                          World Indices
                        </Link>
                      </li>
                      <li
                        className={manu === "/indices-global" ? "active" : ""}
                      >
                        <Link to="/indices-global" className="sub-menu-item">
                          Global Indices
                        </Link>
                      </li>
                      <li
                        className={manu === "/dowjones-future" ? "active" : ""}
                      >
                        <Link to="/dowjones-future" className="sub-menu-item">
                          Dow Jones Futures
                        </Link>
                      </li>
                      <li className={manu === "/spf-future" ? "active" : ""}>
                        <Link to="/spf-future" className="sub-menu-item">
                          S&P 500 Futures
                        </Link>
                      </li>
                      <li className={manu === "/nasdaq-future" ? "active" : ""}>
                        <Link to="/nasdaq-future" className="sub-menu-item">
                          Nasdaq Futures
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li
                    className={`has-submenu parent-menu-item ${
                      [
                        "/stock-screen",
                        "/stock-trending",
                        "/stock-ai",
                      ].includes(manu)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => {
                        setSubManu(
                          subManu === "/stock-item" ? "" : "/stock-item"
                        );
                      }}
                    >
                      Stocks
                    </Link>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${
                        [
                          "/stock-item",
                          "/stock-screen",
                          "/stock-trending",
                          "/stock-ai",
                        ].includes(subManu)
                          ? "open"
                          : ""
                      }`}
                      onClick={() => setToggle(false)}
                    >
                      <li className={manu === "/stock-screen" ? "active" : ""}>
                        <Link to="/stock-screen" className="sub-menu-item">
                          Stock Screener
                        </Link>
                      </li>
                      {/* <li
                        className={manu === "/stock-trending" ? "active" : ""}
                      >
                        <Link to="/stock-trending" className="sub-menu-item">
                          Trending Stocks
                        </Link>
                      </li>
                      <li className={manu === "/stock-ai" ? "active" : ""}>
                        <Link to="/stock-ai" className="sub-menu-item">
                          Stocks Picket by AI
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li
                    className={`has-submenu parent-menu-item ${
                      [
                        "/bonds-treasury",
                        "/bonds-government",
                        "/bonds-financial",
                        "/bonds-spreads",
                        "/bonds-bond",
                        "/bonds-forward",
                        "/bonds-credit",
                      ].includes(manu)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => {
                        setSubManu(
                          subManu === "/bond-item" ? "" : "/bond-item"
                        );
                      }}
                    >
                      Bonds
                    </Link>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${
                        [
                          "/bond-item",
                          "/bonds-treasury",
                          "/bonds-government",
                          "/bonds-financial",
                          "/bonds-spreads",
                          "/bonds-bond",
                          "/bonds-forward",
                          "/bonds-credit",
                        ].includes(subManu)
                          ? "open"
                          : ""
                      }`}
                      onClick={() => setToggle(false)}
                    >
                      <li
                        className={manu === "/bonds-treasury" ? "active" : ""}
                      >
                        <Link to="/bonds-treasury" className="sub-menu-item">
                          US Treasure Yield Curve
                        </Link>
                      </li>
                      {/* <li
                        className={manu === "/bonds-government" ? "active" : ""}
                      >
                        <Link to="/bonds-government" className="sub-menu-item">
                          World Government Bonds
                        </Link>
                      </li>
                      <li
                        className={manu === "/bonds-financial" ? "active" : ""}
                      >
                        <Link to="/bonds-financial" className="sub-menu-item">
                          Financial Futures
                        </Link>
                      </li>
                      <li className={manu === "/bonds-spreads" ? "active" : ""}>
                        <Link to="/bonds-spreads" className="sub-menu-item">
                          Government Bond Spreads
                        </Link>
                      </li>
                      <li className={manu === "/bonds-bond" ? "active" : ""}>
                        <Link to="/bonds-bond" className="sub-menu-item">
                          Bond Indices
                        </Link>
                      </li>
                      <li className={manu === "/bonds-forward" ? "active" : ""}>
                        <Link to="/bonds-forward" className="sub-menu-item">
                          Forward Rates
                        </Link>
                      </li>
                      <li className={manu === "/bonds-credit" ? "active" : ""}>
                        <Link to="/bonds-credit" className="sub-menu-item">
                          World Credit Default Swap Rates (CDS)
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                </ul>
              </li>
              {/* AI Funds Manager Menu */}
              <li
                className={`!ml-0 ${
                  manu === "/ai-funds-manager" ? "active" : ""
                }`}
              >
                <Link
                  to="/ai-funds-manager"
                  className="sub-menu-item !pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                  onClick={() => setToggle(false)}
                >
                  AI Funds Manager
                </Link>
              </li>
              {/* My Watchlist */}
              <li
                className={`!ml-0 ${manu === "/my-watchlist" ? "active" : ""}`}
              >
                <Link
                  to="/my-watchlist"
                  className="sub-menu-item !pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                  onClick={() => setToggle(false)}
                >
                  My Watchlist
                </Link>
              </li>
              {/* News Menu */}
              <li className={`!ml-0 ${manu === "/news" ? "active" : ""}`}>
                <Link
                  to="/news"
                  className="sub-menu-item !pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                  onClick={() => setToggle(false)}
                >
                  News
                </Link>
              </li>
              {/* Analysis Menu */}
              <li className={`!ml-0 ${manu === "/analysis" ? "active" : ""}`}>
                <Link
                  to="/analysis"
                  className="sub-menu-item !pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                  onClick={() => setToggle(false)}
                >
                  Analysis
                </Link>
              </li>
              {/* Charts Menu */}
              <li className={`!ml-0 ${manu === "/charts" ? "active" : ""}`}>
                <Link
                  to="/charts"
                  className="sub-menu-item !pl-[0px] !pr-[8px] lg:!pr-4 !text-base"
                  onClick={() => setToggle(false)}
                >
                  Charts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}
    </React.Fragment>
  );
}
