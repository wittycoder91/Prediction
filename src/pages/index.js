import React from "react";

import iconImage from "../assets/images/icon1.png";
import image from "../assets/images/image1.png";

export default function IndexFive() {
  return (
    <section className="relative md:py-44 py-36 px-5 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-transparent">
      <div className="container flex flex-col gap-3">
        <p className="font-semibold leading-normal text-2xl lg:text-3xl mb-6 pb-3 border-b border-gray-300">
          Prediction Portfolio
        </p>
        <div className="flex flex-col px-9 pt-9 pb-40 border border-gray-300 gap-4">
          <p className="font-semibold leading-normal text-2xl lg:text-3xl">
            Monitor your financial instruments and track your holdings with
            Investing.com portfolios
          </p>
          <div className="flex flex-row items-center gap-2">
            <img src={iconImage} alt="" />
            <p className="text-xl">
              Monitor your portfolio holdings and performance
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={iconImage} alt="" />
            <p className="text-xl">Track multiple watchlists</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={iconImage} alt="" />
            <p className="text-xl">
              Include stocks, funds, indexes, currencies and commodities
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={iconImage} alt="" />
            <p className="text-xl">
              Add to your portfolio from each instrument page or from within the
              portfolio itself
            </p>
          </div>
        </div>
        <img
          src={image}
          alt=""
          width={283}
          height={185}
          className="ml-8 mt-[-100px]"
        />
      </div>
    </section>
  );
}
