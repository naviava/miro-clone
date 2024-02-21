"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { cn } from "~/lib/utils";
import { useCallback, useMemo } from "react";

interface IProps {
  id: string;
  name: string;
  imageUrl: string;
}

export function Item({ id, name, imageUrl }: IProps) {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = useMemo(
    () => organization?.id === id,
    [organization?.id, id],
  );

  const handleClick = useCallback(() => {
    if (!setActive) return;
    setActive({ organization: id });
  }, [setActive, id]);

  return (
    <div className="relative aspect-square">
      <Image
        fill
        src={imageUrl}
        alt={name}
        onClick={handleClick}
        className={cn(
          "cursor-pointer rounded-md opacity-75 transition hover:opacity-100",
          isActive && "opacity-100",
        )}
      />
    </div>
  );
}
