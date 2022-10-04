declare global {
  export type Nullable<T> = T | null;
  declare module "*.svg";
  declare module "*.png";
  declare module "*.jpg";
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {}