function main() {
  const home = document.querySelector(".home");
  const header = home.querySelector(".header");
  const menuBtn = header.querySelector(".btn-menu-mobile");
  const navItems = header.querySelectorAll(".nav-item > a");
  const subnavItems = header.querySelectorAll(".subnav-item > a");
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  // Get header height
  const headerHeight = header.clientHeight;

  // check elements if is empty
  if (!menuBtn) return;
  if (!headerHeight) return;
  if (!navItems) return;
  if (!subnavItems) return;

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("show-menu-mobile");

    if (header.clientHeight > headerHeight) {
      home.appendChild(overlayElement);
    } else {
      home.removeChild(overlayElement);
    }
  });

  overlayElement.addEventListener("click", () => {
    header.classList.toggle("show-menu-mobile");
    home.removeChild(overlayElement);
  });

  navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      const checkParentMenu =
        item.nextElementSibling &&
        item.nextElementSibling.classList.contains("subnav");
      if (checkParentMenu) {
        event.preventDefault();
      } else {
        if (header.clientHeight > headerHeight) {
          header.classList.toggle("show-menu-mobile");
          home.removeChild(overlayElement);
        }
      }
    });
  });

  subnavItems.forEach((item) => {
    item.addEventListener("click", () => {
      header.classList.toggle("show-menu-mobile");
      home.removeChild(overlayElement);
    });
  });
}

// TODO: click item nav close menu

main();
