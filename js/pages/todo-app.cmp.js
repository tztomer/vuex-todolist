import todoList from '../cmp/todo-list.cmp.js';
import filterBy from '../cmp/todo-filter.cmp.js';
import searchCmpx from '../cmp/search.cmp.js';
export default {
  template: `
        <section class="todo-app">
          <div class="options">
            <form @submit="addNewTodo">
            <input type="text" v-model="todo.text" placeholder="What need to be done?">

            <button class="option-btn">Add</button>
            </form>
            <search-cmpx/>

          </div>  
            <todo-list :todos="todos"/>
            <filter-by/>
       </section>
    `,
  data() {
    return {
      todo: {
        text: '',
      },
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  created() {},
  methods: {
    addNewTodo() {
      this.$store.commit({ type: 'newTodo', todo: this.todo });
      this.todo.text = '';
    },
  },
  components: {
    todoList,
    filterBy,
    searchCmpx,
  },
};
