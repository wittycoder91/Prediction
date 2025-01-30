import React from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import CanadaFlag from "../../../assets/images/flags/canada.svg";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Treasury() {
  const rowData = [
    {
      symbol: "symbol",
      country: "Canada",
      bondtype: "Type 1",
      price: 80,
      volume: 2.28,
      ytm: 6.51,
      coupon: 15.6,
      maturity: "2025-01-29",
    },
    {
      symbol: "symbol",
      country: "Canada",
      bondtype: "Type 1",
      price: 25.4,
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
      price: 0.6,
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
  const columnDefs = [
    { field: "symbol" },
    {
      field: "country",
      cellRenderer: (params) => (
        <div className="flex items-center gap-2">
          <img src={CanadaFlag} alt="Canada Flag" className="w-5 h-5" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "bondtype",
      headerName: "Bond Type",
    },
    { field: "price", headerName: "Price (%)", filter: "agNumberColumnFilter" },
    { field: "volume", filter: "agNumberColumnFilter" },
    { field: "ytm", headerName: "YTM (%)", filter: "agNumberColumnFilter" },
    {
      field: "coupon",
      headerName: "Coupon (%)",
      filter: "agNumberColumnFilter",
    },
    { field: "maturity", headerName: "Maturity Date" },
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
