import React from "react";

const LeftSideBar = ({ Categories }) => {
  return (
    <div>
      <h2 className="text-xl font-bold ">All Categories</h2>
      <ul className="flex flex-col gap-4 mt-4 text-center text-lg font-bold text-gray-400">
        {Categories.news_category.map((category) => {
          return <li key={category.category_id}>{category.category_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
