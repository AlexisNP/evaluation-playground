class Author {

    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
