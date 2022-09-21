class FormItemContext {
  constructor() {
    this._map = {};
  }

  addContext(id, instance) {
    this._map[id] = instance;
  }

  removeContext(id) {
    delete this._map[id];
  }

  getContext(id) {
    return this._map[id];
  }
}

export { FormItemContext };
