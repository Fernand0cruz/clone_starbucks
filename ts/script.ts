const btnMenuMobile = document.querySelector(".header__nav--active") as HTMLElement | null;
const menuMobile = document.querySelector(".nav__mobile") as HTMLElement | null;
console.log(btnMenuMobile);
console.log(menuMobile);

let menuMobileOpen = false;

btnMenuMobile?.addEventListener("click", () => {
  if (menuMobile) {
    if (menuMobileOpen) {
      menuMobile.style.left = "-100%";
      menuMobileOpen = false;
    } else {
      menuMobile.style.left = "0";
      menuMobileOpen = true;
      console.log("aberto")
    }
  }
});
