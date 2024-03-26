import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Table from "@/components/table";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 py-8 flex start items-center text-center align-middle">
        <h1 className="text-3xl font-bold mb-2">Transaction</h1>
        <div className="flex items-center">
          <button className="rounded-l-md py-2 px-4 text-black border border-black border-r-0">1day</button>
          <button className="py-2 px-4 text-black border border-black">Week</button>
          <button className="py-2 px-4 text-black border border-black">Month</button>
          <button className="py-2 px-4 text-black border border-black">Year</button>
          <button className="rounded-r-md py-2 px-4 text-black border border-black border-l-0">All Data</button>
          <input type="text" className="border border-black ml-4 px-2 py-1 rounded-md" placeholder="Search..." />
          <div>
            <select className="border  ml-4 px-2 py-1 rounded-md w-36">
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
}
