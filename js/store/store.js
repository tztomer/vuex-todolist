import { todoService } from '../services/todo.service.js';
import { userService } from '../services/user.service.js';

export const store = Vuex.createStore({
  strict: true,
  state() {
    return {
      todos: todoService.query(),
      user: userService.query(),
      filterBy: {
        text: '',
        value: '',
      },
      todo: '',
    };
  },
  mutations: {
    newTodo(state, { todo }) {
      console.log('todo from state', todo.text);
      const newTodo = todoService.getEmptyTodo();
      newTodo.text = todo.text;

      console.log('new todo', newTodo);
      todoService.save(newTodo);
      state.todos.unshift(newTodo);
    },

    updateTodo(state, { todo }) {
      todoService.save(todo);
      const idx = state.todos.findIndex(currTodo => currTodo._id === todo._id);
      state.todos[idx] = todo;
    },

    getTodo(state, { todoId }) {
      console.log('todoid', todoId);
      let getTodo = todoService.getTodo(todoId);
      state.todo = getTodo;
      console.log('todo', state.todo);
    },

    setChekbox(state, { todo }) {
      const idx = state.todos.findIndex(currTodo => currTodo._id === todo._id);
      state.todos[idx].isDone = !state.todos[idx].isDone;

      todoService.save(state.todos[idx]);
    },
    removeTodo(state, { todo }) {
      let idx = state.todos.findIndex(cTodo => cTodo._id === todo._id);
      state.todos.splice(idx, 1);
      todoService.remove(idx);
    },
    filterBy(state, { filter }) {
      console.log('payload', filter);
      const newFilter = JSON.parse(JSON.stringify(filter));
      console.log('newFilter', newFilter);
      state.filterBy = newFilter;
      console.log('filty', state.filterBy);
    },
  },
  getters: {
    getCurrentTodo(state) {
      const todo = JSON.parse(JSON.stringify(state.todo));
      return todo;
    },
    itemsLeft(state) {
      const todos = JSON.parse(JSON.stringify(state.todos));
      const items = todos.filter(todo => todo.isDone === false);
      return items.length;
    },
    getTodos(state) {
      const todos = JSON.parse(JSON.stringify(state.todos));
      const filterBy = JSON.parse(JSON.stringify(state.filterBy));

      if (filterBy.text) {
        console.log('im in text');
        const regex = new RegExp(filterBy.text, 'i');
        const searchByText = todos.filter(todo => regex.test(todo.text));
        return searchByText;
      }
      if (filterBy.value === 'all' || !filterBy.value) return todos;
      else if (filterBy.value === 'active') {
        const filterActive = todos.filter(todo => !todo.isDone);
        return filterActive;
      } else if (filterBy.value === 'completed') {
        const filterCompleted = todos.filter(todo => todo.isDone);
        return filterCompleted;
      } else if (filterBy.value === 'complete') {
        console.log('im here');
        const indexes = todos.map((todo, idx) => (todo.isDone ? idx : '')).filter(String);
        console.log('indexes', indexes);
        if (indexes.length === 0) return todos;
        return todoService.remove(indexes);

        // return todos;
      }
      // return todos;
    },
  },
});
