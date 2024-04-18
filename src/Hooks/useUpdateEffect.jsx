import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const count = useRef(0);
  useEffect(() => {
    if (count.current < 2) {
      count.current++;
      return;
    }
    return callback();
  }, dependencies);
}
