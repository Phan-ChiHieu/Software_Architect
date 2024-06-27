import React, { memo } from "react";

function SearchComponent({ onSearch }: any) {
  console.log("Search Rendering !!!");
  return (
    <div>
      <input
        type="text"
        onChange={onSearch}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border-2 border-violet-700"
      />
    </div>
  );
}

export default memo(SearchComponent);
