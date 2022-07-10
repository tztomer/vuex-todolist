import todoPreview from './todo-preview.cmp.js';

export default {
  template: `
        <section class="todo-list">
            <ul>
                <li v-for="todo in todos" :key="todo._id" class="todo-container">
                  <div class="todos">
                    <input type="checkbox" :checked="todo.isDone ? true: false" @change="setChekbox(todo)">
               
                      <todo-preview :todo="todo"/>  
                  </div>
                    <div class="actions">
                 
                      <router-link :to="'/todo/details/'+todo._id">Details</router-link>

                      <router-link :to="'/todo/edit/'+todo._id" >Edit</router-link>
                      <button @click="removeTodo(todo)">X</button>
                    </div>    
              </li>  
          </ul>
        </section>
    `,
  props: ['todos'],
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    removeTodo(todo) {
      this.$store.commit({ type: 'removeTodo', todo });
    },
    setChekbox(todo) {
      console.log(todo);
      this.$store.commit({ type: 'setChekbox', todo });
    },
  },
  components: {
    todoPreview,
  },
};
