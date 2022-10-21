import Link from "next/link";

function RecommendationCard() {
  return (
    <div className="fixed bottom-0 right-0 w-3/4 md:w-1/2 min-h-fit flex flex-col lg:flex-row gap-5 px-5 py-5 lg:py-7 bg-gray-900 text-gray-50 text-sm">
      <p className="text-gray-500">recommended</p>
      <div className="flex-1 px-5 lg:px-0 lg:pr-2 flex flex-col lg:flex-row gap-5">
        <Link href="#">
          <a className="link truncate break-keep lg:w-1/4 lg:max-w-[126px]">
            William Shakespeare
          </a>
        </Link>
        <Link href="#">
          <a className="link truncate break-keep lg:max-w-[126px]">
            Lorem Ipsum
          </a>
        </Link>

        <Link href="#">
          <a className="link lg:ml-auto">...more</a>
        </Link>
      </div>
    </div>
  );
}

export default RecommendationCard;
