export function validateNameLastName(value: string): string {
  const reg: any = /^[А-Я]{1}[а-я]+$/g;
  let errorMessage = "";
  if (value.length === 0) {
    errorMessage = "Поле не должно быть пустым";
  } else if (value.length < 3) {
    errorMessage = "Поле должно быть меньше 3 символов";
  }else if(!value.match(reg)){
    errorMessage = "Поле заполнено не верно"
  }

  return errorMessage;
}
