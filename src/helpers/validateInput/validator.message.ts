export function validateMessage(vailue: string) {
  let errorMessage = "";
  if (vailue.length === 0) {
    errorMessage = "Введите сообщения";
  } else {
    errorMessage = "";
  }
  return errorMessage;
}
