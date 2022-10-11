<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="ui.character">
      <a-rate
        :id="ui.id"
        :disabled="meta.readOnly"
        :allowClear="allowClear"
        :allowHalf="!!ui.allowHalf"
        :tooltips="ui.tooltips || []"
        :count="meta.maximum || 5"
        :character="ui.character"
        v-model="value"
        @change="change"
        @hoverChange="hoverChange"
      />
    </template>
    <template v-else>
      <a-rate
        :id="ui.id"
        :disabled="meta.readOnly"
        :allowClear="allowClear"
        :allowHalf="!!ui.allowHalf"
        :tooltips="ui.tooltips || []"
        :count="meta.maximum || 5"
        v-model="value"
        @change="change"
        @hoverChange="hoverChange"
      >
        <template v-if="ui.slotNameOfCharacter" slot="character">
          <slot :name="ui.slotNameOfCharacter"></slot>
        </template>
      </a-rate>
    </template>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "../meta/number.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-rate",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new NumberMeta(this.state, this.id, this.meta),
      allowClear: true,
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
  created() {
    const { allowClear } = this.ui;
    this.allowClear = typeof allowClear == 'undefined' ? true : !!allowClear;
  },
  mounted() {
    this.applyInitValue();
  },
  methods: {
    change(value) {
      if (this.ui.change) this.ui.change(value);
    },
    hoverChange(value) {
      if (this.ui.hoverChange) this.ui.hoverChange(value);
    },
  },
};
</script>
<style lang="less" scoped></style>
