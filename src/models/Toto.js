class Toto {

  constructor(id, name, author, publicationDate, urlBiography) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._publicationDate = publicationDate;
    this._urlBiography = urlBiography;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = value;
  }

  get publicationDate() {
    return this._publicationDate;
  }
  set publicationDate(value) {
    this._publicationDate = value;
  }

  get urlBiography() {
    return this._urlBiography;
  }
  set urlBiography(value) {
    this._urlBiography = value;
  }
}

export default Toto