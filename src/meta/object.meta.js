class ObjectMeta {
    constructor(meta) {
        this.meta = meta;
        this.type = meta.type;
        this.properties = meta.properties || {};
        this.propertiesKey = Object.keys(meta.properties || {});
    }

    buildChildMeta() {
        
    }
}

export { ObjectMeta }