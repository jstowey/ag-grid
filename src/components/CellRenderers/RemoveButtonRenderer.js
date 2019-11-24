import Vue from 'vue';

export default Vue.extend({
  template: `
        <el-button type="danger" @click="triggerDelete">Remove</el-button>
    `,
  data() {
    return {
    };
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    triggerDelete() {
      this.params.context.parentComponent.removeRow(this.params.node.rowIndex);
    },
  },
});
