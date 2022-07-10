export default {
  template: `
  <input v-model="filterBy.text" @input="searchByText" type="search" placeholder="Search">

`,
  props: [],
  data() {
    return {
      filterBy: {
        text: '',
        value: '',
      },
    };
  },
  created() {},
  methods: {
    searchByText() {
      console.log(this.filterBy);
      this.$store.commit({ type: 'filterBy', filter: this.filterBy });
    },
  },
  computed: {},
  unmounted() {},
  components: {},
};
