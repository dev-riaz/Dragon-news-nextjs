import React from "react";
import Marquee from "react-fast-marquee";

const News = [
  {
    id: 1,
    title: "AI Technology Continues to Transform Industries",
  },
  {
    id: 2,
    title: "Bangladesh Wins Exciting Cricket Match",
  },
  {
    id: 3,
    title: "New Startup Ecosystem Growing Rapidly",
  },
];

const BreakingNews = () => {
  return (
    <div className="p-4 bg-base-300 flex justify-between items-center">
      <button className="btn bg-red-800 text-white">Latest News</button>
      <Marquee pauseOnHover={true}>
        <div className="space-x-10">
          {News.map((n) => {
            return <span key={n.id}>{n.title}</span>;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
