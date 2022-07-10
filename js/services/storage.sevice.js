export const storageService = {
  save,
  load,
};

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

function load(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}
