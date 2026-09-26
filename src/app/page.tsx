import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="library" className="mx-auto max-w-[1200px] px-5 py-20">
        <h2 className="text-3xl font-black text-white">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </section>
    </main>
  );
}