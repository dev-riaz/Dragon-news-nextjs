import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";

const GetCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};
const GetNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};

const NewsPage = async ({ params }) => {
  const {id} = await params;
  console.log(id);

  const Categories = await GetCategories();
  const News = await GetNews(id);

  return (
    <div className="grid grid-cols-12 gap-4 my-10">
      <div className=" col-span-3">
        <LeftSideBar Categories={Categories} activeId={id}></LeftSideBar>
      </div>
      <div className="text-2xl col-span-6">
        Dragon News Home
        {News.map((n) => {
          return <div key={n._id}>{n.title}</div>;
        })}
      </div>
      <div className="text-2xl col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsPage;
