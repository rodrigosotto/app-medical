/**
 * Serviço de sessionStorage com tipagem
 */
class SessionStorageService {
  setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error saving to sessionStorage:", error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const serializedValue = sessionStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error("Error reading from sessionStorage:", error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from sessionStorage:", error);
    }
  }

  clear(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error("Error clearing sessionStorage:", error);
    }
  }

  hasItem(key: string): boolean {
    return sessionStorage.getItem(key) !== null;
  }
}

export const sessionStorageService = new SessionStorageService();
