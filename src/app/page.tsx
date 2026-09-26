import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="p-10">
      <h1 className="mb-6 text-3xl font-bold">FitLog</h1>

      <pre>{JSON.stringify(workouts, null, 2)}</pre>
    </main>
  );
}