import React from 'react';

export interface GitRepoCardProps {
  title: string;
  orgName: string;
  rating: number;
  date: string;
  imageUrl?: string | undefined;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
