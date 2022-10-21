import { Bars2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full p-5 flex items-center justify-between">
      <button className="p-1 rounded-lg">
        <Bars2Icon className="w-10 text-gray-800" />
      </button>
      <Link href="/">
        <a className="text-xl font-semibold text-gray-800">wikipedia</a>
      </Link>
    </header>
  );
}

export default Header;
