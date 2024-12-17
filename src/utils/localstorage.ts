export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
};

export const saveState = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return err;
  }
};
