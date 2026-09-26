export interface Workout {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  calories: number;
  rating: number;
  instructions: string[];
}