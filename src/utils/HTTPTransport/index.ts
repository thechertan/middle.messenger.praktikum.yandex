import HTTPTransport from "./HTTPTransport";

const parentPath: string = "https://ya-praktikum.tech/api/v2";
const httpFetch = new HTTPTransport(parentPath);

export { httpFetch };
