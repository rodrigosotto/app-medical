export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Medical App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/users" className="text-gray-700 hover:text-blue-600">
                  Users
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
