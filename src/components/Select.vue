<template>
  <v-wrapper :id="id" :meta="meta">
    <a-select
      v-model="value"
      :allowClear="ui.allowClear"
      :autoClearSearchValue="ui.autoClearSearchValue"
      :autoFocus="ui.autoFocus"
      :defaultActiveFirstOption="ui.defaultActiveFirstOption"
      :defaultValue="meta.defaultValue"
      :disabled="meta.readOnly"
      :dropdownClassName="ui.dropdownClassName"
      :dropdownMatchSelectWidth="ui.dropdownMatchSelectWidth"
      :dropdownRender="ui.dropdownRender"
      :dropdownStyle="ui.dropdownStyle"
      :dropdownMenuStyle="ui.dropdownMenuStyle"
      :filterOption="ui.filterOption"
      :firstActiveValue="ui.firstActiveValue"
      :getPopupContainer="ui.getPopupContainer"
      :labelInValue="ui.labelInValue"
      :loading="ui.loading"
      :maxTagCount="ui.maxTagCount"
      :maxTagPlaceholder="ui.maxTagPlaceholder"
      :maxTagTextLength="ui.maxTagTextLength"
      :mode="ui.mode"
      :notFoundContent="
        ui.slotNameOfNotFoundContent ? undefined : ui.notFoundContent
      "
      :optionFilterProp="ui.optionFilterProp"
      :optionLabelProp="ui.optionLabelProp"
      :placeholder="ui.placeholder"
      :showSearch="ui.showSearch"
      :showArrow="ui.showArrow"
      :size="ui.size"
      :suffixIcon="ui.slotNameOfSuffixIcon ? undefined : ui.suffixIcon"
      :removeIcon="ui.slotNameOfRemoveIcon ? undefined : ui.removeIcon"
      :clearIcon="ui.slotNameOfClearIcon ? undefined : ui.clearIcon"
      :menuItemSelectedIcon="
        ui.slotNameOfMenuItemSelectedIcon ? undefined : ui.menuItemSelectedIcon
      "
      :tokenSeparators="ui.tokenSeparators"
      :options="ui.options"
      @blur="blur"
      @deselect="deselect"
      @focus="focus"
      @inputKeydown="inputKeydown"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      @popupScroll="popupScroll"
      @search="search"
      @select="select"
      @dropdownVisibleChange="dropdownVisibleChange"
      @change="change"
    >
      <slot v-if="ui.slotNameOfSelectDefault" :name="ui.slotNameOfSelectDefault"></slot>
      <template v-if="ui.slotNameOfNotFoundContent" v-slot:notFoundContent>
        <slot :name="ui.slotNameOfNotFoundContent"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfRemoveIcon" v-slot:removeIcon>
        <slot :name="ui.slotNameOfRemoveIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
      <template
        v-if="ui.slotNameOfMenuItemSelectedIcon"
        v-slot:menuItemSelectedIcon
      >
        <slot :name="ui.slotNameOfMenuItemSelectedIcon"></slot>
      </template>
    </a-select>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-select",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
    };
  },
  mounted() {
    this.applyInitValue();
  },
  computed: {
    value: {
      get: function () {
        return this.context.value;
      },
      set: function (val) {
        this.context.value = val || undefined;
      },
    },
  },
  methods: {
    blur() {
      if (this.ui.blur) {
        this.ui.blur(this.value);
      }
    },
    change(value, option) {
      if (this.ui.change) {
        this.ui.change(value, option);
      }
    },
    deselect(value, option) {
      if (this.ui.deselect) {
        this.ui.deselect(value, option);
      }
    },
    focus() {
      if (this.ui.focus) {
        this.ui.focus(this.value);
      }
    },
    inputKeydown() {
      if (this.ui.inputKeydown) {
        this.ui.inputKeydown(this.value);
      }
    },
    mouseenter() {
      if (this.ui.mouseenter) {
        this.ui.mouseenter(this.value);
      }
    },
    mouseleave() {
      if (this.ui.mouseleave) {
        this.ui.mouseleave(this.value);
      }
    },
    popupScroll() {
      if (this.ui.popupScroll) {
        this.ui.popupScroll(this.value);
      }
    },
    search(value) {
      if (this.ui.search) {
        this.ui.search(value);
      }
    },
    select(value, option) {
      if (this.ui.select) {
        this.ui.select(value, option);
      }
    },
    dropdownVisibleChange(open) {
      if (this.ui.dropdownVisibleChange) {
        this.ui.dropdownVisibleChange(open);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
