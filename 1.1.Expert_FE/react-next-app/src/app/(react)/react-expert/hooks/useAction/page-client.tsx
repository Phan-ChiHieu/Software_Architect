"use client";

import React, { FormEvent, useRef, useState, useActionState } from "react";

// Old
export default function PageClient() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ error?: string; message?: string }>();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    //
    e.preventDefault();
    setIsLoading(true);

    if (inputRef.current === null) return;
    console.log("inputRef.current.value", inputRef.current.value);
    // const data = await saveUser(inputRef.current.value);
    setData(data);
    setIsLoading(false);
  }

  console.log("render");

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input ref={inputRef} type="firstName" name="firstName" style={{ border: "1px solid red" }} />
      <button disabled={isLoading} style={{ marginTop: ".5rem" }}>
        Submit
      </button>
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
    </form>
  );
}

//================================================================

// New

// export default function PageClient() {
//   const [data, action, isPending] = useActionState(saveUser, undefined);

//   return (
//     <form style={{ display: "flex", flexDirection: "column" }} action={action}>
//       <label htmlFor="firstName">First Name</label>
//       <input type="firstName" name="firstName" style={{ border: "1px solid red" }} />
//       <button disabled={isPending} style={{ marginTop: ".5rem" }}>
//         Submit
//       </button>
//       {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
//     </form>
//   );
// }

async function saveUser(previousState: unknown, formData: FormData) {
  const firstName = formData.get("firstName") as string;

  await wait(1000);

  if (firstName === "") {
    return { error: "Name is required" };
  }

  return { message: "User saved", fieldData: { firstName } };
}

function wait(duration: number) {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
}
