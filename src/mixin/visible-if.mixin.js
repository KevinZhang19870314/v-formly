export const visibleIfMixin = {
    methods: {
        /**
         * 根据visibleIf函数判断是否需要隐藏被触发方组件
         * @param {Object} context 全局context
         * @param {Object} meta 被触发方组件meta 
         * @param {Boolean} visible 被触发方组件当前是否可见 
         * @param {Object} change 触发方组件的change事件数据 { id: xxx, value: xxx }
         * @returns 是否隐藏
         */
        visibleIf(context, meta, visible, change) {
            if (!meta.ui || !meta.ui.visibleIf) {
                return visible;
            }

            const changeId = Object.keys(meta.ui.visibleIf)[0];
            const changeFunc = Object.values(meta.ui.visibleIf)[0];
            change = change || {};

            if (typeof changeFunc !== "function" || changeId !== change.id) {
                return visible;
            }

            return changeFunc.call(this, context, change.id, change.value);
        },
    },
}