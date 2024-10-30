import { useCountStore } from "./CountProvider";

export default function Component() {
  const count = useCountStore((state) => state.count);
  console.log("count", count);
  return <>{count}</>;
}
