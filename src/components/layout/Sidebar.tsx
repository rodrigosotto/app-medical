export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/patients"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Pacientes
            </a>
          </li>
          <li>
            <a
              href="/appointments"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Consultas
            </a>
          </li>
          <li>
            <a
              href="/users"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Usuários
            </a>
          </li>
          <li>
            <a
              href="/settings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Configurações
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
