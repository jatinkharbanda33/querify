import React from "react";
import { useState, useEffect } from "react";
import QueryArea from "./QueryArea";
import CSVTable from "./QueryResult";
import QueryButton from "./QueryButton";
const Hero = () => {
  const [result, setResult] = useState("A");
  const [text, setText] = useState("SELECT * FROM EMPLOYEES");
  const handleRun = () => {
    if (text.trim() == "") {
      setResult("X");
    } else if (text.toLowerCase() == "select * from employees") {
      setResult("A");
    } else if (
      text.toLowerCase() ==
      "select employeeid,lastname,firstname from employees"
    ) {
      setResult("B");
    } else if (
      text.toLowerCase() ==
      "select employeeid,position,title,city,state,pincode,country from employees"
    ) {
      setResult("C");
    } else if (
      text.toLowerCase() ==
      "select employeeid,lastname,firstname,address,city from employees"
    ) {
      setResult("D");
    } else {
      setResult("E");
    }
  };
  const handleReset = () => {
    setText("");
    setResult("X");
  };
  const pasteText = async () => {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
  };
  return (
    <div className="flex justify-around my-10">
      <div className="w-2/5 h-full">
        <div className="w-full h-[45vh] bg-gradient-to-r rounded-3xl ">
          <h1 className="flex justify-center font-bold text-2xl -mb-4">
            Query
          </h1>
          <QueryArea text={text} setText={setText} />
        </div>
        <div className="w-full flex flex-row justify-around mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-500 to-red-700 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-4 text-center me-2"
            onClick={handleReset}
          >
            RESET
          </button>
          <QueryButton setText={setText} func="A" />
          <QueryButton setText={setText} func="B" />
          <QueryButton setText={setText} func="C" />
          <QueryButton setText={setText} func="D" />
          
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  ease-in-out hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg h-10 text-sm px-4 text-center me-2"
          onClick={pasteText}
        >
          Paste Query
        </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 to-green-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-4 text-center me-2"
            onClick={handleRun}
          >
            RUN
          </button>
        </div>
      </div>

      <div className="w-3/6 h-[75vh] ">
        <h1 className="flex justify-center font-bold text-2xl -mb-4">Result</h1>
        <CSVTable result={result} />
      </div>
    </div>
  );
};

export default Hero;
