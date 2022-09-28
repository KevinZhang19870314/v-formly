class TextMeta {
  constructor(state, id) {
    this.state = state;
    this.id = id;
    state.context.addContext(id, this);
  }
}

export { TextMeta };
