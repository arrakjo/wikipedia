import Link from "next/link";

function Footer() {
  return (
    <footer className="hidden lg:flex w-full px-5 py-8 font-semibold text-gray-800 items-center gap-9">
      <Link href="/">
        <a className="link">main version in english</a>
      </Link>
      <Link href="https://www.wikipedia.org/" passHref>
        <a target="_blank" className="link text-blue-500">
          classic wikipedia
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
