import { Bars2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface Props {
  title: string;
  href: string;
}

function Header({ title, href }: Props) {
  return (
    <header className="w-full p-5 flex items-center justify-between">
      <button className="p-1 rounded-lg">
        <Bars2Icon className="w-10 text-gray-800" />
      </button>
      <Link href={href}>
        <a className="text-xl font-semibold text-gray-800">{title}</a>
      </Link>
    </header>
  );
}

export default Header;
