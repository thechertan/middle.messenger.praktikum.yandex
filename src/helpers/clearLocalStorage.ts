function clearLocalStorage(): void {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("chatId");
  window.router.go("/");
}

export default clearLocalStorage;
