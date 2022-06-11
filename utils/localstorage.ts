export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if(serializedState === null) {
        return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (err) {
      return undefined;
  }
};

export const saveState = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  }
  catch (err) {

  }
};