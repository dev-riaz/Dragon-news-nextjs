import LeftSideBar from "@/components/homepage/news/LeftSideBar"
import RightSideBar from "@/components/homepage/news/RightSideBar"

const GetCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}

export default async function Home() {
  const Categories = await GetCategories()
  console.log(Categories.
    news_category
  );

  return (

    <div className="grid grid-cols-12 gap-4 my-10">
      <div className=" col-span-3">
        <LeftSideBar Categories={Categories} activeId={"01"}></LeftSideBar> 

      </div>
      <div className="text-2xl col-span-6">Dragon News Home</div>
      <div className="text-2xl col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
