export function validatePhone(vailue: string) {
  let errorMessage = "";
  const reg: any = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
  if (vailue.length === 0) {
    errorMessage = "Введите номер телефона";
  } else if (!vailue.match(reg)) {
    errorMessage = "Это не номер телефона";
  }
  return errorMessage;
}
