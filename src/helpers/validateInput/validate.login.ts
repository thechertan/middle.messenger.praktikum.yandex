export function validateLogin(value: string): string {
  const reg: any = /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/;
  let errorMessage = "";
  if (value.length === 0) {
    errorMessage = "Поле не должно быть пустым";
  } else if (value.length < 3) {
    errorMessage = "Поле должно быть меньше 3 символов";
  }else if(!value.match(reg)){
    errorMessage = 'Не логин!'
  }

  return errorMessage;
}
