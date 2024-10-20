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
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Booked</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Agent Daniel has booked it</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>{" "}
            <TableCell>Agent Daniel has booked it</TableCell>
            <TableCell className="text-right">$50.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Agent Daniel has booked it</TableCell>
            <TableCell className="text-right">$66500000000.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
