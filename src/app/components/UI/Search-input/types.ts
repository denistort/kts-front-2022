import React from 'react';

export interface SearchInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}
