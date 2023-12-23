import React, { useState } from "react";

const QueryArea = ({ text, setText }) => {
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="flex w-11/12 h-4/5 m-8 border-solid border-2 border-stone-600 rounded-md bg-white">
        <textarea
          className="relative w-full ml-2 h-full focus:outline-none focus:shadow-outline"
          value={text}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default QueryArea;
