"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

interface IProps {}

export function NewButton({}: IProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="flex h-full w-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
}
