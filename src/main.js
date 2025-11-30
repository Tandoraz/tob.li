import "./style.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const birthday = {
  day: 8,
  month: 4,
  year: 1998,
};

const navigateTo = (section) => {
  document.getElementById(section).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const calcAge = () => {
  let now = new Date();
  let age = now.getFullYear() - birthday.year;
  if (
    now.getMonth() < birthday.month ||
    (now.getMonth() + 1 === birthday.month && now.getDate() < birthday.day)
  ) {
    age--;
  }
  document.getElementById("age").innerHTML = age;
};

document.querySelectorAll("li.nav-item a").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    navigateTo(element.getAttribute("section-target"));
  });
});

calcAge();
