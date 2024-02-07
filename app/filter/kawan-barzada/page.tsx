import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";
import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/Table";
import { UserNav } from "@/components/data-table/user-nav";
import { taskSchema } from "@/data/schema";

export const metadata: Metadata = {
  title: "KawanBarzada - Barzadata Data Management System",
  description: "Pencarian mendetail teman-teman Barzada31 di seluruh dunia",
};

async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "/data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function KawanBarzadaPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className=" flex h-full flex-1 flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
