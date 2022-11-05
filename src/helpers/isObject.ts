function isObject(obj: unknown): boolean {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
export { isObject };
