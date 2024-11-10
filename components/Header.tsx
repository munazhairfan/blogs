import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:text-teal-200">
            My Blog
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-teal-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-teal-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-teal-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
