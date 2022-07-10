import { storageService } from './storage.sevice.js';
import { utilService } from './util.sevice.js';

let gTodos;
const STORAGE_KEY = 'todoDB';

export const todoService = {
  query,
  getEmptyTodo,
  save,
  remove,
  getTodo,
};

function query() {
  gTodos = _createTodos();
  return gTodos;
}

function _createTodos() {
  let todos = storageService.load(STORAGE_KEY);
  if (!todos || !todos.length) {
    todos = [];
    todos.push(_createTodo(), _createTodo(), _createTodo());
  }

  return todos;
}

function _createTodo() {
  let todo = {
    _id: utilService.makeId(),
    text: utilService.generateString(10),
    isDone: false,
  };
  return todo;
}

function getEmptyTodo() {
  return {
    _id: utilService.makeId(),
    text: '',
    isDone: false,
  };
}

function getTodo(id) {
  const todo = gTodos.find(todo => todo._id === id);
  return todo;
}

function save(newTodo) {
  if (newTodo._id) {
    const idx = gTodos.findIndex(todo => todo._id === newTodo._id);
    gTodos[idx] = newTodo;
    storageService.save(STORAGE_KEY, gTodos);
  } else {
    newTodo._id = utilService.makeId();
    gTodos.push(newTodo);
    storageService.save(STORAGE_KEY, gTodos);
  }
}

function remove(idx) {
  gTodos.splice(idx, 1);
  storageService.save(STORAGE_KEY, gTodos);
}
