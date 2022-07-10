export default {
  template: `
        <div class="filter-container">
        <div class="items-left">{{itemsLeft}} items left</div>
        <div class="filter-inner-middle">

          <button @click="displayFilter" value="all" class="all filter">All</button>
  
          <button @click="displayFilter" value="active"  class="active filter">Active</button>
  
          <button @click="displayFilter" value="completed" class="completed filter">Completed</button>
        </div>
        <button class="clear filter">Clear Completed</button>
       
</div>
    `,
  data() {
    return {
      message: 'hello from filter',
      filterBy: {
        text: '',
        value: '',
      },
      items: '',
    };
  },
  computed: {
    itemsLeft() {
      console.log(this.$store.getters.itemsLeft);
      return this.$store.getters.itemsLeft;
    },
  },
  created() {},
  methods: {
    displayFilter($event) {
      let value = $event.target._value;
      this.filterBy.value = value;
      console.log(this.filterBy);
      this.$store.commit({ type: 'filterBy', filter: this.filterBy });
    },
  },
};
