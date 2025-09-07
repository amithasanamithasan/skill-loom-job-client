import React from "react";

const Panel = ({ index, style }) => {
  return (
    <div
      className="panel flex items-center justify-center w-40 h-60 bg-blue-500 text-white rounded-lg"
      style={style}
    >
      {index}
    </div>
  );
};

export default Panel;
