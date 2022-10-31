function clearLocalStorage(): void {
  localStorage.removeItem("isAuth");
  localStorage.removeItem("chatId");
  window.router.go("/settings");
}

export default clearLocalStorage;
