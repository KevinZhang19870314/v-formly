class StringMeta {
    constructor(context, id) {
        console.log('String meta');

        context.addContext(id, this);
    }
}

export { StringMeta };