const navEleme = document.querySelector("nav");
const navBarLinks = navEleme.querySelectorAll("a");

const navPosition = navEleme.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  navEleme.style.top = scrollPosition + "px";

  navBarLinks.forEach((link) => {
    const sectionEl = document.querySelector(link.hash);
    const offSet = 50;

    if (
      scrollPosition + offSet > sectionEl.offsetTop &&
      scrollPosition + offSet < sectionEl.offsetTop + sectionEl.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
