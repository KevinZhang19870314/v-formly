export const slotsMixin = {
    data() {
        return {
            slotsName: [],
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
                    if (meta.ui && meta.ui.slotName) {
                        this.slotsName.push(meta.ui.slotName);
                    }
                    break;
            }
        },
    },
}