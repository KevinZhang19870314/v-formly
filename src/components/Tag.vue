<!-- 只支持 checkable 标签模式 -->
<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-for="tag in tags">
      <a-checkable-tag
        :class="{ disabled: tag.disabled }"
        :key="tag.value"
        :checked="tag.checked"
        @change="(checked) => handleChange(tag, checked)"
      >
        <span>{{ tag.label }}</span>
      </a-checkable-tag>
    </template>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "../meta/number.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "v-tag",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new NumberMeta(this.state, this.id, this.meta),
      tags: [],
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || undefined;
      },
    },
  },
  watch: {
    "schema.enum": {
      handler: function (val) {
        this.applyInitValue();
        this.tags = this.getEnum(
          cloneDeep(val),
          this.value,
          this.schema.readOnly
        );
      },
      immediate: true,
    },
  },
  methods: {
    handleChange(tag, checked) {
      if (tag.disabled) return;
      tag.checked = checked;
      const value = this.tags.filter((t) => t.checked).map((t) => t.value);
      this.value = value.length ? value : undefined;
      if (this.ui.checkedChange) this.ui.checkedChange(checked);
    },
    getEnum(list, formData = [], readOnly = false) {
      if (list == null || !Array.isArray(list) || list.length === 0) return [];
      // init
      if (typeof list[0] !== "object") {
        list = list.map((item) => ({ label: item, value: item }));
      }
      // formData
      if (formData) {
        if (!Array.isArray(formData)) formData = [formData];
        list.forEach((item) => {
          item.checked = formData.indexOf(item.value) > -1;
        });
      }
      // disabled
      list.forEach((item) => (item.disabled = !!readOnly));
      return list;
    },
  },
};
</script>
<style lang="less" scoped>
.ant-tag-checkable.disabled {
  pointer-events: none;
}
</style>
