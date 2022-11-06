import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import RecommendationCard from "../components/RecommendationCard";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Wikipedia 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="hello world." href="/" />

      <main className="w-full flex-1 p-5 gap-8 md:gap-16 md:px-14 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="relative w-32 h-32">
            <Image
              src={Logo}
              alt="Logo"
              layout="fill"
              className="opacity-70"
              priority
            />
          </div>
          <h1 className="font-semibold text-3xl text-gray-800">wikipedia</h1>
        </div>
        <div className="w-full max-w-6xl flex flex-col justify-start md:p-5 gap-10">
          <form className="w-full flex flex-col gap-10">
            <div className="w-full flex items-center justify-between">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search content"
                id="search"
                name="search"
                className="border-none outline-none text-4xl md:text-5xl font-semibold w-full max-w-4xl text-gray-800 caret-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <MagnifyingGlassIcon className="w-14 md:w-20 text-gray-200 hover:text-gray-300 duration-300" />
              </button>
            </div>
            <label htmlFor="search" className="w-fit text-gray-300">
              Type what you're looking for..
            </label>
          </form>
        </div>
      </main>

      <RecommendationCard />
      <Footer />
    </div>
  );
};

export default Home;
