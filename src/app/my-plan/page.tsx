"use client";

import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";
import WorkoutCard from "@/components/WorkoutCard";
import { useState } from "react";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);
  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleDone = (id: number) => {
    setDoneWorkouts((current) => {
      if (current.includes(id)) {
        return current.filter((workoutId) => workoutId !== id);
      }

      return [...current, id];
    });

    showToast("Workout marked as done");
  };

  const handleRemovePlan = (id: number) => {
    removeFromPlan(id);
    showToast("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id: number) => {
    removeFromSaved(id);
    showToast("Workout removed from saved");
  };

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 py-10">
      <div className="mx-auto max-w-[1200px]">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-black uppercase text-white md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <MetricCard
            label="EXERCISES"
            value={plan.length}
          />

          <MetricCard
            label="MINUTES"
            value={totalMinutes}
          />

          <MetricCard
            label="CALORIES"
            value={totalCalories}
          />

        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-3 border-b border-[#292c32] pb-3">

          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2 text-xs font-bold transition ${
              activeTab === "plan"
                ? "bg-[#baff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2 text-xs font-bold transition ${
              activeTab === "saved"
                ? "bg-[#baff00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Loading text */}
        {false && (
          <p className="py-10 text-center text-sm text-gray-400">
            Loading workouts...
          </p>
        )}

        {/* Empty State */}
        {currentWorkouts.length === 0 ? (
          <div className="py-20 text-center">

            <h2 className="text-2xl font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-6 inline-block rounded-md bg-[#baff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#caff32]"
            >
              GO TO WORKOUTS
            </Link>

          </div>
        ) : (
          /* Workout Cards */
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {currentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c]"
              >
                <WorkoutCard workout={workout} />

                {activeTab === "plan" ? (
                  <div className="flex gap-2 border-t border-[#292c32] p-4">

                    <Link
                      href={`/workout/${workout.id}`}
                      className="flex-1 rounded-md border border-[#343943] px-3 py-2 text-center text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleDone(workout.id)}
                      className={`rounded-md px-3 py-2 text-xs font-bold transition ${
                        doneWorkouts.includes(workout.id)
                          ? "bg-[#baff00] text-black"
                          : "border border-[#343943] text-gray-300 hover:text-white"
                      }`}
                    >
                      {doneWorkouts.includes(workout.id)
                        ? "✓ Done"
                        : "Mark as Done"}
                    </button>

                    <button
                      onClick={() => handleRemovePlan(workout.id)}
                      className="rounded-md border border-[#343943] px-3 py-2 text-xs text-gray-400 transition hover:border-red-400 hover:text-red-400"
                      aria-label={`Remove ${workout.name}`}
                    >
                      ✕
                    </button>

                  </div>
                ) : (
                  <div className="flex gap-2 border-t border-[#292c32] p-4">

                    <Link
                      href={`/workout/${workout.id}`}
                      className="flex-1 rounded-md border border-[#343943] px-3 py-2 text-center text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleRemoveSaved(workout.id)}
                      className="rounded-md border border-[#343943] px-3 py-2 text-xs text-gray-400 transition hover:border-red-400 hover:text-red-400"
                    >
                      ✕
                    </button>

                  </div>
                )}
              </div>
            ))}

          </div>
        )}

      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-[#343943] bg-[#181b21] px-5 py-3 text-sm text-white shadow-xl">
          <span className="mr-2 text-[#baff00]">✓</span>
          {toast}
        </div>
      )}
    </main>
  );
}

interface MetricCardProps {
  label: string;
  value: number;
}

const MetricCard = ({ label, value }: MetricCardProps) => {
  return (
    <div className="rounded-xl border border-[#292c32] bg-[#15171c] p-5">
      <p className="text-[10px] font-bold tracking-widest text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black text-white">
        {value}
      </p>
    </div>
  );
};