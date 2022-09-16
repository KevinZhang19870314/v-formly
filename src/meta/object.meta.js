class ObjectMeta {
    constructor(id, meta, depth) {
        this.id = id;
        this.meta = meta;
        this.depth = depth;
        this.childMetaPairs = buildChildMetaPairs(id, meta, depth);
    }
}

function buildChildMetaPairs(id, meta, depth) {
    let results = [];
    for (let [key, value] of Object.entries(meta.properties)) {
        let keyVal = id === 'root' ? key : `${id}.${key}`;
        results.push({ key: keyVal, meta: value, depth: depth + 1 });
    }

    return results;
}

export { ObjectMeta }