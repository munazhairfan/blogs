import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Welcome to My Blog!</h1>
        <p className="text-xl mb-6">Sharing my thoughts and experiences on web development, coding, and more.</p>
        <Link href="/about">
          <button className="px-6 py-2 bg-teal-600 text-white rounded-lg mb-4">About Me</button>
        </Link>
        <Link href="/blogs">
          <button className="px-6 py-2 bg-teal-600 text-white rounded-lg">Read My Blog</button>
        </Link>
      </div>
    </div>
  );
}
