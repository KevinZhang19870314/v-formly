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
            return Object.assign({}, this.state.ui, this.meta.ui);
        },
        schema: function () {
            return this.meta || {};
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

            if (this.id === 'showMotto') {
                console.log('curVal = ', curVal);
            }

            switch (this.meta.type) {
                case 'boolean':
                    if (typeof curVal === 'boolean') {
                        this.value = curVal;
                    } else if (typeof this.meta.default === 'boolean') {
                        this.value = this.meta.default;
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