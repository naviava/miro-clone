"use client";

import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";

interface IProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: boolean;
  };
}

export function BoardList({ orgId, query }: IProps) {
  const data = []; //TODO: Change to API call

  if (!data?.length && !!query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <div>No boards found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
}
