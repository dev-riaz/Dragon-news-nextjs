import Link from "next/link";
import React from "react";

const LeftSideBar = ({ Categories, activeId }) => {
  return (
    <div>
      <h2 className="text-xl font-bold ">All Categories</h2>
      <ul className="flex flex-col gap-4 mt-4 text-center text-lg font-bold text-gray-400">
        {Categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "bg-slate-300"}`}
            >
              <Link href={`/category/${category.category_id}`} className="block">
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
