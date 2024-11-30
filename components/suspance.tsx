"use client";

import { Suspense } from "react";
import { DataGrid } from "@/components/data-grid";
import { DateFilter } from "@/components/date-filter";
import { AccountFilter } from "@/components/account-filter";

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataGrid />
      <DateFilter />
      <AccountFilter />
    </Suspense>
  );
}
