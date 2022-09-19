let map = {};

class FormItemContext {
    constructor() {
        map = {};
    }

    addContext(id, instance) {
        map[id] = instance;
    }

    getContext(id) {
        return this.map[id];
    }
}

export { FormItemContext };