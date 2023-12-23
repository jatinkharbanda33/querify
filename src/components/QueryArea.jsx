import React, { useState } from "react";

const QueryArea = ({ text, setText }) => {
 const [charCount, setCharCount] = useState(0);

 const handleInputChange = (event) => {
  if (event.target.value.length <= 10000) {
    setText(event.target.value);
    setCharCount(event.target.value.length);
  }
 };

 return (
  <>
    <div className="flex w-full h-[35vh] my-8 border-solid border-2 border-stone-600 rounded-md bg-white relative p-3">
      <textarea
        className="relative w-full h-full focus:outline-none focus:shadow-outline"
        value={ text}
        onChange={handleInputChange}
      />
      <span className="absolute bottom-2 right-2">{charCount} / 10000</span>
    </div>
  </>
 );
};

export default QueryArea;
