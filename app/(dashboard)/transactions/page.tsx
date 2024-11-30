"use client";


import { useState } from "react";
import { UploadButton } from "./upload-button";
import { ImportCard } from "./import-card";
import { Loader2, Plus } from "lucide-react";
import { transactions as transactionSchema } from "@/db/models";
import { columns } from "./columns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// transactions

import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useBulkDeleteTransacions } from "@/features/transactions/api/use-bulk-delete-transactions";
import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";
import { useBulkCreateTransacions } from "@/features/transactions/api/use-bulk-create-transactions";

enum VARIENTS {
  LIST = "LIST",
  IMPORT = "IMPORT",
}

const INITIAL_IMPORT_RESULT = {
  data: [],
  errors: [],
  meta: {},
};

const TransactionsPage = () => {
  const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIENTS>(VARIENTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULT);

  const onUpload = (results: typeof INITIAL_IMPORT_RESULT) => {
    setImportResults(results);
    setVariant(VARIENTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULT);
    setVariant(VARIENTS.LIST);
  };

  const newTransaction = useNewTransaction();
  const createTransections = useBulkCreateTransacions();
  const transectionsQuery = useGetTransactions();
  const deleteTransections = useBulkDeleteTransacions();
  const transections = transectionsQuery.data || [];

  const isDisabled =
    transectionsQuery.isLoading || deleteTransections.isPending;

  const onSubmitImport = async (
    values: (typeof transactionSchema.$inferInsert)[]
  ) => {
    const accountId = await confirm();

    if (!accountId) {
      return toast.error("Please select an Account to continue");
    }

    const data = values.map((value) => ({
      ...value,
      accountId: accountId as string,
    }));

    createTransections.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      },
    });
  };

  if (transectionsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-3">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full flex items-center justify-center">
              <Loader2 className="size-6 text-slate-300 animate-spin" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === VARIENTS.IMPORT) {
    return (
      <>
        <AccountDialog />
        <ImportCard
          data={importResults.data}
          onCancel={onCancelImport}
          onSubmit={onSubmitImport}
        />
      </>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-3">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Transaction History
          </CardTitle>
          <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">
            <Button
              onClick={newTransaction.onOpen}
              size="sm"
              className="w-full lg:w-auto"
            >
              <Plus className="size-4 mr-2" /> Add New
            </Button>
            <UploadButton onUpload={onUpload} />
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="payee"
            columns={columns}
            data={transections}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteTransections.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
