"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "@/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
// import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
    cell: ({ row }) => <div className="flex">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("nama")}</div>;
    },
  },
  {
    accessorKey: "universitas",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Universitas" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("universitas")}</div>;
    },
  },
  {
    accessorKey: "jenjang",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jenjang" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("jenjang")}</div>;
    },
  },
  {
    accessorKey: "jurusan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jurusan" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("jurusan")}</div>;
    },
  },
  {
    accessorKey: "kota",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kota" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("kota")}</div>;
    },
  },
  {
    accessorKey: "jalurPenerimaan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jalur Penerimaan" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("jalurPenerimaan")}</div>;
    },
  },
  {
    accessorKey: "tahunMasuk",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tahun Masuk" />
    ),
    cell: ({ row }) => {
      return <div className="flex">{row.getValue("tahunMasuk")}</div>;
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
