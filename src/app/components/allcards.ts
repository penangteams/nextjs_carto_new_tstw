/** @format */
import styles from "./MyCard.module.css";

let diamonds = [
  {
    id: "a_diamond",
    name: "ace diamond, one diamond , 1 diamond, ace dice, one dice , 1 dice",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2_diamond",
    name: "two diamond , 2 diamond, two dice , 2 dice",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3_diamond",
    name: "three diamond , 3 diamond, three dice , 3 dice",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4_diamond",
    name: "four diamond , 4 diamond, four dice , 4 dice",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5_diamond",
    name: "five diamond , 5 diamond, five dice , 5 dice",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6_diamond",
    name: "six diamond , 6 diamond, six dice , 6 dice",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7_diamond",
    name: "seven diamond , 7 diamond, seven dice , 7 dice",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8_diamond",
    name: "eight diamond , 8 diamond, eight dice , 8 dice",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9_diamond",
    name: "nine diamond , 9 diamond, nine dice , 9 dice",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10_diamond",
    name: "ten diamond , 10 diamond, ten dice , 10 dice",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j_diamond",
    name: "jack diamond, j diamond, jack dice, j dice",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q_diamond",
    name: "queen diamond, q diamond, queen dice, q dice",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k_diamond",
    name: "king diamond, k diamond, king dice, k dice",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let clubs = [
  {
    id: "a_clubs",
    name: "ace clubs, one clubs , 1 clubs",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2_clubs",
    name: "two clubs , 2 clubs",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3_clubs",
    name: "three clubs , 3 clubs",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4_clubs",
    name: "four clubs , 4 clubs",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5_clubs",
    name: "five clubs , 5 clubs",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6_clubs",
    name: "six clubs , 6 clubs",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7_clubs",
    name: "seven clubs , 7 clubs",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8_clubs",
    name: "eight clubs , 8 clubs",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9_clubs",
    name: "nine clubs , 9 clubs",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10_clubs",
    name: "ten clubs , 10 clubs",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j_clubs",
    name: "jack clubs, j clubs",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q_clubs",
    name: "queen clubs, q clubs",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k_clubs",
    name: "king clubs, k clubs",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let spades = [
  {
    id: "a_spades",
    name: "ace spades, one spades , 1 spades",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2_spades",
    name: "two spades , 2 spades",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3_spades",
    name: "three spades , 3 spades",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4_spades",
    name: "four spades , 4 spades",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5_spades",
    name: "five spades , 5 spades",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6_spades",
    name: "six spades , 6 spades",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7_spades",
    name: "seven spades , 7 spades",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8_spades",
    name: "eight spades , 8 spades",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9_spades",
    name: "nine spades , 9 spades",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10_spades",
    name: "ten spades , 10 spades",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j_spades",
    name: "jack spades, j spades",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q_spades",
    name: "queen spades, q spades",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k_spades",
    name: "king spades, k spades",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

let hearts = [
  {
    id: "a_hearts",
    name: "ace hearts, one hearts , 1 hearts",
    uniq: "1",
    sty: `${styles.rank_a}`,
  },
  {
    id: "2_hearts",
    name: "two hearts , 2 hearts",
    uniq: "2",
    sty: `${styles.rank_2}`,
  },
  {
    id: "3_hearts",
    name: "three hearts , 3 hearts",
    uniq: "3",
    sty: `${styles.rank_3}`,
  },
  {
    id: "4_hearts",
    name: "four hearts , 4 hearts",
    uniq: "4",
    sty: `${styles.rank_4}`,
  },
  {
    id: "5_hearts",
    name: "five hearts , 5 hearts",
    uniq: "5",
    sty: `${styles.rank_5}`,
  },
  {
    id: "6_hearts",
    name: "six hearts , 6 hearts",
    uniq: "6",
    sty: `${styles.rank_6}`,
  },
  {
    id: "7_hearts",
    name: "seven hearts , 7 hearts",
    uniq: "7",
    sty: `${styles.rank_7}`,
  },
  {
    id: "8_hearts",
    name: "eight hearts , 8 hearts",
    uniq: "8",
    sty: `${styles.rank_8}`,
  },
  {
    id: "9_hearts",
    name: "nine hearts , 9 hearts",
    uniq: "9",
    sty: `${styles.rank_9}`,
  },
  {
    id: "10_hearts",
    name: "ten hearts , 10 hearts",
    uniq: "10",
    sty: `${styles.rank_10}`,
  },
  {
    id: "j_hearts",
    name: "jack hearts, j hearts",
    uniq: "J",
    sty: `${styles.rank_j}`,
  },
  {
    id: "q_hearts",
    name: "queen hearts, q hearts",
    uniq: "Q",
    sty: `${styles.rank_q}`,
  },
  {
    id: "k_hearts",
    name: "king hearts, k hearts",
    uniq: "K",
    sty: `${styles.rank_k}`,
  },
];

export { diamonds, clubs, spades, hearts };
