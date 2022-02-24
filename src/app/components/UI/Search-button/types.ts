import React from 'react';

export type SearchButtonPros = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled: boolean;
};
