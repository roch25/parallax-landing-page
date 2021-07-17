window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  const nav = document.getElementsByTagName("nav")[0];
  scroll < 480
    ? nav.classList.remove("shadow-sm", "opacity-95")
    : nav.classList.add("shadow-sm", "opacity-95");
});
