/** @format */
"use client";
import styles from "./MyCard.module.css";
import { diamonds, clubs, hearts, spades } from "./allcards";
import { nanoid } from "nanoid";
import { useSearchStore, usePackStore } from "@/contexts/store";
import { motion, useTime, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "./CustomToaster";
import { ITypes } from "@/app/types/MyCard.types";

let imgUrl =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80";

export default function MyCard() {
  // const [list, setList] = useState<string[]>([]); // This should be your fetched list
  const search = useSearchStore((state) => state.searchTerm);
  // const mpacks = usePackStore((state) => state.myPacks);
  const setMpacks = usePackStore((state) => state.setmyPacks);
  const rmPacks = usePackStore((state) => state.removePacks);
  const time = useTime();
  const rotate = useTransform(time, [0, 5000], [0, 360], {
    clamp: true,
  });
  const spadess = <>&spades;</>;
  const diamss = <>&diams;</>;
  const clubss = <>&clubs;</>;
  const heartss = <>&hearts;</>;
  const namediams = `${styles.diams}`;
  const nameclubs = `${styles.clubs}`;
  const namespades = `${styles.spades}`;
  const namehearts = `${styles.hearts}`;
  const allCards = diamonds.concat(clubs).concat(hearts).concat(spades);
  const [packs, setPacks] = useState<ITypes[]>([]);
  //const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  //const arr1 = initializeArrayWithValues(52, 1); //make it 52 length on the left side, right is just a value
  const filteredList = allCards.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  var genre_array: ITypes[] = [];
  function getPacks(e: ITypes) {
    packs.forEach(function (e) {
      allCards.forEach(function (element) {
        if (element.id === e.id) {
          genre_array.push(element);
        }
      });
    });
    setMpacks(genre_array.slice(0, 3));
  }

  useEffect(() => {
    rmPacks(); //remove all packs on loading the page
  }, []);

  useEffect(() => {
    let length = packs.length;
    let literal1 = `You have chosen ${length} card/s `;
    let literal2 = `You are not allowed to choose > 3 card/s `;
    if (length === 0) {
      //
    } else if (length <= 3) {
      if (length === 1) {
        notify({ imgUrl, literal1 });
      } else if (length === 2) {
        notify({ imgUrl, literal1 });
      } else {
        notify({ imgUrl, literal1 });
      }
    } else {
      notify({ imgUrl, literal2 });
    }

    if (packs.length === 3) {
      for (var i = 0; i < packs.length; i++) {
        getPacks(packs[i]);
      }
    }

    console.log("packs", packs.slice(0, 3)); //take first 3 elements
  }, [packs]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setPacks([...packs, { id: e.currentTarget.id }]);
  };
  return (
    <>
      <div className="my-7">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 auto-cols-max">
          {filteredList.length === 0 ? (
            <div>No data</div>
          ) : (
            filteredList.map((el, index) => {
              return (
                <div
                  className={`flex justify-center ${styles.playingCards} ${styles.fourColours} ${styles.rotateHand}`}
                  key={nanoid()}
                >
                  {el.name.includes("hearts") && (
                    <>
                      <motion.div
                        className={`${styles.card} ${el.sty} ${namehearts}`}
                        // animate={{
                        //   scale: [1, 2, 2, 1, 1],
                        //   rotate: [0, 0, 270, 270, 0],
                        //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                        // }}
                        style={{ rotate }}
                      >
                        <span className={styles.rank}>
                          {el.uniq}
                          <button
                            id={el.id}
                            onClick={(e) => handleClick(e)}
                            className="float-right top-0 relative inline-block px-2 py-2 font-medium text-[9px] group"
                          >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-700 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                            <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-teal-700 rounded"></span>
                            <span className="relative text-white group-hover:text-white">
                              Choose
                            </span>
                          </button>
                        </span>
                        <span className={styles.suit}>{heartss}</span>
                      </motion.div>
                    </>
                  )}

                  {el.name.includes("spade") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${namespades}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 180, 180, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>
                        {el.uniq}
                        <button
                          id={el.id}
                          onClick={(e) => handleClick(e)}
                          className="float-right top-0 relative inline-block px-2 py-2 font-medium text-[9px] group"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-700 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                          <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-teal-700 rounded"></span>
                          <span className="relative text-white group-hover:text-white">
                            Choose
                          </span>
                        </button>
                      </span>

                      <span className={styles.suit}>{spadess}</span>
                    </motion.div>
                  )}
                  {el.name.includes("diamond") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${namediams}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 270, 270, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>
                        {el.uniq}
                        <button
                          id={el.id}
                          onClick={(e) => handleClick(e)}
                          className="float-right top-0 relative inline-block px-2 py-2 font-medium text-[9px] group"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-700 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                          <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-teal-700 rounded"></span>
                          <span className="relative text-white group-hover:text-white">
                            Choose
                          </span>
                        </button>
                      </span>

                      <span className={styles.suit}>{diamss}</span>
                    </motion.div>
                  )}
                  {el.name.includes("clubs") && (
                    <motion.div
                      className={`${styles.card} ${el.sty} ${nameclubs}`}
                      // animate={{
                      //   scale: [1, 2, 2, 1, 1],
                      //   rotate: [0, 0, 180, 180, 0],
                      //   borderRadius: ["20%", "20%", "50%", "50%", "20%", "0%"],
                      // }}
                      style={{ rotate }}
                    >
                      <span className={styles.rank}>
                        {el.uniq}
                        <button
                          id={el.id}
                          onClick={(e) => handleClick(e)}
                          className="float-right top-0 relative inline-block px-2 py-2 font-medium text-[9px] group"
                        >
                          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-700 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded"></span>
                          <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-teal-700 rounded"></span>
                          <span className="relative text-white group-hover:text-white">
                            Choose
                          </span>
                        </button>
                      </span>

                      <span className={styles.suit}>{clubss}</span>
                    </motion.div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
}
