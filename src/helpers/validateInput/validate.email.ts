export function validateEmail(value: string): string {
  const isEmailRe: any = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let errorMessageLogin: string = "";
  if (value.length === 0) {
    errorMessageLogin = "Поле не может быть пустым";
  } else if (value.length <= 3) {
    errorMessageLogin = "E-mail не может состоять из 3 символов";
  } else if (!value.match(isEmailRe)){
    errorMessageLogin = 'Это не E-mail'
  }
  return errorMessageLogin;
}
