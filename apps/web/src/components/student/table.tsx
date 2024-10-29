

import { useMemo } from "react";
import { DataTable } from "@/components/data-table/data-table";
import { useDataTable } from "@/hooks/use-data-table";
import type { DataTableFilterField } from "@/types/data-table";

import { getColumns } from "./table-columns";
import { StudentTableToolbarActions } from "./table-toolbar-actions";
import { ICourse, IStudent, } from "@/types/db";
import { DataTableToolbar } from "@/components/data-table/data-table-toolbar";
import { useFetchData } from "@/hooks/use-query";
import { KY } from "@/lib/constant";
import useCustomSearchParams from "@/hooks/use-table-searchparam";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { Res } from "@/types/res";



const sampleCourse: ICourse = {
  courseCode: "MATH!@",
  courseName: "Math",
  createdAt: new Date("2023-01-15"),
  updatedAt: new Date("2023-01-15"),


}
const students: IStudent[] = [
  {
    _id: "123",
    name: "Alice Johnson",
    age: 22,
    phoneNumber: "1234567890",
    email: "alice.johnson@example.com",
    course: sampleCourse,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),

  },
  {
    _id: "124",
    name: "Bob Smith",
    age: 30,
    phoneNumber: "2345678901",
    email: "bob.smith@example.com",
    course: sampleCourse,
    updatedAt: new Date("2023-01-15"),

    createdAt: new Date("2023-02-10"),
  },
  {
    _id: "125",
    name: "Catherine Lee",
    age: 27,
    phoneNumber: "3456789012",
    email: "catherine.lee@example.com",
    course: sampleCourse,
    updatedAt: new Date("2023-01-15"),

    createdAt: new Date("2023-03-05"),
  },
  {
    _id: "126",
    name: "David Brown",
    age: 19,
    phoneNumber: "4567890123",
    email: "david.brown@example.com",
    course: sampleCourse,
    createdAt: new Date("2023-04-20"),
    updatedAt: new Date("2023-01-15"),

  },
  {
    _id: "127",
    name: "Emma Williams",
    age: 35,
    phoneNumber: "5678901234",
    email: "emma.williams@example.com",
    course: sampleCourse,
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-01-15"),

  }
];


export function StudentTable() {
  const { query } = useCustomSearchParams("name")
  const { isLoading, data, error, isSuccess } = useFetchData<PaginationRes<IStudent>>(
    [KY.student, query],
    `student${query}`,
  );

  const columns = useMemo(() => getColumns(), []);

  const filterFields: DataTableFilterField<IStudent>[] = [
    {
      label: "Title",
      value: "name",
      placeholder: "Search Student Name...",
    },
  ];


  const { table } = useDataTable({
    data: data?.values as IStudent[],
    columns,
    pageCount: data?.totalPages ?? 0,
    filterFields,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  });



  return (
    <div className="w-full space-y-2.5 overflow-auto bg-white p-6 shadow rounded-xl">
      {
        isLoading ?
          <DataTableSkeleton
            columnCount={3}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          /> :
          <div>
            <DataTableToolbar table={table} filterFields={filterFields} className="mb-2">
              <StudentTableToolbarActions table={table} isLoading={isLoading} />
            </DataTableToolbar>
            <DataTable
              table={table}
              isLoading={isLoading}
            />
          </div>
      }
    </div>
  );
}
