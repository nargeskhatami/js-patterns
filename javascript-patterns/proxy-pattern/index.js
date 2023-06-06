import { isValidEmail, isAllLetters } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get(target, property) {
    return `${new Date()} |  The value of ${property}} is ${Reflect.get(target, property)}`;
  },
  set(target, property, value) {
    if (property === "email") {
      if (!isValidEmail(value)) {
        throw new Error("Invalid email");
      }
    }

    if (property === "username" && (value.length < 3 || !isAllLetters(value))) {
      throw new Error("Invalid username");
    }

    if (property === "age" && (typeof value !== "number" || value < 18)) {
      throw new Error("User must be 18 or older");
    }

    return Reflect.set(target, property, value);
  },
});
