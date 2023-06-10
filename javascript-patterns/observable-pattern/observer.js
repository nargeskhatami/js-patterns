const observers = [];
export default Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    const index = observers.indexOf(func);
    if (index > -1) {
      observers.splice(index, 1);
    }
  },
});
