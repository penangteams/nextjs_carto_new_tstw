/** @format */
"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import Link from "next/link";
import { c_data } from "./clientdata";
import { useSearchStore } from "@/contexts/store";

export const TableUsers = () => {
  const search = useSearchStore((state) => state.searchTerm);
  const filteredList = c_data.filter(
    (item) =>
      item.verdict.toLowerCase().includes(search.toLowerCase()) ||
      item.username.toLowerCase().includes(search.toLowerCase()) ||
      item.place.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
      item.amount.toString().toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Table>
        <TableCaption>A list of your recent cartomancy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>Short description of the question</TableHead>
            <TableHead className="">Verdict</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Card pack</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredList.length === 0 ? (
            <div>No data</div>
          ) : (
            filteredList.map((el, index) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{el.username}</TableCell>
                  <TableCell>{el.age}</TableCell>
                  <TableCell>{el.place}</TableCell>
                  <TableCell>{el.description}</TableCell>
                  <TableCell>{el.verdict}</TableCell>
                  <TableCell className="text-right">$ {el.amount}</TableCell>
                  <TableCell className="text-right">
                    <Link
                      href="/"
                      className="inline-block px-2 py-2 mx-auto text-white bg-pink-600 rounded-full hover:bg-pink-700 md:mx-0 text-xs text-center"
                    >
                      Check
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </>
  );
};
