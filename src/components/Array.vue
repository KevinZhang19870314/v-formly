<!-- 创建对象数组 -->
<template>
  <a-form-model-item>
    <a-col class="ant-form-item-label" v-if="schema.title" :span="ui.spanLabel">
      <label :class="{ 'ant-form-item-required': ui.required }">
        {{ schema.title }}
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
          :type="addType"
          :disabled="addDisabled"
          @click="addItem"
          v-html="addTitle"
        >
        </a-button>
      </div>
    </a-col>
    <a-col
      class="ant-form-item-control-wrapper"
      :span="ui.spanControl"
      :offset="ui.offsetControl"
    >
      <div class="ant-form-item-control" :class="{ 'has-error': showError }">
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
          v-if="schema.description"
          v-html="schema.description"
          class="ant-form-extra"
        ></div>
      </div>
    </a-col>
  </a-form-model-item>
</template>
<script>
import VFormlyItem from "@/FormlyItem.vue";
import { ArrayMeta } from "../meta/array.meta";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-array",
  components: { VFormlyItem },
  mixins: [componentMixin],
  data() {
    return {
      error: "",
      addTitle: "",
      addType: "",
      arraySpan: 8,
      context: new ArrayMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    oh() {
      return Object.assign({}, this.state.ui, this.meta.ui).optionalHelp;
    },
    value: {
      get() {
        return this.context.value;
      },
      set(value) {
        this.context.value = value || [];
      },
    },
    disabled() {
      return this.schema.readOnly;
    },
    addDisabled() {
      return (
        this.disabled ||
        (this.schema.maxItems != null &&
          this.context.ids.length >= this.schema.maxItems)
      );
    },
    showRemove() {
      if (
        this.disabled ||
        (this.schema.minItems != null &&
          this.context.ids.length <= this.schema.minItems)
      ) {
        return false;
      }
      return true;
    },
    showError() {
      return !!this.error;
    },

    // TODO: layout
  },
  created() {
    const { grid, addTitle, addType, removable, removeTitle } = this.ui;
    if (grid && grid.arraySpan) {
      this.arraySpan = grid.arraySpan;
    }

    this.addTitle = addTitle;
    this.addType = addType || "dashed";
    this.removeTitle = removable === false ? null : removeTitle;
  },
  methods: {
    // 生成 itmes properties 的 id
    getSubItemsKey(i) {
      return `${this.id}/${i}`;
    },
    addItem() {
      const id = this.context.add();
      // 添加回调
      if (this.ui.add) {
        this.ui.add(id);
      }
    },
    removeItem(i) {
      this.context.remove(i);
      // 移除回调
      if (this.ui.remove) {
        this.ui.remove(i);
      }
    },
  },
};
</script>
<style lang="less"></style>
