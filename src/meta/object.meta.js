class ObjectMeta {
    constructor(context, id, meta) {
        this.id = id;
        this.meta = meta;
        this.childMetaPairs = buildChildMetaPairs(id, meta);

        context.addContext(id, this);
    }
}

/**
 * 构造结构数据给Object循环使用
 * @param {String} id 每个组件实例的唯一id，构造成json-schema中的`instancePath + params.missingProperty`
 * @param {Object} meta json-schema的某个层级的schema
 * @returns 返回构造后的数据给Object使用
 */
function buildChildMetaPairs(id, meta) {
    let results = [];
    for (let [key, value] of Object.entries(meta.properties || {})) {
        const idStartWithSlash = id && `${id}`.indexOf('/') === 0 ? id : `/${id}`;
        let keyVal = id === 'root' ? key : `${idStartWithSlash}/${key}`;
        results.push({ key: keyVal, meta: value });
    }

    return results;
}

export { ObjectMeta }