// components

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// features hooks
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useConfirm } from "@/hooks/use-confirm";

// features components
import { AccountForm } from "@/features/accounts/components/account-form";

// features apies
import { useEditAccount } from "@/features/accounts/api/use-edit-accounts";
import { useGetAccount } from "@/features/accounts/api/use-get-account";
import { useDeleteAccount } from "@/features/accounts/api/use-delete-accounts";

// database
import { insertAccountSchema } from "@/db/models";

// third-parties
import { z } from "zod";
import { Loader2 } from "lucide-react";

// globals & Types
const fromSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof fromSchema>;

// compoent starts
export const EditAccountSheet = () => {
  const { isOpen, onClose, id } = useOpenAccount();

  const [ConfirmationDialog, confirm] = useConfirm(
    "Are you sure ?",
    "You are about to delete this tarnsection"
  );

  const accountQuery = useGetAccount(id);
  const editMutation = useEditAccount(id);
  const deleteMutation = useDeleteAccount(id);

  // constants
  const isLoading = accountQuery.isLoading;
  const isPending = editMutation.isPending || deleteMutation.isPending;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) {
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      });
    }
  };

  const defaultValues = accountQuery.data
    ? {
        name: accountQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <>
      <ConfirmationDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit Account</SheetTitle>
            <SheetDescription>Edit an existing Account</SheetDescription>
          </SheetHeader>

          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <AccountForm
              id={id}
              onSubmit={onSubmit}
              disabled={isPending}
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};
