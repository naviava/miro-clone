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

  return <div>{JSON.stringify(query)}</div>;
}
