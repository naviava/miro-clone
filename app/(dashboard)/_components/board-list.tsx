"use client";

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
    return <div>Try searching for something else</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorites</div>;
  }

  if (!data?.length) {
    return <div>No boards found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
}
