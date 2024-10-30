// Dùng để lưu trữ dữ liệu vào localStorage

import { useEffect, useState } from "react";
import { getItem, setItem } from "./localStorage";

export function usePeristedState<T>(key: string, initialValue: T) {
  //
  const [value, setvalue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [value, key]);

  return [value, setvalue] as const;
}
