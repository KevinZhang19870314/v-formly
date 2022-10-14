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
import { deepClone } from "@/utils/utils";
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
    "meta.enum": {
      handler: "updateTags",
      immediate: true,
    },
  },
  methods: {
    handleChange(tag, checked) {
      if (tag.disabled) return;
      tag.checked = checked;
      this.updateValue();
      if (this.ui.checkedChange) this.ui.checkedChange(checked);
      if (this.ui.change) this.ui.change(this.value);
    },
    updateValue() {
      const value = this.tags.filter((t) => t.checked).map((t) => t.value);
      this.value = value.length ? value : undefined;
    },
    updateTags(val) {
      let tags = deepClone(val);
      if (tags == null || !Array.isArray(tags) || tags.length === 0) return;
      // set label
      if (typeof tags[0] !== "object") {
        tags = tags.map((item) => ({ label: item, value: item }));
      }
      // set checked
      tags.forEach((item) => {
        item.checked = (this.value || []).indexOf(item.value) > -1;
      });
      // set disabled
      tags.forEach((item) => (item.disabled = !!this.meta.readOnly));
      this.tags = tags;
    },
  },
};
</script>
<style lang="less" scoped>
.ant-tag-checkable.disabled {
  pointer-events: none;
}
</style>
