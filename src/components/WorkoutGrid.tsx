"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "@/components/WorkoutCard";
import { Workout } from "@/types/workout";

interface WorkoutGridProps {
  workouts: Workout[];
}

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("duration");

  const filteredAndSortedWorkouts = useMemo(() => {
    const filtered = workouts.filter((workout) => {
      const searchText = search.toLowerCase();

      return (
        workout.name.toLowerCase().includes(searchText) ||
        workout.muscleGroups.some((muscle) =>
          muscle.toLowerCase().includes(searchText)
        )
      );
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return a.duration - b.duration;
    });
  }, [workouts, search, sortBy]);

  return (
    <div>
      {/* Search & Sort */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search workouts..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border border-[#292c32] bg-[#15171c] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#baff00] sm:max-w-sm"
        />

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-sm text-gray-400"
          >
            Sort By
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-lg border border-[#292c32] bg-[#15171c] px-4 py-3 text-sm text-white outline-none focus:border-[#baff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Workout Grid */}
      {filteredAndSortedWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#292c32] bg-[#15171c] py-16 text-center">
          <h3 className="text-xl font-black text-white">
            NO WORKOUTS FOUND
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching with another workout name or muscle group.
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkoutGrid;