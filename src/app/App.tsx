import { AppProvider } from "./providers/AppProvider";
import { RouterProvider } from "./providers/RouterProvider";

/**
 * Componente raiz da aplicação
 */
function App() {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
}

export default App;
