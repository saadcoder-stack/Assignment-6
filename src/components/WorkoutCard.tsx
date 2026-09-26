import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c] transition hover:-translate-y-1 hover:border-[#baff00]"
    >
      {/* Image */}
      <div className="h-[220px] overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#baff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-black uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-400">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292c32]" />

        {/* Info */}
        <div className="flex items-center justify-between gap-3 text-sm text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>● {workout.caloriesBurned} kcal</span>
          <span>☆ {workout.rating}</span>
        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;