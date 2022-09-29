export const componentMixin = {
    inject: ["state"],
    props: {
        id: String,
        meta: {
            type: Object,
            default: () => { },
        },
    },
    computed: {
        ui: function () {
            // return Object.assign({}, this.state.ui, this.meta.ui);
            return this.context.ui;
        },
        schema: function () {
            // return this.meta || {};
            return this.context.schema;
        },
    },
    methods: {
        /**
         * 初始化时设置schema中的default默认值，如果formly中的
         * v-model传入了初始值，则覆盖default值
         */
        applyInitValue() {
            const props = this.id.split("/").filter((f) => f);
            let curVal = "";
            props.reduce((acc, key, idx) => {
                if (idx === props.length - 1) {
                    curVal = acc[key];
                }

                return acc[key] || {};
            }, this.state.formData);

            const type = (this.meta.ui && this.meta.ui.component) || this.meta.type;
            switch (type) {
                case 'boolean':
                    if (typeof curVal === 'boolean') {
                        this.value = curVal;
                    } else if (typeof this.meta.default === 'boolean') {
                        this.value = this.meta.default;
                    }
                    break;
                case 'time':
                    if (curVal) {
                        this.value = curVal;
                    } else if (this.meta.default) {
                        this.value = this.meta.default;
                    } else if (this.meta.ui && this.meta.ui.value) {
                        this.value = this.meta.ui.value;
                    }
                    break;

                default:
                    if (curVal) {
                        this.value = curVal;
                    } else if (this.meta.default) {
                        this.value = this.meta.default;
                    }
                    break;
            }
        }
    },
}