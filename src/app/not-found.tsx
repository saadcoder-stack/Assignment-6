export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <p className="mb-3 text-sm font-bold tracking-widest text-lime-400">
          404
        </p>

        <h1 className="mb-3 text-4xl font-bold">
          PAGE NOT FOUND
        </h1>

        <p className="mb-6 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="inline-block rounded-full bg-lime-400 px-6 py-3 font-bold text-black"
        >
          GO HOME
        </a>
      </div>
    </main>
  );
}