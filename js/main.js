const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
const toTop = document.querySelector(".to-top");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (toTop) {
  const showToTop = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    toTop.classList.toggle("is-visible", y > 280);
  };

  window.addEventListener("scroll", showToTop, { passive: true });
  showToTop();

  toTop.addEventListener("click", (event) => {
    event.preventDefault();
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = document.getElementById("inicio");
    if (window.scrollTo) {
      window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    if (start) {
      start.setAttribute("tabindex", "-1");
      start.focus({ preventScroll: true });
    }
    if (history.replaceState) {
      history.replaceState(null, "", "#inicio");
    } else {
      location.hash = "inicio";
    }
  });
}
