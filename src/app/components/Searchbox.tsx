/** @format */

"use client";
import { useSearchStore } from "@/contexts/store";

export const Searchbox = () => {
  const search = useSearchStore((state) => state.searchTerm);
  const setSearch = useSearchStore((state) => state.setSearchTerm);

  const inputChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="md:w-96 w-1/2 px-2">
        <input
          className="border-2 border-gray-300 bg-yellow-100 h-10 px-2 pr-2 rounded-lg 
          text-sm focus:outline-none dark:bg-yellow-100 dark:text-black focus:text-black dark:focus:text-black"
          type="search"
          name="search"
          placeholder="Search"
          //  possible like this also
          //   onChange={(e) => {
          //     setSearchVal(e.target.value);
          //     setSearch(e.target.value);
          //   }}
          onChange={(e) => inputChangedHandler(e)}
        />
      </div>
    </>
  );
};
