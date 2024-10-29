"use client";

import { type Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { IStudent } from "@/types/db";
import { useState } from "react";
import StudentModal from "./student-modal";
interface StudentTableToolbarActionsProps {
  table: Table<IStudent>;
  isLoading: boolean
}

export function StudentTableToolbarActions({
}: StudentTableToolbarActionsProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => setIsOpen(true)}
      >
        New Student
      </Button>
      <StudentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div >
  );
}
