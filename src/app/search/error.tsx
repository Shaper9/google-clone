"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center align-center pt-10">
      <h1 className="text-3xl mv-4">Something went wrong</h1>
      <button className="text-blue-500">Try again</button>
    </div>
  );
}
