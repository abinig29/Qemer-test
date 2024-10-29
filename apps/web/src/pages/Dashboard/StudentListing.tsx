import { DataTableSkeleton } from '@/components/data-table/data-table-skeleton'
import { PageHeader, PageHeaderHeading } from '@/components/page-header'
import { StudentTable } from '@/components/student/table'
import React from 'react'

const StudentListing = () => {
    return (
        <div>
            <PageHeader>
                <PageHeaderHeading>Student Management </PageHeaderHeading>
            </PageHeader>
            <React.Suspense
                fallback={
                    <DataTableSkeleton
                        columnCount={3}
                        searchableColumnCount={1}
                        filterableColumnCount={2}
                        cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
                        shrinkZero
                    />
                }
            >
                <StudentTable />
            </React.Suspense>
        </div>
    )
}

export default StudentListing