class FormItemContext {
  constructor() {
    this._map = new Map();
  }

  addContext(id, instance) {
    this._map.set(id, instance);
  }

  removeContext(id) {
    this._map.delete(id);
  }

  getContext(id) {
    return this._map.get(id);
  }

  getContexts() {
    return this._map;
  }
}

export { FormItemContext };
