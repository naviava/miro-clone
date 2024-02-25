"use client";

import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";

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
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
}
