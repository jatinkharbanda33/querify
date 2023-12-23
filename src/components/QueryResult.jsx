import React, { useState, useEffect } from "react";
import { readRemoteFile } from "react-papaparse";

const CSVTable = ({ result }) => {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    if (
      result == "A" ||
      result == "B" ||
      result == "C" ||
      result == "D" ||
      result == "E"
    ) {
      readRemoteFile(process.env.PUBLIC_URL + `/${result}.csv`, {
        complete: (results) => {
          setData(results.data.slice(1));
          setHeader(results.data);
        },
      });
    }
  }, [result]);

  if (!result || result === "X") {
    return (
      <div className="flex w-11/12 h-5/6 overflow-auto scrollbar-thumb-slate-400 justify-center  scrollbar-track-gray-400 bg-white m-8 border-solid border-2 border-stone-600 dark:bg-[#282A36]">
        <div className="my-[10rem]">
        <img
        className="relative ml-3"
          src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/external-ninja-japan-tulpahn-outline-color-tulpahn.png"
          alt="Query image"
        />
        <p className="font-semibold dark:text-white">Run a Query</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-11/12 h-5/6 overflow-auto scrollbar-thumb-slate-400  scrollbar-track-gray-400 bg-white m-8 border-solid border-2 border-stone-600 dark:bg-[#31304D]">
      <table className="table-auto w-full ">
        <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-[#31304D] dark:text-white">
          <tr>
            {header[0] &&
              Object.values(header[0]).map((heading, i) => (
                <th
                  className="p-3 text-sm font-semibold tracking-wide text-left "
                  key={i}
                >
                  {heading}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-200 dark:text-white dark:bg-[#27374D] " : "bg-white dark:text-white dark:bg-[#31304D]"}>
              {Object.values(row).map((cell, i) => (
                <td className="p-3 text-sm" key={i}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSVTable;
