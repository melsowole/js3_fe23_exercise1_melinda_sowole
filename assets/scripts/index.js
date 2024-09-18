// init page
navigate("home");

// add nav functionality
const navItems = document.querySelectorAll("ul a");

for (const item of navItems) {
  item.addEventListener("click", () => {
    history.pushState({ page: item.id }, "", "/" + item.id + ".html");
    navigate(item.id);
  });
}

window.addEventListener("popstate", (event) => {
  if (event.state) {
    switch (event.state.page) {
      case "home":
        navigate("home");
        break;
      case "contact":
        navigate("contact");
        break;
      case "about":
        navigate("about");
        break;
      default:
        navigate("home");
    }
  } else {
    navigate("home");
  }
});

async function navigate(pageName) {
  // define path
  const path = "./" + pageName + ".txt";

  //start load
  loading();

  // fetch page
  const response = await fetch(path);
  const page = await response.text();

  // resolve load
  notLoading();

  // set page on screen
  document.querySelector("main").innerHTML = page;
}

function loading() {
  const loadWrapper = document.createElement("div");
  loadWrapper.id = "loadWrapper";

  const load = document.createElement("div");
  load.textContent = "loading...";
  loadWrapper.append(load);

  document.body.append(loadWrapper);
}

function notLoading() {
  const loadWrapper = document.querySelector("#loadWrapper");

  loadWrapper.remove();
}
