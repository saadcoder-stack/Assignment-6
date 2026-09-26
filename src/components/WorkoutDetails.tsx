"use client";

import { useState } from "react";
import Link from "next/link";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const {
    plan,
    addToPlan,
    saveForLater,
    isInPlan,
    isSaved,
  } = useFitLog();

  const showMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      showMessage("Added to today's plan");
      return;
    }

    if (isInPlan(workout.id)) {
      showMessage("Already in today's plan");
      return;
    }

    showMessage("Plan is full — maximum 5 workouts");
  };

  const handleSaveForLater = () => {
    const saved = saveForLater(workout);

    if (saved) {
      showMessage("Saved for later");
      return;
    }

    showMessage("Already saved");
  };

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 py-8">
      <div className="mx-auto max-w-[1200px]">

        {/* Back */}
        <Link
          href="/"
          className="mb-6 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to workouts
        </Link>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Image */}
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full max-h-[650px] w-full rounded-xl object-cover"
            />
          </div>

          {/* Details */}
          <div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Information */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#282c33] bg-[#15181e]">

              <InfoRow
                label="EQUIPMENT"
                value={workout.equipment}
              />

              <InfoRow
                label="DIFFICULTY"
                value={workout.difficulty}
              />

              <InfoRow
                label="SETS"
                value={workout.sets}
              />

              <InfoRow
                label="REPS"
                value={workout.reps}
              />

              <InfoRow
                label="DURATION"
                value={`${workout.duration} min`}
              />

              <InfoRow
                label="CALORIES"
                value={`${workout.caloriesBurned} kcal`}
              />

              <InfoRow
                label="RATING"
                value={workout.rating}
                last
              />

            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-gray-400"
                  >
                    <span className="font-bold text-[#baff00]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">

              {/* Add To Plan */}
              <button
                onClick={handleAddToPlan}
                disabled={isInPlan(workout.id) || plan.length >= 5}
                className="rounded-md bg-[#baff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#caff32] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isInPlan(workout.id)
                  ? "✓ Already in today's plan"
                  : plan.length >= 5
                    ? "Plan Full (5/5)"
                    : "✓ Add to today's plan"}
              </button>

              {/* Save For Later */}
              <button
                onClick={handleSaveForLater}
                className="rounded-md border border-[#343943] px-5 py-3 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
              >
                {isSaved(workout.id)
                  ? "✓ Saved"
                  : "♧ Save for later"}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-[#343943] bg-[#181b21] px-5 py-3 text-sm text-white shadow-xl">
          <span className="mr-2 text-[#baff00]">✓</span>
          {toastMessage}
        </div>
      )}
    </main>
  );
};

interface InfoRowProps {
  label: string;
  value: string | number;
  last?: boolean;
}

const InfoRow = ({
  label,
  value,
  last = false,
}: InfoRowProps) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 ${
        !last ? "border-b border-[#242831]" : ""
      }`}
    >
      <span className="text-[9px] font-medium tracking-wide text-gray-400">
        {label}
      </span>

      <span className="text-[11px] text-gray-200">
        {value}
      </span>
    </div>
  );
};

export default WorkoutDetails;