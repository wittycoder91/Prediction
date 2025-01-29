import React from "react";

const data = [
  {
    symbol: "symbol",
    country: "Canada",
    bondtype: "Type 1",
    price: 6.19,
    volume: 2.28,
    ytm: 6.51,
    coupon: 15.6,
    maturity: "2025-01-29",
  },
  {
    symbol: "symbol",
    country: "Canada",
    bondtype: "Type 1",
    price: 6.19,
    volume: 2.28,
    ytm: 6.51,
    coupon: 15.6,
    maturity: "2025-01-29",
  },
  {
    symbol: "symbol",
    country: "Canada",
    bondtype: "Type 1",
    price: 6.19,
    volume: 2.28,
    ytm: 6.51,
    coupon: 15.6,
    maturity: "2025-01-29",
  },
  {
    symbol: "symbol",
    country: "Canada",
    bondtype: "Type 1",
    price: 6.19,
    volume: 2.28,
    ytm: 6.51,
    coupon: 15.6,
    maturity: "2025-01-29",
  },
  {
    symbol: "symbol",
    country: "Canada",
    bondtype: "Type 1",
    price: 6.19,
    volume: 2.28,
    ytm: 6.51,
    coupon: 15.6,
    maturity: "2025-01-29",
  },
];
const selectOption = [
  "Corporate Bonds",
  "ESG Bonds",
  "Government Bonds",
  "Electronics",
];

export default function Treasury() {
  return (
    <section className="relative table w-full py-28">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b border-gray-300">
          Bond Screener
        </h2>
        <div className="flex flex-row justify-start items-center my-4 gap-3">
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm text-blackThird dark:text-black bg-white border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <table className="w-full border border-gray-300 shadow-sm">
          <thead>
            <tr>
              <th className="p-2 text-start">Symbol</th>
              <th className="p-2 text-start">Country</th>
              <th className="p-2 text-start">Bond Type</th>
              <th className="p-2 text-start">Price (%)</th>
              <th className="p-2 text-start">Volume</th>
              <th className="p-2 text-start">YTM (%)</th>
              <th className="p-2 text-start">Coupon (%)</th>
              <th className="p-2 text-start">Maturity Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-2">{item.symbol}</td>
                <td className="p-2">{item.country}</td>
                <td className="p-2">{item.bondtype}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">{item.volume}</td>
                <td className="p-2">{item.ytm}</td>
                <td className="p-2">{item.coupon}</td>
                <td className="p-2">{item.maturity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
