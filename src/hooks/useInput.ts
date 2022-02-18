import { useState } from 'react';
type useInputProps = string;
export const useInput = (value: useInputProps) => {
  const [data, setData] = useState<string>(value);

  return [data, setData];
};
