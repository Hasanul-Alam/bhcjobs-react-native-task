import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

function useAsyncStorage() {
  const getValue = useCallback(async <T>(key: string): Promise<T | null> => {
    try {
      const stored = await AsyncStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }, []);

  const setValue = useCallback(
    async <T>(key: string, value: T): Promise<void> => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch {
        console.error("Failed to save value.");
      }
    },
    [],
  );

  const deleteValue = useCallback(async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch {
      console.error("Failed to delete value.");
    }
  }, []);

  return { getValue, setValue, deleteValue };
}

export default useAsyncStorage;
