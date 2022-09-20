// let map = {};

class FormItemContext {
    constructor() {
        this._map = {};
    }

    addContext(id, instance) {
        this._map[id] = instance;
    }

    getContext(id) {
        return this._map[id];
    }
}

export { FormItemContext };