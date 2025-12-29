document.addEventListener("DOMContentLoaded", () => {
  const messengerBar = document.querySelector(".messenger-bar");

  if (!messengerBar) return;
  setTimeout(() => {
    messengerBar.classList.add("is-visible");
  }, 1500);
});
