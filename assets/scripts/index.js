// init page
navigate("home");

// add nav functionality
const navItems = document.querySelectorAll("ul a");

for (const item of navItems) {
  item.addEventListener("click", () => {
    navigate(item.id);
  });
}

async function navigate(pageName) {
  // define path
  const path = "./views/" + pageName + ".html";

  // change url
  history.pushState(null, "", "/" + pageName);

  // fetch page
  const response = await fetch(path);
  const page = await response.text();

  // set page on screen
  document.querySelector("main").innerHTML = page;
}
