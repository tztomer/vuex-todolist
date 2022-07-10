export default {
  template: `
        <p :class="{done: todo.isDone? true: false}">{{todo.text}}</p>
    `,
  props: ['todo'],
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
