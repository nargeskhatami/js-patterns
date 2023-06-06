let instance = null;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error(
        "Cannot instantiate more than one DBConnection"
      );
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log("DB disconnected");
  }
}

const connection = new DBConnection("mongodb://...");

export default Object.freeze(connection);
