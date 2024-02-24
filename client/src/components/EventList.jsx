import React from "react";

function EventList({ result }) {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Events found</h3>    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-4">
          {result}
        </div>
      </div>
    </>
  );
}

export default EventList;
