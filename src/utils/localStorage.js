export function getObjFromLocalStorage(key, defaultValue) {
  if (!localStorage) {
    console.warn('No localStorage found!');

    return;
  }

  const storedValue = localStorage.getItem(key);

  if (!storedValue && defaultValue) {
    setObjInLocalStorage(key, defaultValue);

    return defaultValue;
  }

  return JSON.parse(storedValue);
}

export function setObjInLocalStorage(key, value) {
  if (!localStorage) {
    console.warn('No localStorage found!');

    return;
  }

  return localStorage.setItem(key, JSON.stringify(value));
}
