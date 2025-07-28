import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-200">Welcome to UTube Clone</h1>
      <p className="mb-8 text-lg text-gray-400">Discover and watch amazing videos. Start exploring now!</p>
      <Link
        href="/video/101"
        className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow hover:bg-yellow-700 transition-colors text-lg font-semibold"
      >
        Go to video page
      </Link>
    </div>
  );
}
