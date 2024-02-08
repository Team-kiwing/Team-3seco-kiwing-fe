const storage = window.localStorage;

export const getItem = <T>(key: string, defaultValue: T) => {
  try {
    const storagedValue = storage.getItem(key);
    if (storagedValue) {
      return JSON.parse(storagedValue);
    }
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const setItem = <T>(key: string, value: T) => {
  const storagedValue = storage.setItem(key, JSON.stringify(value));

  return storagedValue;
};

export const removeItem = (key: string) => {
  storage.removeItem(key);
};
