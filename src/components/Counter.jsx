import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button class="border border-sm p-2" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button class="border border-sm p-2" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
}
