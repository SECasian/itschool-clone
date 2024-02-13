const dropdownBtn = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector("nav .show-dropdown");

dropdownBtn.addEventListener("click", function () {
  const dropdownMenuStyle = getComputedStyle(dropdownMenu);
  const visibility = dropdownMenuStyle.getPropertyValue("display");

  if (visibility === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});
