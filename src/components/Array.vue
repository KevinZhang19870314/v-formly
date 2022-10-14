<!-- 创建对象数组 -->
<template>
  <a-form-model-item :class="{ 'ant-form-item-with-help': error }">
    <a-col class="ant-form-item-label" v-if="meta.title" :span="ui.spanLabel">
      <label :class="{ 'ant-form-item-required': ui.showRequired }">
        {{ meta.title }}
        <span class="v__optional">
          {{ ui.optional }}
          <a-tooltip
            v-if="oh"
            :title="oh.text"
            :placement="oh.placement"
            :trigger="oh.trigger"
            :overlayStyle="oh.overlayStyle"
            :overlayClassName="oh.overlayClassName"
            :mouseEnterDelay="oh.mouseEnterDelay"
            :mouseLeaveDelay="oh.mouseLeaveDelay"
          >
            <a-icon :type="oh.icon" />
          </a-tooltip>
        </span>
      </label>
      <div class="v__array-add">
        <a-button
          :type="ui.addType || 'dashed'"
          :disabled="addDisabled"
          @click="addItem"
          v-html="ui.addTitle || '添加'"
        >
        </a-button>
      </div>
    </a-col>
    <a-col
      class="ant-form-item-control-wrapper"
      :span="ui.spanControl"
      :offset="ui.offsetControl"
    >
      <div class="ant-form-item-control">
        <a-row class="v__array-container">
          <template v-for="(p, i) of context.ids">
            <a-col :span="arraySpan" class="v__array-item" :key="p.key">
              <a-card>
                <v-formly-item
                  :id="getSubItemsKey(i)"
                  :meta="meta.items"
                ></v-formly-item>
                <span
                  v-if="showRemove"
                  class="v__array-remove"
                  @click="removeItem(i)"
                >
                  <a-icon type="delete"></a-icon>
                </span>
              </a-card>
            </a-col>
          </template>
        </a-row>
        <!-- 属性目的性解释 -->
        <div
          v-if="meta.description"
          v-html="meta.description"
          :class="{
            'ant-form-item-label': context.ids.length === 0,
            'ant-form-extra': context.ids.length > 0,
          }"
        ></div>
        <!-- 数组错误 -->
        <div :class="{ 'has-error': error }">
          <div
            v-if="error"
            class="ant-form-explain"
            :class="{
              'ant-form-item-label': context.ids.length === 0,
            }"
          >
            {{ error }}
          </div>
        </div>
      </div>
    </a-col>
  </a-form-model-item>
</template>
<script>
import Vue from "vue";
import { FORM_ERROR_CHANGE } from "@/utils/consts.js";
import VFormlyItem from "@/FormlyItem.vue";
import { ArrayMeta } from "../meta/array.meta";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-array",
  components: { VFormlyItem },
  mixins: [componentMixin],
  data() {
    return {
      arraySpan: 8,
      context: new ArrayMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    oh() {
      return Object.assign({}, this.state.ui, this.meta.ui).optionalHelp;
    },
    error: {
      get() {
        return this.context.error;
      },
      set(val) {
        this.context.error = val;
      },
    },
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || [];
      },
    },
    disabled() {
      return this.meta.readOnly;
    },
    addDisabled() {
      return (
        this.disabled ||
        (this.meta.maxItems != null &&
          this.context.ids.length >= this.meta.maxItems)
      );
    },
    showRemove() {
      if (
        this.disabled ||
        (this.meta.minItems != null &&
          this.context.ids.length <= this.meta.minItems)
      ) {
        return false;
      }
      return true;
    },
  },
  created() {
    Vue.bus.on(
      `${FORM_ERROR_CHANGE}-${this.state._formId}`,
      this.formErrorChangeCallback
    );
    const { grid, removable, removeTitle } = this.ui;
    if (grid && grid.arraySpan) {
      this.arraySpan = grid.arraySpan;
    }

    this.removeTitle = removable === false ? null : removeTitle;
  },
  beforeDestroy() {
    Vue.bus.off(
      `${FORM_ERROR_CHANGE}-${this.state._formId}`,
      this.formErrorChangeCallback
    );
  },
  methods: {
    formErrorChangeCallback(err) {
      if (err.id === this.id) {
        this.error = err.error ? err.error.message : undefined;
      }
    },
    // 生成 itmes properties 的 id
    getSubItemsKey(i) {
      return `${this.id}/${i}`;
    },
    addItem() {
      const id = this.context.add();
      if (this.ui.add) this.ui.add(id);
    },
    removeItem(i) {
      this.context.remove(i);
      if (this.ui.remove) this.ui.remove(i);
    },
  },
};
</script>
<style lang="less"></style>
