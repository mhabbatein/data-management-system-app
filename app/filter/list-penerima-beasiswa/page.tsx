import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/Table";
import { UserNav } from "@/components/data-table/user-nav";
import { studentSchema } from "@/data/schema";

export const metadata: Metadata = {
  title: "List Penerima Beasiswa - Barzadata Data Management System",
  description:
    "List penerima beasiswa dari teman-teman Barzada31 di seluruh dunia",
};

// Simulate a database read for tasks.
async function getData() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/data/students.json"),
  );

  const students = JSON.parse(data.toString());

  return z.array(studentSchema).parse(students);
}

export default async function ListPenerimaBeasiswaPage() {
  const students = await getData();

  return (
    <>
      <div className=" flex h-full flex-1 flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              KawanBarzada<sup className="ml-1 text-xs">31</sup>
            </h2>
            <p className="text-muted-foreground">
              Pencarian mendetail teman-teman Barzada31 di seluruh dunia
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={students} columns={columns} />
      </div>
    </>
  );
}
