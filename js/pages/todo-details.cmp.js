export default {
  template: `
        <section class="main-header">
            <h1>TODO DETAILS</h1>  
            <div class="you-id">Your todo id :{{displayDetails._id}}</div>
            <div class="task-text">Your current task: {{displayDetails.text}}</div>
            <div class="is-done">Task status: {{task }}</div>
           <!-- {{displayDetails}} -->
        </section>
    `,
  data() {
    return {
      user: null,
      id: '',
      task: '',
    };
  },

  created() {
    const { todoId } = this.$route.params;

    this.$store.commit({ type: 'getTodo', todoId });
    console.log('done', this.displayDetails);
    this.task = this.displayDetails.isDone ? 'Done' : 'Need to finish';
    // this.user = user
    // console.log(user);
  },
  computed: {
    displayDetails() {
      return this.$store.getters.getCurrentTodo;
    },
  },
  methods: {},
};
