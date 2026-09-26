# FitLog — Workout Library

FitLog is a modern workout library and daily workout planning application built with Next.js. It allows users to browse workouts, search and sort exercises, view detailed workout instructions, create a daily plan, save workouts for later, and track completed exercises.

## 🚀 Live Project

Live Link: Add your Vercel deployment link here

## 📦 GitHub Repository

GitHub: Add your GitHub repository link here

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router
* REST API
* LocalStorage

## ✨ Features

* Responsive workout library for mobile, tablet, and desktop
* Dynamic workout data fetched from the FitLog API
* Search workouts by name or muscle group
* Sort workouts by duration, calories, or rating
* Detailed workout pages with instructions and specifications
* Add workouts to today's plan
* Save workouts for later
* Maximum 5 workouts in today's plan
* Dynamic Plan and Saved counters
* Today's plan metrics for exercises, minutes, and calories
* Mark workouts as completed
* Remove workouts from the daily plan or saved list
* Toast notifications for important actions
* LocalStorage persistence
* Custom loading state
* Custom 404 page
* Responsive dark-themed UI

## 🔌 API

The application uses the FitLog workout API:

```text
https://api.abcz.workers.dev/api/fitlog
```

Workout details are fetched using:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   └── workout/
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutGrid.tsx
│   ├── WorkoutDetails.tsx
│   ├── Loading.tsx
│   └── Footer.tsx
│
├── context/
│   └── FitLogContext.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── workout.ts
```

## 💡 How It Works

### Workout Library

Users can browse all available workouts from the library. Each workout displays its muscle groups, equipment, duration, calories, and rating.

### Search & Sort

Users can search by workout name or muscle group and sort the current results by:

* Duration
* Calories
* Rating

### Today's Plan

Users can add up to five workouts to their daily plan. The plan automatically calculates:

* Total exercises
* Total workout minutes
* Total calories

### Saved Workouts

Users can save workouts for later and access them from the Saved tab on the My Plan page.

### LocalStorage

Plan and saved workout data are stored in the browser's LocalStorage so the user's selections remain available after refreshing the page.

## 📱 Responsive Design

FitLog is designed to work across:

* Mobile
* Tablet
* Desktop

## 🎯 Project Goal

The goal of FitLog is to provide a simple and focused workout-library experience where users can discover exercises, organize their daily training, and keep track of their workout progress.

## 👨‍💻 Developer

Saad Abdullah

Built with Next.js, TypeScript, React, and Tailwind CSS.

---

© 2026 FitLog — Workout Library. Train hard, log honest.
