function isSameType(item1: unknown, item2: unknown): boolean {
  return (
    Object.prototype.toString.call(item1) ===
    Object.prototype.toString.call(item2)
  );
}

export { isSameType };
