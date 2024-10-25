import React, { useState, useEffect } from "react";

const MainPage = () => {
  const [textAreaValue, setTextAreaValue] = useState();
  const [resultTextAreaValue, setResultTextAreaValue] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setTextAreaValue(e.target.value);
    setResultTextAreaValue(e.target.value.toLowerCase());
    console.log(textAreaValue);
  };

  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="flex items-center justify-center  bg-green-300">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-lg">
            <div className="text-lg font-semibold">Enter text</div>
            <form className="w-full flex flex-col items-center justify-center">
              <textarea
                className="w-[600px] h-[300px] border border-gray-400 p-3 rounded-lg shadow-lg resize-none"
                placeholder="Type here..."
                value={textAreaValue}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="flex items-center justify-center  bg-blue-300">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-lg">
            <div className="text-lg font-semibold">Result</div>
            <form className="w-full flex flex-col items-center justify-center">
              <textarea
                className="w-[600px] h-[300px] border border-gray-400 p-3 rounded-lg shadow-lg resize-none"
                placeholder="Result"
                value={resultTextAreaValue}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
