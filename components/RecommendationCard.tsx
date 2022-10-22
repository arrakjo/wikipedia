import Link from "next/link";
import { useEffect, useState } from "react";

const year = new Date().getFullYear();
const m = new Date().getMonth();
const d = new Date().getDate();
const month = m < 10 ? 0 + "" + m : m;
const day = d < 10 ? 0 + "" + d : d;

function RecommendationCard() {
  const [recommended, setRecommended] = useState<[any]>();

  useEffect(() => {
    const fetchRecommended = async () => {
      const data = await fetch(
        `https://en.wikipedia.org/api/rest_v1/feed/featured/${year}/${month}/${day}`
      );
      const json = await data.json();
      setRecommended([json]);
    };

    fetchRecommended().catch((err) => console.error(err));
  }, []);

  if (!recommended)
    return (
      <div className="fixed bottom-0 right-0 w-3/4 md:w-1/2 min-h-fit flex flex-col lg:flex-row gap-5 px-5 py-5 lg:py-7 bg-gray-900 text-gray-50 text-sm">
        <p className="text-gray-500">fetching data...</p>
      </div>
    );

  console.log(recommended);

  const thisDayArray = recommended[0].onthisday.map((item: any) => item);
  console.log(thisDayArray);

  return (
    <div className="fixed bottom-0 right-0 w-3/4 md:w-1/2 min-h-fit flex flex-col lg:flex-row gap-5 px-5 py-5 lg:py-7 bg-gray-900 text-gray-50 text-sm">
      <p className="text-gray-500">on this day</p>
      <div className="flex-1 px-5 lg:px-0 lg:pr-2 flex flex-col lg:flex-row lg:flex-wrap gap-5">
        {thisDayArray
          .map((item: any, i: number) => (
            <Link key={item} href="#">
              <a className="link truncate break-keep lg:max-w-[156px]">
                {item.pages[0].titles.normalized}
              </a>
            </Link>
          ))
          .slice(0, 4)}

        <Link href="#">
          <a className="link lg:ml-auto">...more</a>
        </Link>
      </div>
    </div>
  );
}

export default RecommendationCard;
