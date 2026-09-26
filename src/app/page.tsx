import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-[1200px] px-5 py-20"
      >
        <div className="mb-10">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutGrid workouts={workouts} />
      </section>
    </main>
  );
}