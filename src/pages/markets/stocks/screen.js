import React from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Screen() {
  const rowData = [
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 50.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },

    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
    {
      symbol: "Symbol",
      price: 6.19,
      change: 52.34,
      volume: 2.28,
      marketCap: "Cap",
      rate: 2.5,
      eps: "4.58 USD",
      industry: "Finance",
    },
  ];
  const columnDefs = [
    { field: "symbol" },
    { field: "price", filter: "agNumberColumnFilter" },
    {
      field: "change",
      headerName: "Change (%)",
      filter: "agNumberColumnFilter",
    },
    { field: "volume", filter: "agNumberColumnFilter" },
    { field: "marketCap" },
    { field: "rate", headerName: "P/E Ratio", filter: "agNumberColumnFilter" },
    { field: "eps", headerName: "EPS (Earnings Per Share)" },
    { field: "industry", headerName: "Industry Sector" },
  ];
  const selectOption = [
    "Corporate Bonds",
    "ESG Bonds",
    "Government Bonds",
    "Electronics",
  ];

  return (
    <section className="relative table w-full py-28">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b border-gray-300">
          Stock Screener
        </h2>
        <div className="flex flex-row justify-start items-center my-4 gap-3">
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm  dark:text-black text-blackThird bg-white border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm  dark:text-black text-blackThird bg-white border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm  dark:text-black text-blackThird bg-white border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div style={{ height: 500 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
          />
        </div>
      </div>
    </section>
  );
}
