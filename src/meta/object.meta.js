class ObjectMeta {
    constructor(context, id, meta, depth) {
        this.id = id;
        this.meta = meta;
        this.depth = depth;
        this.childMetaPairs = buildChildMetaPairs(id, meta, depth);

        context.add(this);
    }
}

/**
 * 构造结构数据给Object循环使用
 * @param {String} id 每个组件实例的唯一id，构造成json-schema中的`instancePath + params.missingProperty`
 * @param {Object} meta json-schema的某个层级的schema
 * @param {*} depth TODO：没有用的，后面需要删除
 * @returns 返回构造后的数据给Object使用
 */
function buildChildMetaPairs(id, meta, depth) {
    let results = [];
    for (let [key, value] of Object.entries(meta.properties)) {
        const idStartWithSlash = id && `${id}`.indexOf('/') === 0 ? id : `/${id}`;
        let keyVal = id === 'root' ? key : `${idStartWithSlash}/${key}`;
        results.push({ key: keyVal, meta: value, depth: depth + 1 });
    }

    return results;
}

export { ObjectMeta }