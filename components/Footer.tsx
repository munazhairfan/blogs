export default function Footer() {
    return (
      <footer className="bg-teal-600 text-white py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Munazha Irfan. All rights reserved.</p>
          <p className="mt-2">
            <a href="https://github.com/munazha" target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">
              GitHub
            </a>
            {' '}|{' '}
            <a href="mailto:munazha@example.com" className="hover:text-teal-200">
              Email
            </a>
          </p>
        </div>
      </footer>
    );
  }
  