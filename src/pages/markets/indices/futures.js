import { FaDownload } from "react-icons/fa";
import React from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import CanadaFlag from "../../../assets/images/flags/canada.svg";

ModuleRegistry.registerModules([AllCommunityModule]);
const selectOption = ["Normal1", "Normal2", "Normal3"];

export default function IndicesFutures() {
  const rowData = [
    {
      country: "Canada",
      last: 265.04,
      chg: -6.19,
      chgPercent: -2.28,
      oneMonth: 6.51,
      oneYear: -15.6,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 59.91,
      chg: -0.4,
      chgPercent: -0.66,
      oneMonth: 1.85,
      oneYear: -20.4,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 32.81,
      chg: -0.03,
      chgPercent: -0.09,
      oneMonth: 14.0,
      oneYear: -19.05,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 23.92,
      chg: -0.3,
      chgPercent: -1.24,
      oneMonth: 12.72,
      oneYear: -30.18,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 34.98,
      chg: -0.35,
      chgPercent: -0.99,
      oneMonth: 3.46,
      oneYear: -20.17,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 187.21,
      chg: -5.09,
      chgPercent: -2.65,
      oneMonth: 0.1,
      oneYear: 41.19,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 23.92,
      chg: -0.3,
      chgPercent: -1.24,
      oneMonth: 12.72,
      oneYear: -30.18,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 34.98,
      chg: -0.35,
      chgPercent: -0.99,
      oneMonth: 3.46,
      oneYear: -20.17,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 187.21,
      chg: -5.09,
      chgPercent: -2.65,
      oneMonth: 0.1,
      oneYear: 41.19,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 10.17,
      chg: 0.01,
      chgPercent: 0.1,
      oneMonth: 0.49,
      oneYear: -37.3,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 39.6,
      chg: 0.0,
      chgPercent: 0.0,
      oneMonth: 0.0,
      oneYear: 0.0,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 127.59,
      chg: -4.02,
      chgPercent: -3.05,
      oneMonth: 1.1,
      oneYear: 35.68,
      time: "15/01",
    },
    {
      country: "Canada",
      last: 39.88,
      chg: -1.03,
      chgPercent: -2.52,
      oneMonth: 7.96,
      oneYear: 66.17,
      time: "15/01",
    },
  ];

  const columnDefs = [
    {
      field: "country",
      headerName: "Name",
      cellRenderer: (params) => (
        <div className="flex items-center gap-2">
          <img src={CanadaFlag} alt="Canada Flag" className="w-5 h-5" />
          <span>{params.value}</span>
        </div>
      ),
    },
    { field: "last", filter: "agNumberColumnFilter" },
    { field: "chg", headerName: "Chg.", filter: "agNumberColumnFilter" },
    {
      field: "chgPercent",
      headerName: "Chg. %",
      filter: "agNumberColumnFilter",
    },
    {
      field: "oneMonth",
      headerName: "1 Month",
      filter: "agNumberColumnFilter",
    },
    { field: "oneYear", headerName: "1 Year", filter: "agNumberColumnFilter" },
    { field: "time" },
  ];

  return (
    <section className="relative table w-full py-28">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b border-gray-300">
          Credit Default Swap Rates (CDS)
        </h2>
        <div className="flex flex-row justify-end items-center my-4 gap-3">
          <select className="h-[35px] px-2 pr-10 font-sansLight text-sm text-blackThird bg-white dark:text-black border border-borderPrimary rounded-[10px] focus:outline-none">
            {selectOption.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <FaDownload />
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
