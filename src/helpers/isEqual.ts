import { isArray } from "./isArray";
import { isObject } from "./isObject";
import { isSameType } from "./isSameType";

function isEqual(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }
  if ((!isObject(a) && !isArray(a)) || (!isObject(b) && !isArray(b))) {
    return false;
  }

  if (!isSameType(a, b) || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  /* eslint-disable-next-line */
  for (const key of Object.keys(a)) {
    /* eslint-disable-next-line */
    if (!b.hasOwnProperty(key)) {
      return false;
    }
    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

export { isEqual };
