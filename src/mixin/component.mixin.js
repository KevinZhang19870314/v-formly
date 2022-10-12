export const componentMixin = {
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ui() {
      return this.context.ui;
    },
  },
};
