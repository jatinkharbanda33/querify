import React from "react";

const QueryButton = ({
    setText,func
}
) => {
    const handleClick=()=>{
       if(func=="A"){
        setText("SELECT * FROM EMPLOYEES");

       }
       else if(func=="B"){
        setText("SELECT EmployeeId,LastName,FirstName FROM EMPLOYEES");

       }
       else if(func=="C"){
        setText("SELECT EmployeeID,Position,title,City,State,Pincode,Country FROM EMPLOYEES");
        
       }
       else if(func=="D"){
        setText("SELECT EmployeeID,LastName,FirstName,Address,City FROM EMPLOYEES");
        
       }
       else if(func=="E"){
        setText("SELECT EmployeeID,LastName,FirstName,PhoneNumber FROM EMPLOYEES")
       }
       else{
        setText("");
       }
      
    };

  return (
    
    <button
      type="button"
      className="transition delay-50 hover:scale-110 text-white bg-[#2026d2]  ease-in-out hover:bg-gradient-to-bl focus:outline-none  font-medium rounded-lg h-10 text-sm px-4 text-center me-2"
      onClick={handleClick}

    >
      Query {func}
    </button>
  );
};

export default QueryButton;
