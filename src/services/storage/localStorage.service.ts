/**
 * Serviço de localStorage com tipagem
 */
class LocalStorageService {
  /**
   * Salvar item no localStorage
   */
  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  /**
   * Obter item do localStorage
   */
  getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  }

  /**
   * Remover item do localStorage
   */
  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  }

  /**
   * Limpar todo o localStorage
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  }

  /**
   * Verificar se uma chave existe
   */
  hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

export const localStorageService = new LocalStorageService();
