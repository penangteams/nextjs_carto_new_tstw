/** @format */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

export const TableUsers = () => {
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
          <TableRow>
            <TableCell className="font-medium">sunny_girl</TableCell>
            <TableCell>28</TableCell>
            <TableCell>Miami</TableCell>
            <TableCell>
              Will I get to the University admission for my desired Graduate
              Program?
            </TableCell>
            <TableCell>Yes, it is on your way</TableCell>
            <TableCell className="text-right">$20.00</TableCell>
            <TableCell className="text-right">Action</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">harryboy</TableCell>
            <TableCell>33</TableCell>
            <TableCell>Dubai</TableCell>
            <TableCell>Will I marry soon with my gf?</TableCell>
            <TableCell>It will take about 6 months</TableCell>
            <TableCell className="text-right">$10.00</TableCell>
            <TableCell className="text-right">Action</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">redhair</TableCell>
            <TableCell>51</TableCell>
            <TableCell>Los Angeles</TableCell>
            <TableCell>Will I re-marry and will it do good for me?</TableCell>
            <TableCell>
              Yes you can, but do it end of the year and you will be happy
            </TableCell>
            <TableCell className="text-right">$32.00</TableCell>
            <TableCell className="text-right">Action</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
