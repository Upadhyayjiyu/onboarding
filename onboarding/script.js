function nextScreen(screenId) {
  const allScreens = document.querySelectorAll(".screen");
  allScreens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}
