import React from "react";

function NGOsList({ result }) {
  return (
    <>
      <div className="shadow-md">
        <h3 className="text-lg font-bold mb-2 mt-6 ml-4">{result.length} NGOs found</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {result}
        </div>
      </div>
    </>
  );
}

export default NGOsList;
