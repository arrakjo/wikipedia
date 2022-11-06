import Head from "next/head";
import Header from "../../components/Header";

function Article() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>Article | Wikipedia 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="wikipedia" href="/" />

      <article className="w-full min-h-screen flex flex-col md:flex-row">
        <aside className="w-full md:w-1/3 bg-gray-100 p-5 md:py-5 md:px-10 lg:px-20 xl:pl-32 xl:pr-5">
          <div className="w-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/William_I_of_the_Netherlands.jpg" />
          </div>

          <div className="w-full p-10 flex flex-col gap-10">
            <div className="w-full flex text-sm">
              <p className="w-1/3 font-semibold">Born</p>
              <p className="w-2/3">24 August 1772</p>
            </div>
            <div className="w-full flex text-sm">
              <p className="w-1/3 font-semibold">Died</p>
              <p className="w-2/3">12 December 1843</p>
            </div>
            <div className="w-full flex text-sm">
              <p className="w-1/3 font-semibold">Reign</p>
              <p className="w-2/3">16 March 1815 - 7 October 1840</p>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-2/3 bg-white p-5 flex flex-col-reverse lg:flex-row gap-10">
          <section className="w-full lg:w-3/5 lg:pr-5 flex flex-col gap-16 lg:gap-24">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl mb-5">
                William I of the Netherlands
              </h1>
              <p className="text-sm text-gray-500">
                24 August 1772 - 12 December 1843
              </p>
            </div>

            <div className="w-full flex flex-col gap-16 lg:gap-24">
              <p
                id="introduction"
                className="first-letter:text-2xl first-letter:font-medium"
              >
                William I (Willem Frederik, Prince of Orange-Nassau; 24 August
                1772 - 12 December 1843) was a Prince of Orange, the King of the
                Netherlands and Grand Duke of Luxembourg. He was the son of the
                last Stadtholder of the Dutch Republic, who went into exile to
                London in 1795 because of the Batavian Revolution. As
                compensation for the loss of all his father's possessions in the
                Low Countries, an agreement was concluded between France and
                Prussia in which William was appointed ruler of the newly
                created Principality of Nassau-Orange-Fulda in 1803; this was
                however short-lived and in 1806 he was deposed by Napoleon. With
                the death of his father in 1806, he became Prince of Orange and
                ruler of the Principality of Orange-Nassau, which he also lost
                the same year after the dissolution of the Holy Roman Empire and
                subsequent creation of the Confederation of the Rhine at the
                behest of Napoleon. In 1813, when Napoleon was defeated at the
                Battle of Leipzig, the Orange-Nassau territories were returned
                to William and he was asked as well to become the Sovereign
                Prince of the United Netherlands. He proclaimed himself King of
                the Netherlands on 16 March 1815.
              </p>

              <div className="w-full">
                <p id="prince-of-orange" className="text-2xl mb-5 font-medium">
                  Prince of Orange
                </p>
                <p>
                  King William I's parents were the last stadtholder William V,
                  Prince of Orange of the Dutch Republic, and his wife
                  Wilhelmina of Prussia. Until 1806, William was formally known
                  as William VI, Prince of Orange-Nassau,[a] and between 1806
                  and 1813 also as Prince of Orange. In Berlin on 1 October
                  1791, William married his maternal first cousin (Frederica
                  Louisa) Wilhelmina of Prussia, born in Potsdam. She was the
                  daughter of King Frederick William II of Prussia. After
                  Wilhelmina died in 1837, William married Countess Henriette
                  d'Oultremont de Wégimont (28 February 1792, in Maastricht - 26
                  October 1864, in Schloss Rahe), created Countess of Nassau, on
                  17 February 1841, also in Berlin.
                </p>

                <p id="youth" className="text-lg mt-5 mb-3 font-medium">
                  Youth and early military career
                </p>
                <p>
                  As eldest son of the William V, Prince of Orange, William was
                  informally referred to as Erfprins[b] (Hereditary Prince) by
                  contemporaries from his birth until the death of his father in
                  1806 to distinguish him from William V. Like his younger
                  brother Prince Frederick of Orange-Nassau he was tutored by
                  the Swiss mathematician Leonhard Euler and the Dutch historian
                  Herman Tollius. They were both tutored in the military arts by
                  general Prince Frederick Stamford. After the Patriot revolt
                  had been suppressed in 1787, he in 1788-89 attended the
                  military academy in Brunswick which was considered an
                  excellent military school, together with his brother. In 1790
                  he visited a number of foreign courts like the one in Nassau
                  and the Prussian capital Berlin, where he first met his future
                  wife. William subsequently studied briefly at the University
                  of Leiden.
                </p>

                <p id="exile" className="text-lg mt-5 mb-3 font-medium">
                  Exile
                </p>
                <p>
                  Soon after the departure to Britain the Hereditary Prince went
                  back to the Continent, where his brother was assembling former
                  members of the States Army in Osnabrück for a planned invasion
                  into the Batavian Republic in the Summer of 1795. However, the
                  neutral Prussian government forbade this. In 1799, William
                  landed in the current North Holland as part of an
                  Anglo-Russian invasion of Holland. The Hereditary Prince was
                  instrumental in fomenting a mutiny on the Batavian naval
                  squadron in the Vlieter, resulting in the surrender of the
                  ships without a fight to the Royal Navy, which accepted the
                  surrender in the name of the stadtholder. Not all the local
                  Dutch population, however, was pleased with the arrival of the
                  prince. One local Orangist was even executed.
                </p>

                <p id="return" className="text-lg mt-5 mb-3 font-medium">
                  Return
                </p>
                <p>
                  After Napoleon's defeat at Leipzig (October 1813), the French
                  troops retreated to France from all over Europe. The
                  Netherlands had been annexed to the French Empire by Napoleon
                  in 1810. But now city after city was evacuated by the French
                  occupation troops. In the ensuing power vacuum a number of
                  former Orangist politicians and former Patriots formed a
                  provisional government in November 1813. Although a large
                  number of the members of the provisional government had helped
                  drive out William V 18 years earlier, it was taken for granted
                  that his son would have to head any new government. They also
                  agreed it would be better in the long term for the Dutch to
                  restore him themselves, rather than have the Great Powers
                  impose him on the country. The Dutch population were pleased
                  with the departure of the French, who had ruined the Dutch
                  economy, and this time welcomed the prince.
                </p>
              </div>
            </div>
          </section>

          <aside className="w-full lg:w-2/5 py-2 lg:px-5">
            <p className="font-semibold mb-3">Contents</p>
            <ol>
              <li>
                <a href="#introduction">Introduction</a>
              </li>
              <li>
                <a href="#prince-of-orange">Prince of Orange</a>
                <ol>
                  <li>
                    <a href="#youth">Youth and early military career</a>
                  </li>
                  <li>
                    <a href="#exile">Exile</a>
                  </li>
                  <li>
                    <a href="#return">Return</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#king-of-the-netherlands">King of the Netherlands</a>
                <ol>
                  <li>
                    <a href="#principal-changes">Principal changes</a>
                  </li>
                  <li>
                    <a href="#revolt-of-the-southern-provinces">
                      Revolt of the Southern Provinces
                    </a>
                  </li>
                  <li>
                    <a href="#constitutional-changes">
                      Constitutional changes and abdication in later life
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </aside>
        </main>
      </article>
    </div>
  );
}

export default Article;
