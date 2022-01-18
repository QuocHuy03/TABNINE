const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// thanh menu mobi //

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

//sroll//

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 200) {
    header.style.backgroundColor = "#f9f9f9";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// load //

$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".load").delay(1000).fadeOut("fast");
});
// scroll to top of //

const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

