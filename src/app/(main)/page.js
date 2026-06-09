import LeftSideBar from "@/components/homepage/news/LeftSideBar"

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
        <LeftSideBar Categories={Categories}></LeftSideBar> 

      </div>
      <div className="text-2xl bg-amber-950 col-span-6">Dragon News Home</div>
      <div className="text-2xl bg-yellow-200 col-span-3">Login with</div>
    </div>
  );
}
