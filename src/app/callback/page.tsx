import { notFound } from "next/navigation";

export default function Callback({ searchParams }: { searchParams: { code: string } }) {
  if (searchParams.code === undefined || searchParams.code === "") {
    notFound();
  }

  return (
    <main className="h-screen w-full grid place-items-center">
      <h1 className="text-4xl font-bold">{searchParams.code}</h1>
    </main>
  );
}
