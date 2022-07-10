export default {
  template: `
        <section v-if="todo"  class="todo-preview">
          <div class="msg">{{msg}}</div>
          <h3>Edit Todo: {{todo.text}}</h3>
          <form @submit.prevent="updateTodo">
          <input type="text"  v-model="todo.text" >


          <button>Update Todo</button>
          </form>

        </section>
    `,
  data() {
    return {
      todo: '',
      msg: '',
    };
  },
  computed: {
    displayDetails() {},
  },
  created() {
    const { todoId } = this.$route.params;

    this.$store.commit({ type: 'getTodo', todoId });
    return (this.todo = this.$store.getters.getCurrentTodo);
  },
  methods: {
    updateTodo() {
      this.$store.commit({ type: 'updateTodo', todo: this.todo });
      this.msg = 'User updated';
      setTimeout(() => {
        this.$router.push('/');
      }, 3000);
    },
  },
};
