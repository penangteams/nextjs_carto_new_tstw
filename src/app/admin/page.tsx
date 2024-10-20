/** @format */
"use client";
import { usePackStore } from "@/contexts/store";
import { useEffect, useState } from "react";
import styles from "@/app/components/MyCard.module.css";
import { nanoid } from "nanoid";
import { ITypes } from "@/app/types/MyCard.types";
import { TableUsers } from "@/app/components/TableUsers";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "@/lotties/nodatas.json";

const spadess = <>&spades;</>;
const diamss = <>&diams;</>;
const clubss = <>&clubs;</>;
const heartss = <>&hearts;</>;
const namediams = `${styles.diams}`;
const nameclubs = `${styles.clubs}`;
const namespades = `${styles.spades}`;
const namehearts = `${styles.hearts}`;

export default function AdminPage() {
  const mpacks = usePackStore((state) => state.myPacks);

  const initializeArrayWithValues = (n: number, val = 0) => Array(n).fill(val);
  let arr: ITypes[] = [];
  useEffect(() => {
    console.log("in admin::", mpacks);
  }, [mpacks]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="my-7">
        {mpacks.length === 0 && (
          <div className="flex justify-center items-center">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 auto-cols-max">
          {mpacks &&
            mpacks.map((el, index) => {
              return (
                <div
                  className={`flex justify-center ${styles.playingCards} ${styles.fourColours} ${styles.rotateHand}`}
                  key={nanoid()}
                >
                  {el?.name?.includes("hearts") && (
                    <div className="flex flex-col">
                      <span className="flex justify-center">
                        <div
                          className={`${styles.card} ${el.sty} ${namehearts}`}
                        >
                          <span className={styles.rank}>{el.uniq}</span>
                          <span className={styles.suit}>{heartss}</span>
                        </div>
                      </span>
                      <div className="text-sm text-justify border-2 border-green-600 px-2 rounded-lg mt-4">
                        <ul>
                          <li>
                            The ace of diamond is a very lucky card and it shows
                            the money strength of the client
                          </li>
                          <li>
                            The jack of heart is a rmantic man, a day dreamer.
                            Money is secondary before love, it shows new love,
                            new network etc
                          </li>
                          <li>
                            The Queen of hearts is the lovely mother, wife,
                            girl-friend, signifies that wealth is on the way,
                            new beginnings
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {el?.name?.includes("spade") && (
                    <div className="flex flex-col">
                      <span className="flex justify-center">
                        <div
                          className={`${styles.card} ${el.sty} ${namespades}`}
                        >
                          <span className={styles.rank}>{el.uniq}</span>
                          <span className={styles.suit}>{spadess}</span>
                        </div>
                      </span>
                      <div className="text-sm text-justify border-2 border-green-600 px-2 rounded-lg mt-4">
                        <ul>
                          <li>
                            The ace of diamond is a very lucky card and it shows
                            the money strength of the client
                          </li>
                          <li>
                            The jack of heart is a rmantic man, a day dreamer.
                            Money is secondary before love, it shows new love,
                            new network etc
                          </li>
                          <li>
                            The Queen of hearts is the lovely mother, wife,
                            girl-friend, signifies that wealth is on the way,
                            new beginnings
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {el?.name?.includes("diamond") && (
                    <div className="flex flex-col">
                      <span className="flex justify-center">
                        <div
                          className={`${styles.card} ${el.sty} ${namediams}`}
                        >
                          <span className={styles.rank}>{el.uniq}</span>
                          <span className={styles.suit}>{diamss}</span>
                        </div>
                      </span>
                      <div className="text-sm text-justify border-2 border-green-600 px-2 rounded-lg mt-4">
                        <ul>
                          <li>
                            The ace of diamond is a very lucky card and it shows
                            the money strength of the client
                          </li>
                          <li>
                            The jack of heart is a rmantic man, a day dreamer.
                            Money is secondary before love, it shows new love,
                            new network etc
                          </li>
                          <li>
                            The Queen of hearts is the lovely mother, wife,
                            girl-friend, signifies that wealth is on the way,
                            new beginnings
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {el?.name?.includes("clubs") && (
                    <div className="flex flex-col">
                      <span className="flex justify-center">
                        <div
                          className={`${styles.card} ${el.sty} ${nameclubs}`}
                        >
                          <span className={styles.rank}>{el.uniq}</span>
                          <span className={styles.suit}>{clubss}</span>
                        </div>
                      </span>
                      <div className="text-sm text-justify border-2 border-green-600 px-2 rounded-lg mt-4">
                        <ul>
                          <li>
                            The ace of diamond is a very lucky card and it shows
                            the money strength of the client
                          </li>
                          <li>
                            The jack of heart is a rmantic man, a day dreamer.
                            Money is secondary before love, it shows new love,
                            new network etc
                          </li>
                          <li>
                            The Queen of hearts is the lovely mother, wife,
                            girl-friend, signifies that wealth is on the way,
                            new beginnings
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          {mpacks && mpacks.length > 0 ? (
            <div className="top-0 flex flex-col items-center justify-center">
              <Link
                href="/"
                className="relative px-5 py-2 font-medium text-white group my-1 text-center md:w-[60%] sm:w-3/4 xs:w-full"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                <span className="relative text-sm">Save pack</span>
              </Link>
              <Link
                href="/"
                className="relative px-5 py-2 font-medium text-white group my-1 text-center md:w-[60%] sm:w-3/4 xs:w-full"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-pink-700 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
                <span className="relative text-sm">Discard pack</span>
              </Link>
              <Link
                href="/"
                className="relative px-5 py-2 font-medium text-white group my-1 text-center md:w-[60%] sm:w-3/4 xs:w-full"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-green-700 group-hover:skew-x-12"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
                <span className="relative text-sm">Edit notes</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      <div className="w-full sm:p-4">
        <TableUsers />
        <h2 className="p-4">This is a quick history view</h2>
        <div className="rounded-md sm:border"></div>
      </div>
    </>
  );
}
