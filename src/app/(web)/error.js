"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="container mx-auto flex flex-col items-center gap-10 my-40 mt-60">
      <h1 className="text-3xl font-bold">404</h1>
      <h2>That page cannot be found!</h2>
      <div className="mt-3">
        <button onClick={() => reset()} className="btn-primary">
          Go to Home
        </button>
      </div>
    </section>
  );
}
