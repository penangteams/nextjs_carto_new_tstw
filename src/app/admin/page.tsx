/** @format */
"use client";
import { usePackStore } from "@/contexts/store";
import { useEffect, useState } from "react";
import styles from "@/app/components/MyCard.module.css";
import { nanoid } from "nanoid";
import { ITypes } from "@/app/types/MyCard.types";
import { TableUsers } from "@/app/components/TableUsers";

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

  return (
    <>
      <div className="my-7">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 auto-cols-max">
          {mpacks.length === 0 ? (
            <div>No data</div>
          ) : (
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
                      <p className="text-sm text-justify border-2 border-green-600 px-2 rounded-lg">
                        Actually brunch messenger bag, you probably havent heard
                        of them cliche pinterest truffaut enamel pin
                        chicharrones schlitz. Slow-carb hell of cardigan
                        church-key pug skateboard. PBR&B artisan affogato,
                        locavore cupping blue bottle keffiyeh poutine XOXO
                        organic. Health goth gluten-free mumblecore
                        farm-to-table, copper mug flexitarian pour-over grailed
                        PBR&B aesthetic raw denim umami heirloom forage. Selfies
                        thundercats kickstarter venmo edison bulb post-ironic.
                      </p>
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
                      <p className="text-sm text-justify border-2 border-pink-400 px-2 rounded-lg">
                        Actually brunch messenger bag, you probably havent heard
                        of them cliche pinterest truffaut enamel pin
                        chicharrones schlitz. Slow-carb hell of cardigan
                        church-key pug skateboard. PBR&B artisan affogato,
                        locavore cupping blue bottle keffiyeh poutine XOXO
                        organic. Health goth gluten-free mumblecore
                        farm-to-table, copper mug flexitarian pour-over grailed
                        PBR&B aesthetic raw denim umami heirloom forage. Selfies
                        thundercats kickstarter venmo edison bulb post-ironic.
                      </p>
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
                      <p className="text-sm text-justify border-2 border-orange-300 px-2 rounded-lg">
                        Actually brunch messenger bag, you probably havent heard
                        of them cliche pinterest truffaut enamel pin
                        chicharrones schlitz. Slow-carb hell of cardigan
                        church-key pug skateboard. PBR&B artisan affogato,
                        locavore cupping blue bottle keffiyeh poutine XOXO
                        organic. Health goth gluten-free mumblecore
                        farm-to-table, copper mug flexitarian pour-over grailed
                        PBR&B aesthetic raw denim umami heirloom forage. Selfies
                        thundercats kickstarter venmo edison bulb post-ironic.
                      </p>
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
                      <p className="text-sm text-justify border-2 border-purple-400 px-2 rounded-lg">
                        Actually brunch messenger bag, you probably havent heard
                        of them cliche pinterest truffaut enamel pin
                        chicharrones schlitz. Slow-carb hell of cardigan
                        church-key pug skateboard. PBR&B artisan affogato,
                        locavore cupping blue bottle keffiyeh poutine XOXO
                        organic. Health goth gluten-free mumblecore
                        farm-to-table, copper mug flexitarian pour-over grailed
                        PBR&B aesthetic raw denim umami heirloom forage. Selfies
                        thundercats kickstarter venmo edison bulb post-ironic.
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="w-full sm:p-4">
        <TableUsers />
        <h2 className="p-4">All links</h2>
        <div className="rounded-md sm:border"></div>
      </div>
    </>
  );
}
