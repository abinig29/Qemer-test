"use client";

import { useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import * as React from "react";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentModal from "./student-modal";
import { DeleteModal } from "@/components/delete-modal";
import { IStudent } from "@/types/db";
import { formatDate } from "@/lib/utils";

import useMutationFunc from "@/hooks/use-mutation";
import { updateAfterDelete } from "@/lib/updateLocal";
import { KY, MTD } from "@/lib/constant";
import useCustomSearchParams from "@/hooks/use-table-searchparam";
import { useQueryClient } from "@tanstack/react-query";




export function getColumns(): ColumnDef<IStudent>[] {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" className="ml-4" />
      ),
      cell: ({ row }) => <div className=" w-40 ml-4">{row.original?.name}</div>,
      // enableSorting: false,
      // enableHiding: false,
    },
    {
      accessorKey: "age",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Age" />
      ),
      cell: ({ row }) => {
        return (

          <span className="max-w-[11.25rem] truncate font-medium">
            {row.original?.age}
          </span>
        );
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex  items-center">
            <span className="">{row?.original?.email}</span>
          </div>
        );
      },
      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone Number" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex  items-center">
            <span className="capitalize">{row?.original?.phoneNumber}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "course",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Course" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <span className="">{row?.original?.course?.courseName}</span>
          </div>
        );
      },
      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Register Date" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <span className="capitalize">{formatDate(new Date(row?.original.createdAt))}</span>
          </div>
        );
      },
      // filterFn: (row, id, value) => {
      //   return Array.isArray(value) && value.includes(row.getValue(id));
      // },
    },
    {
      id: "actions",
      cell: function Cell({ row }) {
        const [isOpen, setIsOpen] = useState(false)
        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
        const queryClient = useQueryClient()
        const { query } = useCustomSearchParams("name")
        const {
          isPending,
          mutateAsync } = useMutationFunc({
            onSuccess: () => {
              setIsDeleteModalOpen(false)
              updateAfterDelete<IStudent>(
                KY.student,
                query,
                queryClient,
                row?.original?._id
              )
            },
            onError: (data) => {
              // errorNoAction(data?.message)
            },
          });


        const onSubmit = async () => {

          try {
            await mutateAsync({
              url: `student/${row?.original?._id}`,
              method: MTD.DELETE,
            });
          } catch (e: any) {
            console.log(e.message);
          }
        };

        return (
          <>
            <StudentModal
              data={row.original}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)} />
            <DeleteModal
              onDelete={onSubmit}
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              isLoading={isPending}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open menu"
                  variant="ghost"
                  className="flex size-8 p-0 data-[state=open]:bg-muted"
                >
                  <DotsHorizontalIcon className="size-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onSelect={() => setIsOpen(true)}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={() => setIsDeleteModalOpen(true)}
                >
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];
}
