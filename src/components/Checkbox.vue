<template>
  <v-wrapper :id="id" :meta="meta">
    <template v-if="!ui.span">
      <a-checkbox-group
        class="v__checkbox"
        v-model="value"
        :options="meta.enum"
        @change="change"
      />
    </template>
    <template v-else>
      <a-checkbox-group v-model="value" @change="change" class="v__checkbox">
        <a-row>
          <a-col
            class="v__text-left"
            :span="ui.span"
            v-for="(item, index) in meta.enum"
            :key="index"
          >
            <a-checkbox
              :value="item.value || item"
              :disabled="item.disabled || false"
            >
              {{ item.label || item }}
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </template>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-checkbox",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
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
  mounted() {
    this.applyInitValue();
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
