// Shared mutations
export const setState = (key) => (state, val) => {
  state[key] = val;
};

export const getObject = (key)  => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
}

export const setObject = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
}
