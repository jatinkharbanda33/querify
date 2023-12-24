import React, { useState, useEffect, memo } from "react";
import { readRemoteFile } from "react-papaparse";

const CSVTable = memo(({ result }) => {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(false); // New loading state
 
  useEffect(() => {
    setLoading(true); // Start loading
    if (
      result === "A" ||
      result === "B" ||
      result === "C" ||
      result === "D" ||
      result === "E"
    ) {
      readRemoteFile(process.env.PUBLIC_URL + `/${result}.csv`, {
        complete: (results) => {
          setData(results.data.slice(1));
          setHeader(results.data[0]);
          setLoading(false); // End loading
        },
      });
    } else {
      setLoading(false); // End loading if result is "X"
    }
  }, [result]);
 if(loading){
  return <div className="flex w-full h-[65vh] relative p-3 my-8 overflow-auto items-center justify-center scrollbar-thumb-slate-400  scrollbar-track-gray-400 bg-white border-solid border-2 border-stone-600 dark:bg-[#31304D]">Loading</div>
 }

  if (!result || result === "X") {
    return (
      <div className="flex w-full h-[65vh] relative p-3 my-8 justify-center items-center verflow-auto scrollbar-thumb-slate-400  scrollbar-track-gray-400 bg-white border-solid border-2 border-stone-600 dark:bg-[#31304D]">
        <div className="">
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
    <div className="flex w-full h-[65vh] relative my-8 overflow-auto scrollbar-thumb-slate-400  scrollbar-track-gray-400 bg-white border-solid border-2 border-stone-600 dark:bg-[#31304D]">
      <table className="relative table w-full h-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200 dark:bg-[#31304D] dark:text-white">
          <tr>
            {header[0] &&
              Object.values(header).map((heading, i) => (
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
}
);

export default CSVTable;
