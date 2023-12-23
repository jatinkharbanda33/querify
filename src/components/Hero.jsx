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
    <div className="flex flex-col xl:flex-row items-center justify-around w-full">
      <div className="w-full p-2 lg:w-[80vw] xl:w-2/5 h-full ">
          <h1 className="flex justify-center font-bold text-2xl -mb-4">
            Query
          </h1>
      
        <QueryArea text={text} setText={setText} className = "h-2 p-3"/>
        
        <div className="lg:w-full sm:flex sm:flex-row grid grid-cols-4 space-y-1 justify-center mx-4 mt-4">
          <button
            type="button"
            className="transition ease-in-out delay-50 hover:scale-110 text-white bg-[#CE0E2D] hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg mt-1 h-10 px-4 text-sm text-center me-2 "
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
          className="transition delay-50 hover:scale-110 text-white bg-[#2026d2] ease-in-out hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg h-10 text-sm px-4 text-center me-2"
          onClick={pasteText}
        >
          Paste Query
        </button>
          <button
            type="button"
            className="transition ease-in-out delay-50 hover:scale-110 text-white bg-green-700 hover:bg-green-600 focus:outline-none font-medium rounded-lg text-sm px-4 text-center me-2"
            onClick={handleRun}
          >
            RUN
          </button>
        </div>
      </div>

      <div className="w-full my-5 lg:w-[90vw] xl:w-3/6 h-[75vh] ">
        <h1 className="flex justify-center font-bold text-2xl -mb-4">Result</h1>
        <CSVTable result={result} />
      </div>
    </div>
  );
};

export default Hero;
