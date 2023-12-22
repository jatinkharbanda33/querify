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

  return (
    <div className="relative w-11/12 h-5/6 overflow-auto bg-white m-8 border-solid border-2 border-stone-600">
      <table className="table-auto w-full ">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {header[0] &&
              Object.values(header[0]).map((heading, i) => (
                <th
                  className="p-3 text-sm font-semibold tracking-wide text-left"
                  key={i}
                >
                  {heading}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-200" : "bg-white"}>
              {Object.values(row).map((cell, i) => (
                <td className="p-3 text-sm text-gray-700" key={i}>
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
