import Vue from 'vue';

export default Vue.extend({
  template: `
        <el-button type="danger" @click="triggerDelete">Remove</el-button>
    `,
  methods: {
    triggerDelete() {
      this.params.context.parentComponent.removeByCode(this.params.node.data.code);
    },
  },
});
