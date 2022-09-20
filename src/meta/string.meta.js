class StringMeta {
    constructor(context, id) {
        console.log('String meta');
        context.addContext(id, this);

        this._value = undefined;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }
}

export { StringMeta };