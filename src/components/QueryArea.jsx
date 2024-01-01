import React, { memo} from "react";

const QueryArea = memo(({ text, setText }) => {
 const handleInputChange = (event) => {
  if (event.target.value.length <= 10000) {
    setText(event.target.value);
  }
 };

 return (
  <>
    <div className="flex w-full h-[35vh] my-8 border-solid border-2 border-stone-600 rounded-md bg-white relative p-3 dark:bg-[#282B37]">
      <textarea
        className=" relative w-full h-full focus:outline-none focus:shadow-outline dark:bg-[#282B37] dark:text-white"
        value={ text}
        onChange={handleInputChange}
      />
      <span className="absolute bottom-2 right-2 dark:text-white">{text.length} / 10000</span>
    </div>
  </>
 );
});
export default QueryArea;
