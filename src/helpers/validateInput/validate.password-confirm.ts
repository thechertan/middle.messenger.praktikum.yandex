export function validatePasswordConfirm(value: string, value2?: string): string {
  const reg: any = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,40}/g;
  let errorMessage = "";
  if (value.length === 0) {
    errorMessage = "Пароль не может быть пустым";
  } else if (value != value2) {
    errorMessage = "Пароли не совпадают";
  }else(errorMessage = "")

  return errorMessage;
}

// (?=.*[0-9]) - строка содержит хотя бы одно число;
// (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
// (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
// (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
// [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых
