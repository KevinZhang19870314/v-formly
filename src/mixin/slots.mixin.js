export const slotsMixin = {
    data() {
        return {
            slotsName: [],
            slotNameStartWith: "slotName"   // slot name 必须以“slotName”开头，否则搜索不到
        };
    },
    created() {
        this.getSlotsNameFromMeta(this.meta || this.schema);
    },
    methods: {
        getSlotsNameFromMeta(meta) {
            switch (meta.type) {
                case "object":
                    Object.keys(meta.properties).forEach((key) => {
                        const curMeta = meta.properties[key];
                        this.getSlotsNameFromMeta(curMeta);
                    });

                    break;
                case "array":
                    Object.keys(meta.items.properties).forEach((key) => {
                        const curMeta = meta.items.properties[key];
                        this.getSlotsNameFromMeta(curMeta);
                    });

                    break;
                default:
                    if (meta.ui) {
                        const keys = Object.keys(meta.ui).filter(f => f.startsWith(this.slotNameStartWith));
                        if (keys && keys.length > 0) {
                            keys.forEach(key => {
                                this.slotsName.push(meta.ui[key]);
                            });
                        }
                    }
                    break;
            }
        },
    },
}