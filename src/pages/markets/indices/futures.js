import React from "react";
import { FaDownload } from "react-icons/fa";

import CanadaFlag from "../../../assets/images/flags/canada.svg";
const data = [
  {
    country: "Turkey",
    last: 265.04,
    chg: -6.19,
    chgPerc: -2.28,
    oneMonth: 6.51,
    oneYear: -15.6,
  },
  {
    country: "Italy",
    last: 59.91,
    chg: -0.4,
    chgPerc: -0.66,
    oneMonth: 1.85,
    oneYear: -20.4,
  },
  {
    country: "US",
    last: 32.81,
    chg: -0.03,
    chgPerc: -0.09,
    oneMonth: 14.0,
    oneYear: -19.05,
  },
  {
    country: "UK",
    last: 23.92,
    chg: -0.3,
    chgPerc: -1.24,
    oneMonth: 12.72,
    oneYear: -30.18,
  },
  {
    country: "Spain",
    last: 34.98,
    chg: -0.35,
    chgPerc: -0.99,
    oneMonth: 3.46,
    oneYear: -20.17,
  },
  {
    country: "Brazil",
    last: 187.21,
    chg: -5.09,
    chgPerc: -2.65,
    oneMonth: 0.1,
    oneYear: 41.19,
  },
  {
    country: "Australia",
    last: 10.17,
    chg: 0.01,
    chgPerc: 0.1,
    oneMonth: 0.49,
    oneYear: -37.3,
  },
  {
    country: "Canada",
    last: 39.6,
    chg: 0.0,
    chgPerc: 0.0,
    oneMonth: 0.0,
    oneYear: 0.0,
  },
  {
    country: "Mexico",
    last: 127.59,
    chg: -4.02,
    chgPerc: -3.05,
    oneMonth: 1.1,
    oneYear: 35.68,
  },
  {
    country: "France",
    last: 39.88,
    chg: -1.03,
    chgPerc: -2.52,
    oneMonth: 7.96,
    oneYear: 66.17,
  },
];
const selectOption = ["Normal1", "Normal2", "Normal3"];

export default function IndicesFutures() {
  return (
    <section className="relative table w-full py-28">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b border-gray-300">
          Credit Default Swap Rates (CDS)
        </h2>
        <div className="flex flex-row justify-end items-center my-4 gap-3">
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm text-blackThird bg-white border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <FaDownload />
        </div>
        <table className="w-full border border-gray-300 shadow-sm">
          <thead>
            <tr>
              <th className="p-2 text-start">Country</th>
              <th className="p-2 text-start">Last</th>
              <th className="p-2 text-start">Chg.</th>
              <th className="p-2 text-start">Chg. %</th>
              <th className="p-2 text-start">1 Month</th>
              <th className="p-2 text-start">1 Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="flex flex-row gap-2 items-center p-2">
                  <img src={CanadaFlag} alt="" width={30} />
                  {item.country} CDS 5 Years
                </td>
                <td className="p-2">{item.last.toFixed(2)}</td>
                <td
                  className={`p-2 ${
                    item.chg < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.chg.toFixed(2)}
                </td>
                <td
                  className={`p-2 ${
                    item.chgPerc < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.chgPerc.toFixed(2)}%
                </td>
                <td
                  className={`p-2 ${
                    item.oneMonth < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.oneMonth.toFixed(2)}%
                </td>
                <td
                  className={`p-2 ${
                    item.oneYear < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.oneYear.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
