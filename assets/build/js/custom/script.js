const siteNavbar = document.querySelector(".site-navbar");

const onScrollSetNavbarToLight = (event) => {
  const pageOffset =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (pageOffset > 0) {
    siteNavbar.classList.add("bg-light");
    siteNavbar.classList.add("shadow");
    siteNavbar.classList.add("shadow-sm");
    siteNavbar.classList.add("site-navbar--smaller-lg");
  } else {
    siteNavbar.classList.remove("bg-light");
    siteNavbar.classList.remove("shadow");
    siteNavbar.classList.remove("shadow-sm");
    siteNavbar.classList.remove("site-navbar--smaller-lg");
  }
};

document.addEventListener("scroll", onScrollSetNavbarToLight);
