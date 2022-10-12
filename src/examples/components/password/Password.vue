<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      v-bind="ui"
      :defaultValue="meta.defaultValue"
      :disabled="meta.readOnly"
      :maxLength="meta.maxLength"
      :type="type"
      v-model="value"
      @change="change"
    >
      <template v-slot:suffix>
        <div style="cursor: pointer" @click="toggle">
          <a-icon v-if="!eyeVisible" type="eye-invisible" />
          <a-icon v-if="eyeVisible" type="eye" />
        </div>
      </template>
    </a-input>
  </v-wrapper>
</template>
<script>
import { PasswordMeta } from "./password.meta.js";
import { componentMixin } from "@/formly.js";
export default {
  name: "v-password",
  mixins: [componentMixin],
  data() {
    return {
      context: new PasswordMeta(this.state, this.id, this.meta),
      eyeVisible: false,
      type: "password",
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
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
    toggle() {
      this.eyeVisible = !this.eyeVisible;
      this.type = this.eyeVisible ? "text" : "password";
    },
  },
};
</script>
<style lang="less" scoped></style>
