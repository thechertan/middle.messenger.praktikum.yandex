function isArray(arr: unknown): boolean {
  return Object.prototype.toString.call(arr) === "[object Array]";
}

export { isArray };
